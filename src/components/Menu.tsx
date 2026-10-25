import { menu } from "@/data/site";

export function Menu() {
  return (
    <section
      id="menu"
      className="bg-paper py-14 md:py-20"
      aria-labelledby="menu-title"
    >
      <div className="wrap">
        <div className="text-center">
          <p className="eyebrow">{menu.eyebrow}</p>
          <h2 id="menu-title" className="h2">
            {menu.title}
          </h2>
        </div>
        <ul className="mt-9 grid gap-x-14 gap-y-2.5 md:grid-cols-2">
          {menu.items.map((m) => (
            <li
              key={m.name}
              className="flex justify-between border-b border-dashed border-rule py-2.5"
            >
              <span>{m.name}</span>
              <span
                className="font-en text-caramel-ink"
                aria-label={`${m.price} บาท`}
              >
                {m.price}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-[15px] text-ink/80">{menu.note}</p>
      </div>
    </section>
  );
}
