import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { SubPageLayout } from "../../components/SubPageLayout";
import { Breadcrumb } from "../../components/Breadcrumb";
import { ImageGallery } from "../../components/ImageGallery";
import { CreativeWorkJsonLd } from "../../components/JsonLd";

// ============================================================
// CASE STUDY: Menu Redesign
// Edit the sections below freely — this is a canvas template.
// ============================================================

// Hero image
import imgHero from "@/imports/ux-menu-2.png";

// Gallery images
import imgUxMenu1 from "@/imports/ux-menu-1.png";
import imgUxMenu3 from "@/imports/ux-menu-3.png";
import imgUxMenu4 from "@/imports/ux-menu-4.png";

export function MenuRedesignPage() {
  return (
    <>
      <CreativeWorkJsonLd
        name="Menu Redesign"
        description="Redesigning the primary product menu to address usability issues and unify visual language."
        keywords={["Usability", "Iconography", "Desktop UI", "Menu Design"]}
        slug="ux-research/menu-redesign"
      />
      <SubPageLayout
        icon={<FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: 28 }} />}
        title="Menu Redesign"
      >
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", to: "/" },
            { label: "User Research", to: "/ux-research" },
            { label: "Menu Redesign" },
          ]}
        />

        {/* Subtitle */}
        <h1 className="font-['Kdam_Thmor_Pro',sans-serif] text-[#0BBA3F] text-[28px] md:text-[36px] tracking-[2px] mb-8">
          Redesigning the primary product menu
        </h1>

        {/* HERO IMAGE */}
        <div className="mb-12 rounded-lg overflow-hidden bg-white border border-[#eee]">
          <img src={imgHero} alt="Menu redesign — hero" className="w-full h-auto" />
        </div>

        {/* ABOUT THE PROJECT */}
        <section className="mb-10 max-w-[720px]">
          <h2 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-3">
            About the Project
          </h2>
          <p className="font-['Inter',sans-serif] text-[#444] text-[14px] leading-relaxed">
            Redesigned the primary product menu to address usability issues, improve icon clarity, and unify visual language across the interface.
          </p>
        </section>

        {/* PROBLEM TO SOLVE */}
        <section className="mb-10 max-w-[720px]">
          <h2 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-3">
            Problem to Solve
          </h2>
          <p className="font-['Inter',sans-serif] text-[#444] text-[14px] leading-relaxed">
            The existing desktop menu had usability issues: users struggled to understand certain icons and menu functions, which led to confusion and misclicks. Additionally, the iconography was inconsistent in style and meaning, reducing the overall user experience and weakening the interface's visual cohesion.
          </p>
        </section>

        {/* ACTIONS */}
        <section className="mb-10 max-w-[720px]">
          <h2 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-3">
            Actions
          </h2>
          <p className="font-['Inter',sans-serif] text-[#444] text-[14px] leading-relaxed">
            I conducted an audit of the current menu and identified key friction points through user feedback, internal QA reports, and design heuristics. I benchmarked similar interfaces in comparable products and reviewed best practices in icon design and desktop navigation patterns. Based on these insights, I proposed a redesign and some guidelines that prioritized clarity, consistency, and alignment.
          </p>
        </section>

        {/* KEY INSIGHTS */}
        <section className="mb-12 max-w-[720px]">
          <h2 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-3">
            Key Insights
          </h2>
          <ul className="list-disc pl-5 space-y-2 font-['Inter',sans-serif] text-[#444] text-[14px] leading-relaxed">
            <li>No visual cue that the hamburger menu collapses to show more information</li>
            <li>VR icon launches VR mode — an inconsistency regarding the actions of other icons in the same menu</li>
            <li>Most icons presented different visual treatment (size, colors, not part of the same system)</li>
            <li>Left navigation facilitates a natural vertical scanning direction for users</li>
          </ul>
        </section>

        {/* IMAGE GALLERY */}
        <section>
          <h2 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-4">
            Project Gallery
          </h2>
          <ImageGallery images={[imgUxMenu1, imgUxMenu4, imgUxMenu3]} columns={3} />
        </section>
      </SubPageLayout>
    </>
  );
}
