import type { PartnerLogo } from "@/types/achievement";

export default function PartnerLogoRow({
  partners,
  label,
}: {
  partners: PartnerLogo[];
  label?: string;
}) {
  if (!partners || partners.length === 0) return null;

  return (
    <div className="flex flex-col gap-1.5 mt-1">
      {label && (
        <span className="frame-label !text-[9.5px] !text-[#6E6E6E]">
          {label}
        </span>
      )}
      <div className="ach-partner-row" aria-label="Organizer and technology partners">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="ach-partner-chip"
            title={partner.name}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={partner.logo}
              alt={partner.name}
              loading="lazy"
              decoding="async"
            />
            <span>{partner.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

