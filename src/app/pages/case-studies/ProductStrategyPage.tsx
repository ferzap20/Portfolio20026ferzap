import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { SubPageLayout } from "../../components/SubPageLayout";
import { Breadcrumb } from "../../components/Breadcrumb";
import { ImageGallery } from "../../components/ImageGallery";
import { CreativeWorkJsonLd } from "../../components/JsonLd";

// ============================================================
// CASE STUDY: Product Strategy & Vision
// Edit the sections below freely — this is a canvas template.
// ============================================================

// Hero image
import imgHero from "@/imports/prod-mgmt-1.png";

// Gallery images
import imgProdMgmt2 from "@/imports/prod-mgmt-2.png";
import imgProdMgmt3 from "@/imports/prod-mgmt-3.png";
import imgProdMgmt4 from "@/imports/prod-mgmt-4.png";

export function ProductStrategyPage() {
  return (
    <>
      <CreativeWorkJsonLd
        name="Product Strategy & Vision"
        description="Defining short and long-term product strategy, prioritizing roadmap, and aligning teams around a shared vision."
        keywords={["Product Strategy", "Roadmap Planning", "Cross-team Alignment", "Product Management"]}
        slug="product-mgmt/product-strategy"
      />
      <SubPageLayout
        icon={<FontAwesomeIcon icon={faClipboardList} style={{ fontSize: 28 }} />}
        title="Product Strategy & Vision"
      >
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", to: "/" },
            { label: "Product Strategy", to: "/product-mgmt" },
            { label: "Product Strategy & Vision" },
          ]}
        />

        {/* Subtitle */}
        <h2 className="font-['Kdam_Thmor_Pro',sans-serif] text-[#0BBA3F] text-[28px] md:text-[36px] tracking-[2px] mb-8">
          Roadmap Planning &amp; Cross-Team Alignment
        </h2>

        {/* HERO IMAGE */}
        <div className="mb-12 rounded-lg overflow-hidden bg-[#f5f5f5]">
          <img src={imgHero} alt="Product roadmap visualization aligning short-term deliverables with long-term product bets across teams" className="w-full h-auto" />
        </div>

        {/* ABOUT THE PROJECT */}
        <section className="mb-10 max-w-[720px]">
          <h3 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-3">
            About the Project
          </h3>
          <p className="font-['Inter',sans-serif] text-[#444] text-[14px] leading-relaxed">
            Collaborated with company leadership to define and visualize short and long-term product strategy, organize and prioritize the roadmap, and create clear communication tools to align all teams around a shared vision.
          </p>
        </section>

        {/* PROBLEM TO SOLVE */}
        <section className="mb-10 max-w-[720px]">
          <h3 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-3">
            Problem to Solve
          </h3>
          <p className="font-['Inter',sans-serif] text-[#444] text-[14px] leading-relaxed">
            There was a lack of clarity and alignment around the product's direction across the organization. Leadership had strategic goals, but these weren't clearly translated into actionable plans or shared across teams. This led to misaligned priorities, fragmented efforts, and inconsistent communication between product, design, development, and business units.
          </p>
        </section>

        {/* ACTIONS */}
        <section className="mb-10 max-w-[720px]">
          <h3 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-3">
            Actions
          </h3>
          <ul className="list-disc pl-5 space-y-2 font-['Inter',sans-serif] text-[#444] text-[14px] leading-relaxed">
            <li>Audited current initiatives and backlog items to identify overlaps, gaps, and priority misalignment.</li>
            <li>Proposed a structured roadmap framework tied to short-term deliverables and long-term product bets, along with tiered timelines.</li>
            <li>Switched from 1 release "when things are done" to 3 per year with a clear backlog and MVPs to add in each release that will be iterated.</li>
            <li>Created visual formats (roadmap slides, FigJams, and summaries) tailored for different audiences: direction, devs, design, and customers.</li>
          </ul>
        </section>

        {/* TOOLS */}
        <section className="mb-12 max-w-[720px]">
          <h3 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-3">
            Tools
          </h3>
          <p className="font-['Inter',sans-serif] text-[#444] text-[14px] leading-relaxed">
            Azure DevOps (creation of US, backlog management, sprints management, stats), Confluence, FigJam.
          </p>
        </section>

        {/* IMAGE GALLERY */}
        <section>
          <h3 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-4">
            Project Gallery
          </h3>
          <ImageGallery images={[imgProdMgmt2, imgProdMgmt3, imgProdMgmt4]} columns={3} />
        </section>
      </SubPageLayout>
    </>
  );
}
