import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageModal } from "./ImageModal";

export function ImageGallery({
  images,
  columns = 2,
}: {
  images: string[];
  columns?: number;
}) {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className={`grid gap-3 ${
          columns === 3
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1 sm:grid-cols-2"
        }`}
      >
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setModalIndex(i)}
            className="relative overflow-hidden rounded-lg bg-[#f5f5f5] aspect-[4/3] cursor-pointer group border border-transparent hover:border-[#0BBA3F]/40 transition-colors"
          >
            <img
              src={img}
              alt=""
              className="absolute inset-0 size-full object-contain p-1"
            />
          </button>
        ))}
      </motion.div>

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
