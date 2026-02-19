import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { ImageModal } from "./ImageModal";

interface ProjectDetail {
  label: string;
  content: string | string[];
}

interface ProjectCardProps {
  title: string;
  subtitle?: string;
  details: ProjectDetail[];
  images: string[];
  headerZoom?: number;
  imageBg?: string;
}

export function ProjectCard({
  title,
  subtitle,
  details,
  images,
  headerZoom = 1,
  imageBg = "#f0f0f0",
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [imageHovered, setImageHovered] = useState(false);

  const headerImage = images[0] ?? null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="border border-[#e0e0e0] rounded-lg overflow-hidden bg-white"
      >
        {/* Single header image */}
        {headerImage && (
          <div
            className="relative overflow-hidden aspect-[16/9] cursor-pointer"
            style={{ backgroundColor: imageBg }}
            onMouseEnter={() => setImageHovered(true)}
            onMouseLeave={() => setImageHovered(false)}
            onClick={() => setExpanded(!expanded)}
          >
            <img
              src={headerImage}
              alt=""
              className="absolute inset-0 size-full object-cover"
              style={{ transform: `scale(${headerZoom})` }}
            />
          </div>
        )}

        {/* Clickable title / subtitle area */}
        <button
          onClick={() => setExpanded(!expanded)}
          className={`w-full text-left p-5 md:p-6 cursor-pointer group flex items-start justify-between gap-4 transition-colors ${imageHovered ? "bg-[#fafafa]" : "hover:bg-[#fafafa]"}`}
        >
          <div className="flex-1 min-w-0">
            <h4 className={`font-['Roboto_Slab',serif] text-[18px] font-normal transition-colors ${imageHovered ? "text-[#0BBA3F]" : "text-[#323435] group-hover:text-[#0BBA3F]"}`}>
              {title}
            </h4>
            {subtitle && (
              <p className="font-['Inter',sans-serif] text-[#666] text-[13px] mt-1">
                {subtitle}
              </p>
            )}
          </div>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 mt-1"
          >
            <div className="w-7 h-7 rounded-full bg-[#0BBA3F] flex items-center justify-center">
              <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: 16 }} className="text-white" />
            </div>
          </motion.div>
        </button>

        {/* Expanded content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-5 md:px-6 pb-5 md:pb-6">
                {/* Project details */}
                <div className="space-y-4 mb-6">
                  {details.map((detail, i) => (
                    <div key={i}>
                      <p className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[14px] font-normal mb-1">
                        {detail.label}
                      </p>
                      {Array.isArray(detail.content) ? (
                        <ul className="list-disc list-inside space-y-1">
                          {detail.content.map((item, j) => (
                            <li
                              key={j}
                              className="font-['Inter',sans-serif] text-[#333] text-[13px]"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="font-['Inter',sans-serif] text-[#333] text-[13px] leading-relaxed">
                          {detail.content}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Project Gallery Images */}
                {images.length > 0 && (
                  <div>
                    <p className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] mb-3">
                      Project Gallery
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setModalIndex(i)}
                          className="relative overflow-hidden rounded-md cursor-pointer group/thumb border border-transparent hover:border-[#0BBA3F]/40 transition-colors"
                          style={{
                            width: i % 3 === 0 ? 120 : i % 3 === 1 ? 96 : 80,
                            height: i % 3 === 0 ? 80 : i % 3 === 1 ? 72 : 64,
                            backgroundColor: imageBg,
                          }}
                        >
                          <img
                            src={img}
                            alt=""
                            className="absolute inset-0 size-full object-contain p-1"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {modalIndex !== null && (
          <ImageModal
            images={images}
            initialIndex={modalIndex}
            onClose={() => setModalIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}