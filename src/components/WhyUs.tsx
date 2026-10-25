import { whyUs } from "@/data/site";
import { Placeholder } from "./Placeholder";

export function WhyUs() {
  return (
    <section className="py-14 md:py-20" aria-labelledby="why-title">
      <div className="wrap text-center">
        <p className="eyebrow">{whyUs.eyebrow}</p>
        <h2 id="why-title" className="h2">
          {whyUs.title}
        </h2>
        <ul className="mt-10 grid gap-7 md:grid-cols-3">
          {whyUs.items.map((it, i) => (
            <li key={it.title}>
              <Placeholder
                src={`why-${i + 1}`}
                label={it.photo}
                className="h-[220px] rounded-arch"
              />
              <h3 className="mb-1.5 mt-3.5 text-[22px]">{it.title}</h3>
              <p>{it.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
