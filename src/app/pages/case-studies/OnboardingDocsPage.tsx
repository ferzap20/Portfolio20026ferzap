import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { SubPageLayout } from "../../components/SubPageLayout";
import { Breadcrumb } from "../../components/Breadcrumb";
import { ImageGallery } from "../../components/ImageGallery";
import { CreativeWorkJsonLd } from "../../components/JsonLd";

// ============================================================
// CASE STUDY: Onboarding Guides / Feature Documentation
// Edit the sections below freely — this is a canvas template.
// ============================================================

// Hero image
import imgHero from "@/imports/onboarding-3.png";

// Gallery images
import imgUnreal1 from "@/imports/unreal-1.png";

export function OnboardingDocsPage() {
  return (
    <>
      <CreativeWorkJsonLd
        name="Onboarding Guides / Feature Documentation"
        description="Structured product documentation to improve team autonomy and ensure consistent understanding of features."
        keywords={["Documentation", "Confluence", "Knowledge Sharing", "Process"]}
        slug="design-ops/onboarding-docs"
      />
      <SubPageLayout
        icon={<FontAwesomeIcon icon={faLayerGroup} style={{ fontSize: 28 }} />}
        title="Onboarding Guides / Feature Documentation"
      >
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", to: "/" },
            { label: "Design Ops", to: "/design-ops" },
            { label: "Onboarding Guides / Feature Documentation" },
          ]}
        />

        {/* Subtitle */}
        <h1 className="font-['Kdam_Thmor_Pro',sans-serif] text-[#0BBA3F] text-[28px] md:text-[36px] tracking-[2px] mb-8">
          Product documentation for team autonomy
        </h1>

        {/* HERO IMAGE */}
        <div className="mb-12 rounded-lg overflow-hidden bg-[#f5f5f5]">
          <img src={imgHero} alt="Onboarding documentation — hero" className="w-full h-auto" />
        </div>

        {/* ABOUT THE PROJECT */}
        <section className="mb-10 max-w-[720px]">
          <h2 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-3">
            About the Project
          </h2>
          <p className="font-['Inter',sans-serif] text-[#444] text-[14px] leading-relaxed">
            Structured product documentation to improve team autonomy, and ensure consistent understanding of features.
          </p>
        </section>

        {/* PROBLEM TO SOLVE */}
        <section className="mb-10 max-w-[720px]">
          <h2 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-3">
            Problem to Solve
          </h2>
          <p className="font-['Inter',sans-serif] text-[#444] text-[14px] leading-relaxed">
            New team members and cross-functional colleagues struggled to understand existing features or the "why" of new ones. There was no centralized or up-to-date documentation to support knowledge sharing.
          </p>
        </section>

        {/* ACTIONS */}
        <section className="mb-10 max-w-[720px]">
          <h2 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-3">
            Actions
          </h2>
          <p className="font-['Inter',sans-serif] text-[#444] text-[14px] leading-relaxed">
            I audited existing materials and studied documentation practices from other teams and companies to define a scalable structure.
          </p>
        </section>

        {/* RESULTS & IMPACT */}
        <section className="mb-12 max-w-[720px]">
          <h2 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-3">
            Results &amp; Impact
          </h2>
          <ul className="list-disc pl-5 space-y-2 font-['Inter',sans-serif] text-[#444] text-[14px] leading-relaxed">
            <li>Created a central documentation hub in Confluence with clear feature guides</li>
            <li>Established a scalable documentation framework adopted across squads</li>
            <li>These features guides help us to write customer documentation clearer and faster</li>
          </ul>
        </section>

        {/* IMAGE GALLERY */}
        <section>
          <h2 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-4">
            Project Gallery
          </h2>
          <ImageGallery images={[imgUnreal1]} columns={3} />
        </section>
      </SubPageLayout>
    </>
  );
}
