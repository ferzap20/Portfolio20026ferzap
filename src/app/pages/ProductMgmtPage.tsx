import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";
import { SubPageLayout } from "../components/SubPageLayout";
import { ProjectCard } from "../components/ProjectCard";
import { CreativeWorkJsonLd } from "../components/JsonLd";

// Product Management images (local files)
import imgProdMgmt1 from "@/imports/prod-mgmt-1.png";
import imgProdMgmt2 from "@/imports/prod-mgmt-2.png";
import imgProdMgmt3 from "@/imports/prod-mgmt-3.png";
import imgProdMgmt4 from "@/imports/prod-mgmt-4.png";

export function ProductMgmtPage() {
  return (
    <>
      <CreativeWorkJsonLd
        name="Product Management & Ownership"
        description="Bridging design, development, and business goals through strategic product ownership and cross-team alignment."
        keywords={["Product Strategy", "Product Management", "Roadmap Planning", "Cross-team Alignment"]}
        slug="product-management"
      />
      <SubPageLayout
        icon={<FontAwesomeIcon icon={faClipboardList} style={{ fontSize: 28 }} />}
        title="Product Management / Ownership"
      >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="font-['Inter',sans-serif] text-[#666] text-[14px] leading-relaxed mb-8 max-w-[640px]"
      >
        Bridging design, development, and business goals through strategic product ownership.
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
            <a href="#product-strategy" className="text-[#0BBA3F] hover:text-[#0a9931] text-[13px] font-['Roboto_Slab',serif] transition-colors">
              Product Strategy & Vision
            </a>
          </li>
        </ul>
      </motion.div>

      <div id="product-strategy" className="scroll-mt-32">
        <ProjectCard
        title="Product Strategy & Vision"
        subtitle="Roadmap Planning & Cross-Team Alignment"
        images={[imgProdMgmt1, imgProdMgmt2, imgProdMgmt3, imgProdMgmt4]}
        details={[
          {
            label: "About the Project",
            content:
              "Collaborated with company leadership to define and visualize short and long-term product strategy, organize and prioritize the roadmap, and create clear communication tools to align all teams around a shared vision.",
          },
          {
            label: "Problem to Solve",
            content:
              "There was a lack of clarity and alignment around the product's direction across the organization. Leadership had strategic goals, but these weren't clearly translated into actionable plans or shared across teams. This led to misaligned priorities, fragmented efforts, and inconsistent communication between product, design, development, and business units.",
          },
          {
            label: "Actions",
            content: [
              "Audited current initiatives and backlog items to identify overlaps, gaps, and priority misalignment.",
              "Proposed a structured roadmap framework tied to short-term deliverables and long-term product bets, along with tiered timelines.",
              "Switched from 1 release \"when things are done\" to 3 per year with a clear backlog and MVPs to add in each release that will be iterated.",
              "Created visual formats (roadmap slides, FigJams, and summaries) tailored for different audiences: direction, devs, design, and customers.",
            ],
          },
          {
            label: "Tools",
            content:
              "Azure DevOps (creation of US, backlog management, sprints management, stats), Confluence, FigJam.",
          },
        ]}
        />
      </div>
    </SubPageLayout>
    </>
  );
}