import { gallery } from "@/data/site";
import { Placeholder } from "./Placeholder";

export function Gallery() {
  const [first, ...rest] = gallery.photos;

  return (
    <section
      id="gallery"
      className="py-14 md:py-20"
      aria-labelledby="gallery-title"
    >
      <div className="wrap">
        <div className="text-center">
          <p className="eyebrow">{gallery.eyebrow}</p>
          <h2 id="gallery-title" className="h2">
            {gallery.title}
          </h2>
        </div>
        <div className="mt-9 grid grid-cols-2 grid-rows-[160px_120px_120px] gap-3.5 md:grid-cols-[2fr_1fr_1fr] md:grid-rows-[200px_200px]">
          <Placeholder
            src="gallery-1"
            label={first}
            className="col-span-2 md:col-span-1 md:row-span-2"
          />
          {rest.map((p, i) => (
            <Placeholder
              key={p}
              src={`gallery-${i + 2}`}
              label={p}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
