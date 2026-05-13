import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { SubPageLayout } from "../../components/SubPageLayout";
import { Breadcrumb } from "../../components/Breadcrumb";
import { ImageGallery } from "../../components/ImageGallery";
import { CreativeWorkJsonLd } from "../../components/JsonLd";

// ============================================================
// CASE STUDY: Improving VR App Navigation
// Edit the sections below freely — this is a canvas template.
// ============================================================

// Hero image
import imgHero from "@/imports/ux-nav-2.png";

// Gallery images
import imgUxNav1 from "@/imports/ux-nav-1.png";

export function VrNavigationPage() {
  return (
    <>
      <CreativeWorkJsonLd
        name="Improving VR App Navigation"
        description="Redesigning VR navigation to align with industry standards, reduce user friction, and improve usability."
        keywords={["VR Navigation", "User Testing", "XR Standards", "UX Research"]}
        slug="ux-research/vr-navigation"
      />
      <SubPageLayout
        icon={<FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: 28 }} />}
        title="Improving VR App Navigation"
      >
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", to: "/" },
            { label: "User Research", to: "/ux-research" },
            { label: "Improving VR App Navigation" },
          ]}
        />

        {/* Subtitle */}
        <h2 className="font-['Kdam_Thmor_Pro',sans-serif] text-[#0BBA3F] text-[28px] md:text-[36px] tracking-[2px] mb-8">
          Redesigning VR navigation to align with industry standards
        </h2>

        {/* HERO IMAGE */}
        <div className="mb-12 rounded-lg overflow-hidden bg-[#f5f5f5]">
          <img src={imgHero} alt="VR app navigation redesign aligned with Meta and Oculus XR interaction standards" className="w-full h-auto" />
        </div>

        {/* ABOUT THE PROJECT */}
        <section className="mb-10 max-w-[720px]">
          <h3 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-3">
            About the Project
          </h3>
          <p className="font-['Inter',sans-serif] text-[#444] text-[14px] leading-relaxed">
            Redesigned the navigation system for a VR product to align with industry standards, reduce user friction, and improve overall usability through research, testing, and iterative design.
          </p>
        </section>

        {/* PROBLEM TO SOLVE */}
        <section className="mb-10 max-w-[720px]">
          <h3 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-3">
            Problem to Solve
          </h3>
          <p className="font-['Inter',sans-serif] text-[#444] text-[14px] leading-relaxed">
            The existing VR navigation system did not follow established interaction standards, making it unintuitive and difficult to explain. This caused a high cognitive load and frequent frustration for users, leading to poor task completion and steep learning curves during onboarding.
          </p>
        </section>

        {/* ACTIONS */}
        <section className="mb-10 max-w-[720px]">
          <h3 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-3">
            Actions
          </h3>
          <p className="font-['Inter',sans-serif] text-[#444] text-[14px] leading-relaxed">
            I conducted a comparative analysis between our current navigation and best practices used by leading XR platforms (e.g., Meta, Oculus, and popular VR games/apps). I mapped the differences and proposed improvements.
          </p>
        </section>

        {/* RESULTS & IMPACT */}
        <section className="mb-12 max-w-[720px]">
          <h3 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-3">
            Results &amp; Impact
          </h3>
          <ul className="list-disc pl-5 space-y-2 font-['Inter',sans-serif] text-[#444] text-[14px] leading-relaxed">
            <li>Users were confused by the navigation system, describing it as "unnatural and static"</li>
            <li>Users' navigation understanding improved, reducing the time from 5-7 minutes to 2 minutes, without any frustration issues</li>
            <li>Defined a new navigation model aligned with familiar VR interaction standards</li>
          </ul>
        </section>

        {/* IMAGE GALLERY */}
        <section>
          <h3 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-4">
            Project Gallery
          </h3>
          <ImageGallery images={[imgUxNav1]} columns={3} />
        </section>
      </SubPageLayout>
    </>
  );
}
