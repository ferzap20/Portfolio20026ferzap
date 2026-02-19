import { motion } from "motion/react";

interface SectionTitleProps {
  icon: React.ReactNode;
  title: string;
  id: string;
}

export function SectionTitle({ icon, title, id }: SectionTitleProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3 mb-8 scroll-mt-24"
    >
      <span className="text-[#0BBA3F]">{icon}</span>
      <h2 className="font-['Roboto_Slab',serif] text-[#323435] text-[24px] md:text-[28px] font-normal">
        {title}
      </h2>
      <div className="flex-1 h-[2px] bg-[#0BBA3F] opacity-30 ml-2" />
    </motion.div>
  );
}
