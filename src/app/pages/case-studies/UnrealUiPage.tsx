import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { SubPageLayout } from "../../components/SubPageLayout";
import { Breadcrumb } from "../../components/Breadcrumb";
import { ImageGallery } from "../../components/ImageGallery";
import { CreativeWorkJsonLd } from "../../components/JsonLd";

// ============================================================
// CASE STUDY: Design Elements in Unreal Engine
// Edit the sections below freely — this is a canvas template.
// ============================================================

// Hero image
import imgHero from "@/imports/unreal-3.png";

// Gallery images — add more here as needed
import imgUnreal1 from "@/imports/unreal-1.png";

export function UnrealUiPage() {
  return (
    <>
      <CreativeWorkJsonLd
        name="Design Elements in Unreal Engine"
        description="A modular UI kit in Unreal Engine based on Atomic Design principles, mirroring the Figma design system."
        keywords={["Unreal Engine", "Atomic Design", "UI Kit", "Design Systems"]}
        slug="design-ops/unreal-ui"
      />
      <SubPageLayout
        icon={<FontAwesomeIcon icon={faLayerGroup} style={{ fontSize: 28 }} />}
        title="Design Elements in Unreal Engine"
      >
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", to: "/" },
            { label: "Design Ops", to: "/design-ops" },
            { label: "Design Elements in Unreal Engine" },
          ]}
        />

        {/* Subtitle */}
        <h2 className="font-['Kdam_Thmor_Pro',sans-serif] text-[#0BBA3F] text-[28px] md:text-[36px] tracking-[2px] mb-8">
          Modular UI kit based on Atomic Design principles
        </h2>

        {/* HERO IMAGE */}
        <div className="mb-12 rounded-lg overflow-hidden bg-[#f5f5f5]">
          <img src={imgHero} alt="Unreal Engine UI widgets organized as atoms, molecules and organisms mirroring the Figma design system" className="w-full h-auto" />
        </div>

        {/* ABOUT THE PROJECT */}
        <section className="mb-10 max-w-[720px]">
          <h3 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-3">
            About the Project
          </h3>
          <p className="font-['Inter',sans-serif] text-[#444] text-[14px] leading-relaxed">
            Led the development of a modular UI kit in Unreal Engine based on Atomic Design principles, enabling developers to build consistent interfaces by reusing predefined components directly aligned with the Figma design system.
          </p>
        </section>

        {/* PROBLEM TO SOLVE */}
        <section className="mb-10 max-w-[720px]">
          <h3 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-3">
            Problem to Solve
          </h3>
          <p className="font-['Inter',sans-serif] text-[#444] text-[14px] leading-relaxed">
            Developers were facing challenges translating Figma designs into Unreal Engine. Figma Dev Mode wasn't being used effectively, leading to layout inconsistencies, incorrect sizing, and style mismatches. Without a shared system or reusable components, each UI screen was being built manually from scratch, increasing development time and reducing visual consistency across the app.
          </p>
        </section>

        {/* ACTIONS */}
        <section className="mb-10 max-w-[720px]">
          <h3 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-3">
            Actions
          </h3>
          <p className="font-['Inter',sans-serif] text-[#444] text-[14px] leading-relaxed">
            I proposed recreating the UI kit directly inside Unreal, mirroring the Atomic Design structure used in Figma (atoms, molecules, organisms). I identified the most commonly used components—buttons, inputs, labels, modals—and rebuilt them from scratch as standardized Unreal widgets with consistent styling, sizing, and spacing. This system allowed developers to drag and drop pre-configured elements to assemble new UIs quickly and accurately.
          </p>
        </section>

        {/* RESULTS & IMPACT */}
        <section className="mb-12 max-w-[720px]">
          <h3 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-3">
            Results &amp; Impact
          </h3>
          <ul className="list-disc pl-5 space-y-2 font-['Inter',sans-serif] text-[#444] text-[14px] leading-relaxed">
            <li>Enabled faster UI assembly by allowing developers to use ready-made widgets instead of building layouts manually</li>
            <li>Increased developer awareness of the value of consistency, design systems, and shared practices</li>
            <li>Saved time across teams and set a strong foundation for scalable, maintainable UI development in future projects</li>
          </ul>
        </section>

        {/* IMAGE GALLERY */}
        <section>
          <h3 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-4">
            Project Gallery
          </h3>
          <ImageGallery images={[imgUnreal1]} columns={3} />
        </section>
      </SubPageLayout>
    </>
  );
}
