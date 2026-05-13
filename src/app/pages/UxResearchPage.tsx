import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";
import { Link } from "react-router";
import { SubPageLayout } from "../components/SubPageLayout";
import { CaseStudyCard } from "../components/CaseStudyCard";
import { CreativeWorkJsonLd } from "../components/JsonLd";

// Card header images (local files) — single hero image per card
import imgUxMenu2 from "@/imports/ux-menu-2.png";
import imgUxNav2 from "@/imports/ux-nav-2.png";
import imgUxIA3 from "@/imports/ux-ia-3.png";

export function UxResearchPage() {
  return (
    <>
      <CreativeWorkJsonLd
        name="User Research"
        description="Uncovering user insights through research, testing, and data analysis to drive informed design decisions and meaningful product improvements."
        keywords={["UX Research", "User Testing", "Information Architecture", "VR Navigation", "Menu Design"]}
        slug="ux-research"
      />
      <SubPageLayout icon={<FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: 28 }} />} title="User Research">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-['Inter',sans-serif] text-[#666] text-[14px] leading-relaxed mb-8 max-w-[640px]"
        >
          Uncovering user insights through research, testing, and data analysis to drive informed design decisions and meaningful product improvements.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-50 p-6 rounded-lg mb-12 max-w-[640px]"
        >
          <h3 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold mb-4 uppercase tracking-wide">
            On this page
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/ux-research/ia-research" className="text-[#0BBA3F] hover:text-[#0a9931] text-[13px] font-['Roboto_Slab',serif] transition-colors">
                IA as a UX Research Tool
              </Link>
            </li>
            <li>
              <Link to="/ux-research/menu-redesign" className="text-[#0BBA3F] hover:text-[#0a9931] text-[13px] font-['Roboto_Slab',serif] transition-colors">
                Menu Redesign
              </Link>
            </li>
            <li>
              <Link to="/ux-research/vr-navigation" className="text-[#0BBA3F] hover:text-[#0a9931] text-[13px] font-['Roboto_Slab',serif] transition-colors">
                Improving VR App Navigation
              </Link>
            </li>
          </ul>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div id="ia-research" className="scroll-mt-32">
            <CaseStudyCard
              title="IA as a UX Research Tool"
              description="Given a problem statement, I wanted to explore using AI as a tool to develop a user research project in a subject I'm not particularly familiar with. Also, I wanted to test the framework “Thinking Styles“ by Indi Young."
              to="/ux-research/ia-research"
              headerImage={imgUxIA3}
              pills={[
                { label: "AI Research", color: "purple" },
                { label: "Thinking Styles", color: "indigo" },
                { label: "EdTech", color: "cyan" },
              ]}
              index={0}
            />
          </div>

          <div id="menu-redesign" className="scroll-mt-32">
            <CaseStudyCard
              title="Menu Redesign"
              description="Redesigned the primary product menu to address usability issues, improve icon clarity, and unify visual language across the interface."
              to="/ux-research/menu-redesign"
              headerImage={imgUxMenu2}
              pills={[
                { label: "Usability", color: "green" },
                { label: "Iconography", color: "amber" },
                { label: "Desktop UI", color: "blue" },
              ]}
              index={1}
            />
          </div>

          <div id="vr-navigation" className="scroll-mt-32">
            <CaseStudyCard
              title="Improving VR App Navigation"
              description="Redesigned the navigation system for a VR product to align with industry standards, reduce user friction, and improve overall usability through research, testing, and iterative design."
              to="/ux-research/vr-navigation"
              headerImage={imgUxNav2}
              pills={[
                { label: "VR Navigation", color: "purple" },
                { label: "User Testing", color: "green" },
                { label: "XR Standards", color: "teal" },
              ]}
              index={2}
            />
          </div>
        </div>
      </SubPageLayout>
    </>
  );
}
