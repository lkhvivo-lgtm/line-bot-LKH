import { NextRequest, NextResponse } from 'next/server';
import { validateSignature, messagingApi } from '@line/bot-sdk';
import { getFaqCsv } from '@/lib/sheet';
import { askGemini, DEFAULT_REPLY } from '@/lib/gemini';

export const maxDuration = 30;

type LineEvent = {
  type: string;
  replyToken?: string;
  message?: { type: string; text?: string };
};

function getLineClient() {
  return new messagingApi.MessagingApiClient({
    channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN ?? '',
  });
}

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    env: {
      LINE_CHANNEL_SECRET: !!process.env.LINE_CHANNEL_SECRET,
      LINE_CHANNEL_ACCESS_TOKEN: !!process.env.LINE_CHANNEL_ACCESS_TOKEN,
      GEMINI_API_KEY: !!process.env.GEMINI_API_KEY,
      SHEET_CSV_URL: !!process.env.SHEET_CSV_URL,
    },
  });
}

export async function POST(req: NextRequest) {
  let rawBody = '';

  try {
    rawBody = await req.text();
    const signature = req.headers.get('x-line-signature') ?? '';
    const channelSecret = process.env.LINE_CHANNEL_SECRET;

    if (!channelSecret) {
      console.error('[webhook] LINE_CHANNEL_SECRET is not set');
      return NextResponse.json({ status: 'ok' });
    }

    let signatureValid: boolean;
    try {
      signatureValid = validateSignature(rawBody, channelSecret, signature);
    } catch (err) {
      console.error('[webhook] validateSignature threw:', err);
      return NextResponse.json({ status: 'ok' });
    }

    if (!signatureValid) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    let parsed: { events?: LineEvent[] };
    try {
      parsed = JSON.parse(rawBody);
    } catch (err) {
      console.error('[webhook] JSON.parse failed:', err, 'body:', rawBody.slice(0, 200));
      return NextResponse.json({ status: 'ok' });
    }

    const events = parsed.events ?? [];

    await Promise.all(
      events.map(async (event) => {
        if (event.type !== 'message') return;

        const msg = event.message;
        const replyToken = event.replyToken;
        if (!msg || msg.type !== 'text' || !msg.text || !replyToken) return;

        const userMessage = msg.text;
        let replyText = DEFAULT_REPLY;

        try {
          const faqCsv = await getFaqCsv();
          replyText = await askGemini(faqCsv, userMessage);
        } catch (err) {
          console.error('[webhook] gemini/sheet error:', err);
        }

        try {
          await getLineClient().replyMessage({
            replyToken,
            messages: [{ type: 'text', text: replyText }],
          });
        } catch (err) {
          console.error('[webhook] replyMessage failed:', err);
        }
      })
    );

    return NextResponse.json({ status: 'ok' });
  } catch (err) {
    console.error('[webhook] unhandled error:', err, 'body:', rawBody.slice(0, 200));
    return NextResponse.json({ status: 'ok' });
  }
}
