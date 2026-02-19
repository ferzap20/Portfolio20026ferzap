import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";
import { SubPageLayout } from "../components/SubPageLayout";
import { ProjectCard } from "../components/ProjectCard";

// UX Research images
import imgUxMenu1 from "figma:asset/ade0ae5bf7f2e0c1fb65b41137bdcef3b74fb71d.png";
import imgUxMenu2 from "figma:asset/739c69c72961536e30610f483f7a83856a8a0bd2.png";
import imgUxMenu3 from "figma:asset/794f738763319b197837d54fbe831117a392e266.png";
import imgUxMenu4 from "figma:asset/4e84e84ead74a14b68518afb1a5bbc9de6e30ca4.png";
import imgUxChart1 from "figma:asset/5bdec665b0b801027081608cacbd144ddd8ff1e6.png";
import imgUxNav1 from "figma:asset/ee6c51ff2bb1895787d8e15d11e95604e01d551b.png";
import imgUxNav2 from "figma:asset/36ac8abbd6b25b165fb8eff9f8e403e0691f3f01.png";
import imgUxChart2 from "figma:asset/b36103db3ea13e6516647db46be9b41810cbb0b4.png";
import imgUxIA1 from "figma:asset/48ac95d4439c3330c5d92fb64fcdbfd071bd0704.png";
import imgUxIA2 from "figma:asset/7e2e264dc6e48c8570c2111521b76c20cf4c3e82.png";
import imgUxIA3 from "figma:asset/79a69007cb724bd3406c1c13d5ed8d6903693331.png";
import imgUxIA4 from "figma:asset/4c09f04f08438d4917af3902517475f37297c2ec.png";
import imgUxIA5 from "figma:asset/6e47502c219e51167b285b04e1714055af435421.png";

export function UxResearchPage() {
  return (
    <SubPageLayout icon={<FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: 28 }} />} title="UX Research">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="font-['Inter',sans-serif] text-[#666] text-[14px] leading-relaxed mb-8 max-w-[640px]"
      >
        Uncovering user insights through research, testing, and data analysis to drive informed design decisions and meaningful product improvements.
      </motion.p>
      <div className="space-y-6">
            <ProjectCard
          title="Use Case: IA as a UX Research Tool"
          subtitle="Exploring AI-assisted research methodologies"
          images={[imgUxIA3, imgUxIA2, imgUxIA4, imgUxIA5, imgUxIA1]}
          headerZoom={0.9}
          details={[
            {
              label: "About the Project",
              content:
                "Given a problem statement, I wanted to explore using AI as a tool to develop a user research project in a subject I'm not particularly familiar with. Also, I wanted to test the framework “Thinking Styles“ by Indi Young",
            },
            {
              label: "Approach",
              content:
                "Tested various AI-powered tools for pattern recognition in user feedback, automated thematic analysis, and rapid synthesis of qualitative data from interviews and usability sessions.",
            },
             {
              label: "Problem Statement (Simulated)",
              content: [
               "A group of teachers need innovative ways to engage their students, even during brief interactions. Create an app that must:", 
               "Facilitate quick and meaningful interactions between teachers and students",
               "Allow for smooth, efficient, and adaptable classroom management across different educational contexts",
              ],
            },
             {
              label: "User Target",
              content:
                "Teachers who are not very comfortable with digital technology looking for solutions to improve efficiency in their teaching who wish to create an emotional connection and student engagement using digital technologies.",
            },
             {
              label: "1st Prompt",
              content:
                "I need to do UX research project for my product in ed tech, an app for teachers and students to use in a classroom. This time the public aimed are primary schoolers and the innovative ways to teach and captivate them, even during brief interactions. I need you to identify research documents addressed to this problematic and define type of users, transforms this information in patterns using the 'thinking styles' framework provided by Indi Young and classified it by giving me different users and their purpose in a table. After this table, give me also a list of the research papers that you use to make this report.",
            },
             {
              label: "2nd Prompt",
              content:
                "Take the research documents and create a table divided in 4 columns where the first one is a summary of the document, the second a summary of the insights or conclusions of the document , the 3er one if the document mentions any proposal or ideas to overcome the problem statements and the 4th one the apps, sites or products mentioned in the document",
            },
          ]}
        />
        
        <ProjectCard
          title="Use Case: Menu Redesign"
          subtitle="Redesigning the primary product menu"
          images={[imgUxMenu2, imgUxMenu1, imgUxMenu4, imgUxMenu3]}
          headerZoom={1}
          imageBg="white"
          details={[
            {
              label: "About the Project",
              content:
                "Redesigned the primary product menu to address usability issues, improve icon clarity, and unify visual language across the interface.",
            },
            {
              label: "Problem to solve",
              content:
                "The existing desktop menu had usability issues: users struggled to understand certain icons and menu functions, which led to confusion and misclicks. Additionally, the iconography was inconsistent in style and meaning, reducing the overall user experience and weakening the interface's visual cohesion.",
            },
            {
              label: "Actions",
              content:
                "I conducted an audit of the current menu and identified key friction points through user feedback, internal QA reports, and design heuristics. I benchmarked similar interfaces in comparable products and reviewed best practices in icon design and desktop navigation patterns. Based on these insights, I proposed a redesign and some guidelines that prioritized clarity, consistency, and alignment.",
            },
            {
              label: "Key Insights",
              content: [
                "No visual cue that the hamburger menu collapses to show more information",
                "VR icon launches VR mode — an inconsistency regarding the actions of other icons in the same menu",
                "Most icons presented different visual treatment (size, colors, not part of the same system)",
                "Left navigation facilitates a natural vertical scanning direction for users",
              ],
            },
          ]}
        />

        <ProjectCard
          title="Use Case: Improving VR App Navigation"
          subtitle="Redesigning VR navigation to align with industry standards"
          images={[imgUxNav2, imgUxNav1]}
          headerZoom={1}
          details={[
            {
              label: "About the Project",
              content:
                "Redesigned the navigation system for a VR product to align with industry standards, reduce user friction, and improve overall usability through research, testing, and iterative design.",
            },
            {
              label: "Problem to solve",
              content:
                "The existing VR navigation system did not follow established interaction standards, making it unintuitive and difficult to explain. This caused a high cognitive load and frequent frustration for users, leading to poor task completion and steep learning curves during onboarding.",
            },
            {
              label: "Actions",
              content:
                "I conducted a comparative analysis between our current navigation and best practices used by leading XR platforms (e.g., Meta, Oculus, and popular VR games/apps). I mapped the differences and proposed improvements.",
            },
            {
              label: "Results & Impact",
              content: [
                'Users were confused by the navigation system, describing it as "unnatural and static"',
                "Users' navigation understanding improved, reducing the time from 5-7 minutes to 2 minutes, without any frustration issues",
                "Defined a new navigation model aligned with familiar VR interaction standards",
              ],
            },
          ]}
        />

      </div>
    </SubPageLayout>
  );
}