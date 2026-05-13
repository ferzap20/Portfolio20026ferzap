import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";
import { Link } from "react-router";
import { SubPageLayout } from "../components/SubPageLayout";
import { CaseStudyCard } from "../components/CaseStudyCard";
import { CreativeWorkJsonLd } from "../components/JsonLd";

// Card header images (local files) — single hero image per card
import imgDesignSystem2 from "@/imports/design-system-2.png";
import imgOnboarding3 from "@/imports/onboarding-3.png";
import imgUnreal3 from "@/imports/unreal-3.png";

export function DesignOpsPage() {
  return (
    <>
      <CreativeWorkJsonLd
        name="Design Ops & Product Process"
        description="How I help SaaS founders move fast by establishing design systems and processes that let teams validate ideas without chaos."
        keywords={["Design Systems", "Design Ops", "VR Design", "Process Design"]}
        slug="design-ops"
      />
      <SubPageLayout
        icon={<FontAwesomeIcon icon={faLayerGroup} style={{ fontSize: 28 }} />}
        title="Product Process / Design Ops"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-['Inter',sans-serif] text-[#666] text-[14px] leading-relaxed mb-8 max-w-[640px]"
        >
          Scaling design through systems, documentation, and cross-team processes to deliver consistent and efficient product experiences.
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
              <Link to="/design-ops/design-system-vr" className="text-[#0BBA3F] hover:text-[#0a9931] text-[13px] font-['Roboto_Slab',serif] transition-colors">
                Design System for VR
              </Link>
            </li>
            <li>
              <Link to="/design-ops/onboarding-docs" className="text-[#0BBA3F] hover:text-[#0a9931] text-[13px] font-['Roboto_Slab',serif] transition-colors">
                Onboarding Guides / Feature Documentation
              </Link>
            </li>
            <li>
              <Link to="/design-ops/unreal-ui" className="text-[#0BBA3F] hover:text-[#0a9931] text-[13px] font-['Roboto_Slab',serif] transition-colors">
                Design Elements in Unreal Engine
              </Link>
            </li>
          </ul>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div id="design-system-vr" className="scroll-mt-32">
            <CaseStudyCard
              title="Design System for VR"
              description="I lead the creation of the first design system for a VR product to bring consistency, efficiency, and clarity to an unstructured design and dev process. The initiative help to close the gaps between design, development, and product teams to create a more consistent and usable experience."
              to="/design-ops/design-system-vr"
              headerImage={imgDesignSystem2}
              pills={[
                { label: "Design Systems", color: "green" },
                { label: "VR Design", color: "purple" },
                { label: "Process", color: "teal" },
              ]}
              index={0}
            />
          </div>

          <div id="onboarding-docs" className="scroll-mt-32">
            <CaseStudyCard
              title="Onboarding Guides / Feature Documentation"
              description="Structured product documentation to improve team autonomy, and ensure consistent understanding of features."
              to="/design-ops/onboarding-docs"
              headerImage={imgOnboarding3}
              pills={[
                { label: "Documentation", color: "blue" },
                { label: "Confluence", color: "indigo" },
                { label: "Process", color: "teal" },
              ]}
              index={1}
            />
          </div>

          <div id="unreal-ui" className="scroll-mt-32">
            <CaseStudyCard
              title="Design Elements in Unreal Engine"
              description="Led the development of a modular UI kit in Unreal Engine based on Atomic Design principles, enabling developers to build consistent interfaces by reusing predefined components directly aligned with the Figma design system."
              to="/design-ops/unreal-ui"
              headerImage={imgUnreal3}
              pills={[
                { label: "Unreal Engine", color: "amber" },
                { label: "Atomic Design", color: "green" },
                { label: "UI Kit", color: "cyan" },
              ]}
              index={2}
            />
          </div>
        </div>
      </SubPageLayout>
    </>
  );
}
