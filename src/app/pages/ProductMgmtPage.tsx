import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";
import { SubPageLayout } from "../components/SubPageLayout";
import { ProjectCard } from "../components/ProjectCard";

// Product Management images
import imgProdMgmt1 from "figma:asset/719e1d181330373812e7a0a2cebd73bf07ac2b98.png";
import imgProdMgmt2 from "figma:asset/d4698590449169c9738c38b66883f6412c472a75.png";
import imgProdMgmt3 from "figma:asset/e75f644534e47dbc96b779ba210efbecb217382d.png";
import imgProdMgmt4 from "figma:asset/9870f8a8cbe4b7f8ca04d678001a7449c6a4cc24.png";

export function ProductMgmtPage() {
  return (
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
    </SubPageLayout>
  );
}