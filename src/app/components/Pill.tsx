export interface PillTag {
  label: string;
  color: string; // key into PILL_COLORS
}

export const PILL_COLORS: Record<string, { bg: string; text: string }> = {
  green:  { bg: "rgba(11,186,63,0.12)",  text: "#0a9e35" },
  teal:   { bg: "rgba(13,148,136,0.12)", text: "#0d7a70" },
  blue:   { bg: "rgba(59,130,246,0.12)", text: "#2563eb" },
  purple: { bg: "rgba(139,92,246,0.12)", text: "#7c3aed" },
  amber:  { bg: "rgba(245,158,11,0.12)", text: "#b45309" },
  pink:   { bg: "rgba(236,72,153,0.12)", text: "#be185d" },
  cyan:   { bg: "rgba(6,182,212,0.12)",  text: "#0891b2" },
  indigo: { bg: "rgba(99,102,241,0.12)", text: "#4f46e5" },
};

export function Pill({ label, color }: PillTag) {
  const colors = PILL_COLORS[color] ?? PILL_COLORS.green;
  return (
    <span
      className="font-['Roboto_Slab',serif] text-[11px] px-3 py-1 rounded-full"
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      {label}
    </span>
  );
}
