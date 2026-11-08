import Reveal from "./Reveal";
import { d } from "./revealDelay";

export default function SectionHeader() {
  return (
    <Reveal as="header" amount={0.4}>
      <p className="xp-label" data-reveal style={d(0)}>
        {"// Stacks & Experience"}
      </p>
      <h2 className="xp-heading mt-1.5" data-reveal style={d(1)}>
        Where I&apos;m good and where I learned from
      </h2>
    </Reveal>
  );
}
