import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ImageModal } from "./ImageModal";

export function EnlargeableImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className={`relative cursor-pointer group ${className}`}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        onClick={() => setIsModalOpen(true)}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto rounded-lg transition-all duration-300 group-hover:brightness-90"
        />

        {/* Hover overlay with loupe icon */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 rounded-lg bg-black/40 flex items-center justify-center pointer-events-none"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="text-white"
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ fontSize: 32 }}
              className="text-white drop-shadow-lg"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <ImageModal
            images={[src]}
            initialIndex={0}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
