import Image from "next/image";
import { ill } from "@/data/illustrations";

type Props = {
  label: string;
  src?: string;
  className?: string;
  priority?: boolean;
};

export function Placeholder({
  label,
  src,
  className = "",
  priority = false,
}: Props) {
  if (src) {
    return (
      <div className={`overflow-hidden rounded-[10px] bg-ph ${className}`}>
        <Image
          src={`/illustrations/${src}.svg`}
          alt={ill[src] || label}
          width={800}
          height={600}
          className="h-full w-full object-cover"
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div
      className={`ph ${className}`}
      role="img"
      aria-label={`ตำแหน่งรูป: ${label}`}
    >
      [{label}]
    </div>
  );
}
