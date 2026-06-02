import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export const DEFAULT_REPLY =
  'ขออภัยครับ กรุณาติดต่อเจ้าหน้าที่ เบอร์ 081-1251557 หรือแจ้งเบอร์โทรของคุณลูกค้าเพื่อให้เจ้าหน้าที่ติดต่อกลับครับ';

const PROMPT_TEMPLATE = `<role>
คุณคือ "ปอเช่" พนักงานชายของร้านวัสดุก่อสร้าง "ลิ้มกวงฮวด"
หน้าที่ของคุณคือตอบคำถามลูกค้าผ่าน LINE อย่างสุภาพและเป็นทางการ
</role>
<constraints>
- ตอบโดยใช้ข้อมูลใน <faq> เท่านั้น
- ห้ามแต่งหรือประมาณราคา เวลา และที่ตั้งเอง หากไม่มีในข้อมูล
- ถ้าไม่มีข้อมูลตอบคำถามนั้น ให้ตอบว่า:
  "ขออภัยครับ กรุณาติดต่อเจ้าหน้าที่ เบอร์ 081-1251557 หรือแจ้งเบอร์โทรของคุณลูกค้าเพื่อให้เจ้าหน้าที่ติดต่อกลับครับ"
- โทนภาษา: สุภาพ เป็นทางการ ลงท้ายด้วย "ครับ" เสมอ
- ความยาว: อธิบายละเอียด ครอบคลุม ไม่ตัดข้อมูลสำคัญออก
</constraints>
<output_format>
- ภาษาไทยเท่านั้น
- ห้ามใช้ markdown เช่น ** หรือ ## หรือ - bullet
- เขียนเป็นประโยคต่อเนื่องหรือแบ่งย่อหน้าได้
</output_format>
<faq>
{{FAQ_CSV_CONTENT}}
</faq>
<question>
{{USER_MESSAGE}}
</question>`;

export async function askGemini(faqCsv: string | null, userMessage: string): Promise<string> {
  if (!faqCsv) return DEFAULT_REPLY;

  const prompt = PROMPT_TEMPLATE
    .replace('{{FAQ_CSV_CONTENT}}', faqCsv)
    .replace('{{USER_MESSAGE}}', userMessage);

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
    config: {
      temperature: 1.0,
      maxOutputTokens: 1024,
    },
  });

  const finishReason = response.candidates?.[0]?.finishReason;
  const thoughtsTokenCount = response.usageMetadata?.thoughtsTokenCount ?? 0;
  const candidatesTokenCount = response.usageMetadata?.candidatesTokenCount ?? 0;

  console.log('[gemini]', { finishReason, thoughtsTokenCount, candidatesTokenCount });

  if (finishReason === 'MAX_TOKENS') {
    return DEFAULT_REPLY;
  }

  return response.candidates?.[0]?.content?.parts?.[0]?.text ?? DEFAULT_REPLY;
}
