import { site, visit } from "@/data/site";
import { Placeholder } from "./Placeholder";

export function Visit() {
  return (
    <section
      id="visit"
      className="bg-green-ink py-14 text-white md:py-20"
      aria-labelledby="visit-title"
    >
      <div className="wrap grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="eyebrow !text-sand">{visit.eyebrow}</p>
          <h2 id="visit-title" className="h2 mb-4">
            {visit.title}
          </h2>
          <address className="not-italic">
            {site.hours}
            <br />
            {site.address}
            <br />
            โทร {site.phoneLabel}
            <br />
            LINE {site.lineLabel}
          </address>
          <div className="mt-5 flex flex-wrap gap-3">
            <a className="btn-line" href={site.lineUrl}>
              {visit.lineCta}
            </a>
            <a className="btn bg-white text-ink" href={site.mapsUrl}>
              {visit.mapCta}
            </a>
          </div>
        </div>
        <Placeholder src="map" label={visit.map} className="h-[300px]" />
      </div>
    </section>
  );
}
