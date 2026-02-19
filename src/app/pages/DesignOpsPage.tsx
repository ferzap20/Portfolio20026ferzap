import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";
import { SubPageLayout } from "../components/SubPageLayout";
import { ProjectCard } from "../components/ProjectCard";

// Product Process / Design Ops images
import imgDesignSystem1 from "figma:asset/7d72c1df653427e908365dddb6d776409741d85e.png";
import imgDesignSystem2 from "figma:asset/6869f506be388995d98f4b9a224edb1c4d2298ae.png";
import imgDesignSystem3 from "figma:asset/be5e4a1389554e3a02d7ae70f370d923cd8ffd49.png";
import imgOnboarding1 from "figma:asset/f5f63b34b766e082e57d61ccc20f6b43ba078762.png";
import imgOnboarding2 from "figma:asset/df718dcb6f0b7d14ad911004dbd9dc9153cebd84.png";
import imgUnreal1 from "figma:asset/f71208b1eef7c4fa8a5378861e11564ec37ce31b.png";
import imgUnreal2 from "figma:asset/4fadeea294524799a7e2ee4ffc60c9e28d87fcb7.png";
import imgUnreal3 from "figma:asset/5e66204d108d1cc3602686b3d0950e8dd66a2f0d.png";
import imgOnboarding3 from "figma:asset/f9f6240c282cb68a154047d432fbf9c75c3166bd.png";

export function DesignOpsPage() {
  return (
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
      <div className="space-y-6">
        <ProjectCard
          title="Design System for VR"
          subtitle="Design System for VR / Desktop app"
          images={[imgDesignSystem2, imgDesignSystem1, imgDesignSystem3, imgOnboarding1, imgOnboarding2]}
          details={[
            {
              label: "About the Project",
              content:
                "I lead the creation of the first design system for a VR product to bring consistency, efficiency, and clarity to an unstructured design and dev process. The initiative help to close the gaps between design, development, and product teams to create a more consistent and usable experience.",
            },
            {
              label: "Problem to solve",
              content:
                "The team lacked design standards, leading to inconsistent VR interactions, isolated dev work, and misalignment across product, design, and engineering. Usability was inconsistent, and development was inefficient due to repeated one-off solutions.",
            },
            {
              label: "Actions",
              content:
                "I researched best practices and user interaction patterns in successful VR apps, games, and XR environments (but mostly Gravity Sketch which I love). I gathered research on spatial UI principles, motion/gesture guidelines, depth cues, and accessibility considerations specific to immersive experiences.",
            },
            {
              label: "Results & Impact",
              content: [
                "Established a centralized design system with reusable VR UI patterns",
                "Improved collaboration and alignment across teams",
                "Improved usability in testing sessions, especially around spatial navigation",
              ],
            },
          ]}
        />

        <ProjectCard
          title="Onboarding Guides / Feature Documentation"
          subtitle="Product documentation for team autonomy"
          images={[imgUnreal1, imgOnboarding3]}
          details={[
            {
              label: "About the Project",
              content:
                "Structured product documentation to improve team autonomy, and ensure consistent understanding of features.",
            },
            {
              label: "Problem to solve",
              content:
                'New team members and cross-functional colleagues struggled to understand existing features or the "why" of new ones. There was no centralized or up-to-date documentation to support knowledge sharing.',
            },
            {
              label: "Actions",
              content:
                "I audited existing materials and studied documentation practices from other teams and companies to define a scalable structure.",
            },
            {
              label: "Results & Impact",
              content: [
                "Created a central documentation hub in Confluence with clear feature guides",
                "Established a scalable documentation framework adopted across squads",
                "These features guides help us to write customer documentation clearer and faster",
              ],
            },
          ]}
        />

        <ProjectCard
          title="Use Case: Design Elements in Unreal Engine"
          subtitle="Modular UI kit based on Atomic Design principles"
          images={[imgUnreal3]}
          details={[
            {
              label: "About the Project",
              content:
                "Led the development of a modular UI kit in Unreal Engine based on Atomic Design principles, enabling developers to build consistent interfaces by reusing predefined components directly aligned with the Figma design system.",
            },
            {
              label: "Problem to solve",
              content:
                "Developers were facing challenges translating Figma designs into Unreal Engine. Figma Dev Mode wasn't being used effectively, leading to layout inconsistencies, incorrect sizing, and style mismatches. Without a shared system or reusable components, each UI screen was being built manually from scratch, increasing development time and reducing visual consistency across the app.",
            },
            {
              label: "Actions",
              content:
                "I proposed recreating the UI kit directly inside Unreal, mirroring the Atomic Design structure used in Figma (atoms, molecules, organisms). I identified the most commonly used components—buttons, inputs, labels, modals—and rebuilt them from scratch as standardized Unreal widgets with consistent styling, sizing, and spacing. This system allowed developers to drag and drop pre-configured elements to assemble new UIs quickly and accurately.",
            },
            {
              label: "Results & Impact",
              content: [
                "Enabled faster UI assembly by allowing developers to use ready-made widgets instead of building layouts manually",
                "Increased developer awareness of the value of consistency, design systems, and shared practices",
                "Saved time across teams and set a strong foundation for scalable, maintainable UI development in future projects",
              ],
            },
          ]}
        />
      </div>
    </SubPageLayout>
  );
}