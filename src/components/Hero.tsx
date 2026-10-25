import { site, nav, hero } from "@/data/site";
import { Placeholder } from "./Placeholder";

export function Hero() {
  return (
    <header className="bg-sand">
      <div className="wrap">
        <nav
          className="flex items-center justify-between py-5"
          aria-label="เมนูหลัก"
        >
          <a
            href="#top"
            className="font-head text-xl font-semibold text-ink no-underline"
          >
            {site.name}
          </a>
          <ul className="hidden gap-6 text-[15px] md:flex">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  className="text-ink no-underline hover:underline"
                  href={n.href}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="wrap grid items-center gap-10 pb-12 pt-6 md:grid-cols-[1.1fr_.9fr] md:pb-[72px] md:pt-14">
        <div>
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="mb-4 mt-3 text-[42px] leading-[1.12] md:text-[64px]">
            {hero.titleLines.map((line, i) => (
              <span key={line}>
                {line}
                {i < hero.titleLines.length - 1 ? <br /> : null}
              </span>
            ))}
          </h1>
          <p>{hero.lead}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-line" href={site.lineUrl}>
              {hero.lineCta}
            </a>
            <a className="btn-ghost" href={site.mapsUrl}>
              {hero.mapCta}
            </a>
          </div>
        </div>
        <Placeholder
          src="hero"
          label={hero.photo}
          className="h-[320px] rounded-arch md:h-[440px]"
          priority
        />
      </div>
    </header>
  );
}
