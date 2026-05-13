import { ReactNode } from "react";
import { motion } from "motion/react";
import { ContactSection } from "./ContactSection";

interface SubPageLayoutProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

export function SubPageLayout({ icon, title, children }: SubPageLayoutProps) {
  return (
    <div className="bg-white min-h-screen">
      {/* Decorative spacer behind fixed navbar */}
      <div aria-hidden="true" className="bg-[#323435] pt-16 pb-10" />

      {/* Main content */}
      <main className="max-w-[1100px] mx-auto px-5 md:px-8 py-12 md:py-16">
        {/* Title section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="text-[#0BBA3F]">{icon}</span>
          <h1 className="font-['Kdam_Thmor_Pro',sans-serif] text-[#323435] text-[28px] md:text-[36px] tracking-[2px]">
            {title}
          </h1>
        </motion.div>

        {children}
      </main>

      {/* Footer */}
      <ContactSection />
    </div>
  );
}
