import { ReactNode } from "react";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { ContactSection } from "./ContactSection";

interface SubPageLayoutProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

export function SubPageLayout({ icon, title, children }: SubPageLayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen">
      {/* Header bar */}
      <div className="bg-[#323435] pt-16 pb-10">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-white/50 hover:text-[#0BBA3F] transition-colors cursor-pointer mb-6 group"
          >
            <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: 16 }} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-['Roboto_Slab',serif] text-[13px]">Back to Home</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <span className="text-[#0BBA3F]">{icon}</span>
            <h1 className="font-['Kdam_Thmor_Pro',sans-serif] text-white text-[28px] md:text-[36px] tracking-[2px]">
              {title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-12 md:py-16">
        {children}
      </div>

      {/* Footer */}
      <ContactSection />
    </div>
  );
}