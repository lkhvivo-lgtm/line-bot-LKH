import { NextRequest, NextResponse } from 'next/server';
import { validateSignature, messagingApi } from '@line/bot-sdk';
import { getFaqCsv } from '@/lib/sheet';
import { askGemini, DEFAULT_REPLY } from '@/lib/gemini';

export const maxDuration = 30;

const lineClient = new messagingApi.MessagingApiClient({
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN!,
});

type LineEvent = {
  type: string;
  replyToken?: string;
  message?: { type: string; text?: string };
};

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const signature = req.headers.get('x-line-signature') ?? '';

  if (!validateSignature(rawBody, process.env.LINE_CHANNEL_SECRET!, signature)) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
  }

  const { events = [] }: { events: LineEvent[] } = JSON.parse(rawBody);

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
        console.error('[webhook] error:', err);
      }

      try {
        await lineClient.replyMessage({
          replyToken,
          messages: [{ type: 'text', text: replyText }],
        });
      } catch (err) {
        console.error('[webhook] replyMessage failed:', err);
      }
    })
  );

  return NextResponse.json({ status: 'ok' });
}
