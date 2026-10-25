import { site, footer } from "@/data/site";

export function Footer() {
  return (
    <>
      <footer className="py-7 pb-24 text-sm text-ink/80 md:pb-7">
        <div className="wrap flex flex-wrap justify-between gap-2">
          <span>{footer.copy}</span>
          <span>{site.credit}</span>
        </div>
      </footer>
      <a
        href={site.lineUrl}
        className="btn-line fixed bottom-4 right-4 z-10 shadow-md md:hidden"
        aria-label="แอด LINE ร้าน"
      >
        LINE
      </a>
    </>
  );
}
