import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export interface PillTag {
  label: string;
  color: string; // key into PILL_COLORS
}

const PILL_COLORS: Record<string, { bg: string; text: string }> = {
  green:  { bg: "rgba(11,186,63,0.12)",  text: "#0a9e35" },
  teal:   { bg: "rgba(13,148,136,0.12)", text: "#0d7a70" },
  blue:   { bg: "rgba(59,130,246,0.12)", text: "#2563eb" },
  purple: { bg: "rgba(139,92,246,0.12)", text: "#7c3aed" },
  amber:  { bg: "rgba(245,158,11,0.12)", text: "#b45309" },
  pink:   { bg: "rgba(236,72,153,0.12)", text: "#be185d" },
  cyan:   { bg: "rgba(6,182,212,0.12)",  text: "#0891b2" },
  indigo: { bg: "rgba(99,102,241,0.12)", text: "#4f46e5" },
};

export interface PersonalProjectCardProps {
  title: string;
  description: string;
  url: string;
  headerImage?: string;
  pills: PillTag[];
  index?: number;
}

export function PersonalProjectCard({
  title,
  description,
  url,
  headerImage,
  pills,
  index = 0,
}: PersonalProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-[#e0e0e0] rounded-lg overflow-hidden bg-white hover:border-[#0BBA3F]/40 transition-colors hover:shadow-lg hover:shadow-[#0BBA3F]/5"
    >
      {/* Header image */}
      <div className="relative overflow-hidden aspect-[16/9] bg-[#f0f0f0]">
        {headerImage ? (
          <img
            src={headerImage}
            alt={title}
            className="absolute inset-0 size-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border-2 border-dashed border-[#0BBA3F]/20 flex items-center justify-center">
              <span className="font-['Kdam_Thmor_Pro',sans-serif] text-[#0BBA3F]/30 text-[18px]">
                {title.charAt(0)}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        {/* Title + link */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <h4 className="font-['Roboto_Slab',serif] text-[#323435] text-[18px]">
            {title}
          </h4>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 mt-0.5 text-[#0BBA3F] hover:text-[#09a536] transition-colors"
            aria-label={`Visit ${title}`}
          >
            <FontAwesomeIcon icon={faUpRightFromSquare} style={{ fontSize: 18 }} />
          </a>
        </div>

        {/* Description */}
        <p className="font-['Inter',sans-serif] text-[#666] text-[13px] leading-relaxed mb-4">
          {description}
        </p>

        {/* Pills */}
        <div className="flex flex-wrap gap-2">
          {pills.map((pill, i) => {
            const colors = PILL_COLORS[pill.color] ?? PILL_COLORS.green;
            return (
              <span
                key={i}
                className="font-['Roboto_Slab',serif] text-[11px] px-3 py-1 rounded-full"
                style={{ backgroundColor: colors.bg, color: colors.text }}
              >
                {pill.label}
              </span>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}