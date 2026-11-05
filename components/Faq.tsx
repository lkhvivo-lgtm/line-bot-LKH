import { FAQS } from '@/lib/catalog';

export function Faq() {
  return (
    <section className="section section--soft" aria-labelledby="faq-title">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">คำถามที่พบบ่อย</p>
          <h2 id="faq-title">เรื่องที่ลูกค้าถามกันบ่อย</h2>
        </div>

        <div className="faq">
          {FAQS.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p className="faq__answer">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
