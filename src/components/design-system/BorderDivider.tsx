/** Structural divider — continuous thin gray line (horizontal or vertical). */
export default function BorderDivider({
  orientation = "horizontal",
  tone = "subtle",
  className = "",
}: {
  orientation?: "horizontal" | "vertical";
  tone?: "subtle" | "secondary";
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`frame-divider ${
        orientation === "horizontal" ? "frame-divider--h block" : "frame-divider--v"
      } ${tone === "secondary" ? "frame-divider--secondary" : ""} ${className}`}
    />
  );
}

