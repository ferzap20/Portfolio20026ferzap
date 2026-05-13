import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { SubPageLayout } from "../../components/SubPageLayout";
import { Breadcrumb } from "../../components/Breadcrumb";
import { ImageGallery } from "../../components/ImageGallery";
import { CreativeWorkJsonLd } from "../../components/JsonLd";

// ============================================================
// CASE STUDY: IA as a UX Research Tool
// Edit the sections below freely — this is a canvas template.
// ============================================================

// Hero image
import imgHero from "@/imports/ux-ia-3.png";

// Gallery images
import imgUxIA1 from "@/imports/ux-ia-1.png";
import imgUxIA2 from "@/imports/ux-ia-2.png";
import imgUxIA4 from "@/imports/ux-ia-4.png";
import imgUxIA5 from "@/imports/ux-ia-5.png";

export function IaResearchPage() {
  return (
    <>
      <CreativeWorkJsonLd
        name="IA as a UX Research Tool"
        description="Exploring AI-assisted research methodologies using the Thinking Styles framework by Indi Young."
        keywords={["UX Research", "AI Research", "Thinking Styles", "EdTech"]}
        slug="ux-research/ia-research"
      />
      <SubPageLayout
        icon={<FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: 28 }} />}
        title="IA as a UX Research Tool"
      >
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", to: "/" },
            { label: "User Research", to: "/ux-research" },
            { label: "IA as a UX Research Tool" },
          ]}
        />

        {/* Subtitle */}
        <h2 className="font-['Kdam_Thmor_Pro',sans-serif] text-[#0BBA3F] text-[28px] md:text-[36px] tracking-[2px] mb-8">
          Exploring AI-assisted research methodologies
        </h2>

        {/* HERO IMAGE */}
        <div className="mb-12 rounded-lg overflow-hidden bg-[#f5f5f5]">
          <img src={imgHero} alt="Screenshot of AI-assisted user research project applying the Thinking Styles framework for an EdTech use case" className="w-full h-auto" />
        </div>

        {/* ABOUT THE PROJECT */}
        <section className="mb-10 max-w-[720px]">
          <h3 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-3">
            About the Project
          </h3>
          <p className="font-['Inter',sans-serif] text-[#444] text-[14px] leading-relaxed">
            Given a problem statement, I wanted to explore using AI as a tool to develop a user research project in a subject I'm not particularly familiar with. Also, I wanted to test the framework “Thinking Styles“ by Indi Young.
          </p>
        </section>

        {/* APPROACH */}
        <section className="mb-10 max-w-[720px]">
          <h3 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-3">
            Approach
          </h3>
          <p className="font-['Inter',sans-serif] text-[#444] text-[14px] leading-relaxed">
            Tested various AI-powered tools for pattern recognition in user feedback, automated thematic analysis, and rapid synthesis of qualitative data from interviews and usability sessions.
          </p>
        </section>

        {/* PROBLEM STATEMENT (SIMULATED) */}
        <section className="mb-10 max-w-[720px]">
          <h3 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-3">
            Problem Statement (Simulated)
          </h3>
          <p className="font-['Inter',sans-serif] text-[#444] text-[14px] leading-relaxed mb-3">
            A group of teachers need innovative ways to engage their students, even during brief interactions. Create an app that must:
          </p>
          <ul className="list-disc pl-5 space-y-2 font-['Inter',sans-serif] text-[#444] text-[14px] leading-relaxed">
            <li>Facilitate quick and meaningful interactions between teachers and students</li>
            <li>Allow for smooth, efficient, and adaptable classroom management across different educational contexts</li>
          </ul>
        </section>

        {/* USER TARGET */}
        <section className="mb-10 max-w-[720px]">
          <h3 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-3">
            User Target
          </h3>
          <p className="font-['Inter',sans-serif] text-[#444] text-[14px] leading-relaxed">
            Teachers who are not very comfortable with digital technology looking for solutions to improve efficiency in their teaching who wish to create an emotional connection and student engagement using digital technologies.
          </p>
        </section>

        {/* 1ST PROMPT */}
        <section className="mb-10 max-w-[720px]">
          <h3 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-3">
            1st Prompt
          </h3>
          <p className="font-['Inter',sans-serif] text-[#444] text-[14px] leading-relaxed italic">
            I need to do UX research project for my product in ed tech, an app for teachers and students to use in a classroom. This time the public aimed are primary schoolers and the innovative ways to teach and captivate them, even during brief interactions. I need you to identify research documents addressed to this problematic and define type of users, transforms this information in patterns using the 'thinking styles' framework provided by Indi Young and classified it by giving me different users and their purpose in a table. After this table, give me also a list of the research papers that you use to make this report.
          </p>
        </section>

        {/* 2ND PROMPT */}
        <section className="mb-12 max-w-[720px]">
          <h3 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-3">
            2nd Prompt
          </h3>
          <p className="font-['Inter',sans-serif] text-[#444] text-[14px] leading-relaxed italic">
            Take the research documents and create a table divided in 4 columns where the first one is a summary of the document, the second a summary of the insights or conclusions of the document, the 3er one if the document mentions any proposal or ideas to overcome the problem statements and the 4th one the apps, sites or products mentioned in the document.
          </p>
        </section>

        {/* IMAGE GALLERY */}
        <section>
          <h3 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold uppercase tracking-wide mb-4">
            Project Gallery
          </h3>
          <ImageGallery images={[imgUxIA2, imgUxIA4, imgUxIA5, imgUxIA1]} columns={3} />
        </section>
      </SubPageLayout>
    </>
  );
}
