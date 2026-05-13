import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { SubPageLayout } from "../../components/SubPageLayout";
import { Breadcrumb } from "../../components/Breadcrumb";
import { ImageGallery } from "../../components/ImageGallery";
import { CreativeWorkJsonLd } from "../../components/JsonLd";

// ============================================================
// CASE STUDY: Design System for VR
// Edit the sections below freely — this is a canvas template.
// ============================================================

// Hero image (single large image at top of case study)
import imgHero from "@/imports/design-system-2.png";

// Gallery images shown at the bottom of the page
import imgDesignSystem1 from "@/imports/design-system-1.png";
import imgDesignSystem3 from "@/imports/design-system-3.png";
import imgOnboarding1 from "@/imports/onboarding-1.png";
import imgOnboarding2 from "@/imports/onboarding-2.png";

export function DesignSystemVrPage() {
  return (
    <>
      <CreativeWorkJsonLd
        name="Design System for VR"
        description="The first design system for a VR product — bringing consistency, efficiency, and clarity to an unstructured design and dev process."
        keywords={["Design Systems", "VR Design", "Spatial UI", "Cross-team collaboration"]}
        slug="design-ops/design-system-vr"
      />
      <SubPageLayout
        icon={<FontAwesomeIcon icon={faLayerGroup} style={{ fontSize: 28 }} />}
        title="Design System for VR"
      >
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", to: "/" },
            { label: "Design Ops", to: "/design-ops" },
            { label: "Design System for VR" },
          ]}
        />

        {/* Subtitle */}
        <h2 className="font-['Kdam_Thmor_Pro',sans-serif] text-[#0BBA3F] text-[28px] md:text-[36px] tracking-[2px] mb-8">
          Design System for VR / Desktop app
        </h2>

        {/* HERO IMAGE */}
        <div className="mb-12 rounded-lg overflow-hidden bg-[#f5f5f5]">
          <img src={imgHero} alt="Mockup of the VR design system component library showing reusable spatial UI patterns" className="w-full h-auto" />
        </div>

        {/* ABOUT THE PROJECT */}
        <section className="mb-10 max-w-[720px]">
          <h3 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-3">
            About the Project
          </h3>
          <p className="font-['Inter',sans-serif] text-[#444] text-[14px] leading-relaxed">
            I lead the creation of the first design system for a VR product to bring consistency, efficiency, and clarity to an unstructured design and dev process. The initiative help to close the gaps between design, development, and product teams to create a more consistent and usable experience.
          </p>
        </section>

        {/* PROBLEM TO SOLVE */}
        <section className="mb-10 max-w-[720px]">
          <h3 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-3">
            Problem to Solve
          </h3>
          <p className="font-['Inter',sans-serif] text-[#444] text-[14px] leading-relaxed">
            The team lacked design standards, leading to inconsistent VR interactions, isolated dev work, and misalignment across product, design, and engineering. Usability was inconsistent, and development was inefficient due to repeated one-off solutions.
          </p>
        </section>

        {/* ACTIONS */}
        <section className="mb-10 max-w-[720px]">
          <h3 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-3">
            Actions
          </h3>
          <p className="font-['Inter',sans-serif] text-[#444] text-[14px] leading-relaxed">
            I researched best practices and user interaction patterns in successful VR apps, games, and XR environments (but mostly Gravity Sketch which I love). I gathered research on spatial UI principles, motion/gesture guidelines, depth cues, and accessibility considerations specific to immersive experiences.
          </p>
        </section>

        {/* RESULTS & IMPACT */}
        <section className="mb-12 max-w-[720px]">
          <h3 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-3">
            Results &amp; Impact
          </h3>
          <ul className="list-disc pl-5 space-y-2 font-['Inter',sans-serif] text-[#444] text-[14px] leading-relaxed">
            <li>Established a centralized design system with reusable VR UI patterns</li>
            <li>Improved collaboration and alignment across teams</li>
            <li>Improved usability in testing sessions, especially around spatial navigation</li>
          </ul>
        </section>

        {/* IMAGE GALLERY */}
        <section>
          <h3 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-4">
            Project Gallery
          </h3>
          <ImageGallery
            images={[imgDesignSystem1, imgDesignSystem3, imgOnboarding1, imgOnboarding2]}
            columns={3}
          />
        </section>
      </SubPageLayout>
    </>
  );
}
