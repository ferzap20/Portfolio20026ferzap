import { useState, useEffect, lazy, Suspense } from "react";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faPalette,
  faArrowRight,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { Sparkles } from "lucide-react";
import { BrowserRouter, Routes, Route, Link, useLocation, Navigate } from "react-router";

import { DesignOpsPage } from "./pages/DesignOpsPage";
import { ProductMgmtPage } from "./pages/ProductMgmtPage";
import { UxResearchPage } from "./pages/UxResearchPage";
import { BrandDesignPage } from "./pages/BrandDesignPage";
import { PersonalProjectsPage } from "./pages/PersonalProjectsPage";
// Case study sub-pages — lazy-loaded so initial bundle stays lean
const DesignSystemVrPage = lazy(() => import("./pages/case-studies/DesignSystemVrPage").then(m => ({ default: m.DesignSystemVrPage })));
const OnboardingDocsPage = lazy(() => import("./pages/case-studies/OnboardingDocsPage").then(m => ({ default: m.OnboardingDocsPage })));
const UnrealUiPage = lazy(() => import("./pages/case-studies/UnrealUiPage").then(m => ({ default: m.UnrealUiPage })));
const IaResearchPage = lazy(() => import("./pages/case-studies/IaResearchPage").then(m => ({ default: m.IaResearchPage })));
const MenuRedesignPage = lazy(() => import("./pages/case-studies/MenuRedesignPage").then(m => ({ default: m.MenuRedesignPage })));
const VrNavigationPage = lazy(() => import("./pages/case-studies/VrNavigationPage").then(m => ({ default: m.VrNavigationPage })));
const ProductStrategyPage = lazy(() => import("./pages/case-studies/ProductStrategyPage").then(m => ({ default: m.ProductStrategyPage })));
import { ContactSection } from "./components/ContactSection";
import { EnlargeableImage } from "./components/EnlargeableImage";
import { CaseStudyCard } from "./components/CaseStudyCard";
import { PersonJsonLd } from "./components/JsonLd";
import { NAV_ITEMS } from "./constants";

// Hero portrait (local assets)
import imgPortraitBW from "@/imports/portrait-bw.png";
import imgPortraitColor from "@/imports/portrait-color.png";
import imgOpportunityMap from "@/imports/opportunity-map.png";

// Case study thumbnails (reuse each case study's own hero image)
import imgCsVrNav from "@/imports/ux-nav-2.png";
import imgCsDesignSystem from "@/imports/design-system-2.png";
import imgCsProductStrategy from "@/imports/prod-mgmt-1.png";
import imgCsOnboarding from "@/imports/onboarding-3.png";
import imgCsUnreal from "@/imports/unreal-3.png";
import imgCsIaResearch from "@/imports/ux-ia-3.png";

// Same title/description/pills as the CaseStudyCard used on each category page —
// this is the same case study shown a second time, not a new copy of it.
const CASE_STUDIES = [
  {
    title: "Improving VR App Navigation",
    description: "Redesigned the navigation system for a VR product to align with industry standards, reduce user friction, and improve overall usability through research, testing, and iterative design.",
    to: "/ux-research/vr-navigation",
    headerImage: imgCsVrNav,
    pills: [
      { label: "VR Navigation", color: "purple" },
      { label: "User Testing", color: "green" },
      { label: "XR Standards", color: "teal" },
    ],
  },
  {
    title: "Design System for VR",
    description: "I lead the creation of the first design system for a VR product to bring consistency, efficiency, and clarity to an unstructured design and dev process. The initiative help to close the gaps between design, development, and product teams to create a more consistent and usable experience.",
    to: "/design-ops/design-system-vr",
    headerImage: imgCsDesignSystem,
    pills: [
      { label: "Design Systems", color: "green" },
      { label: "VR Design", color: "purple" },
      { label: "Process", color: "teal" },
    ],
  },
  {
    title: "Product Strategy & Vision",
    description: "Collaborated with company leadership to define and visualize short and long-term product strategy, organize and prioritize the roadmap, and create clear communication tools to align all teams around a shared vision.",
    to: "/product-mgmt/product-strategy",
    headerImage: imgCsProductStrategy,
    pills: [
      { label: "Strategy", color: "green" },
      { label: "Roadmap", color: "blue" },
      { label: "Cross-team", color: "indigo" },
    ],
  },
  {
    title: "Onboarding Guides / Feature Documentation",
    description: "Structured product documentation to improve team autonomy, and ensure consistent understanding of features.",
    to: "/design-ops/onboarding-docs",
    headerImage: imgCsOnboarding,
    pills: [
      { label: "Documentation", color: "blue" },
      { label: "Confluence", color: "indigo" },
      { label: "Process", color: "teal" },
    ],
  },
  {
    title: "Design Elements in Unreal Engine",
    description: "Led the development of a modular UI kit in Unreal Engine based on Atomic Design principles, enabling developers to build consistent interfaces by reusing predefined components directly aligned with the Figma design system.",
    to: "/design-ops/unreal-ui",
    headerImage: imgCsUnreal,
    pills: [
      { label: "Unreal Engine", color: "amber" },
      { label: "Atomic Design", color: "green" },
      { label: "UI Kit", color: "cyan" },
    ],
  },
  {
    title: "IA as a UX Research Tool",
    description: "Given a problem statement, I wanted to explore using AI as a tool to develop a user research project in a subject I'm not particularly familiar with. Also, I wanted to test the framework “Thinking Styles“ by Indi Young.",
    to: "/ux-research/ia-research",
    headerImage: imgCsIaResearch,
    pills: [
      { label: "AI Research", color: "purple" },
      { label: "Thinking Styles", color: "indigo" },
      { label: "EdTech", color: "cyan" },
    ],
  },
];

function scrollToContact() {
  const el = document.getElementById("contact");
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

const DEFAULT_TITLE = "Fernando Zapata — Product Lead & Product Designer | Paris";
const PAGE_TITLES: Record<string, string> = {
  "/design-ops": "Product Process / Design Ops",
  "/design-ops/design-system-vr": "Design System for VR",
  "/design-ops/onboarding-docs": "Onboarding Guides / Feature Documentation",
  "/design-ops/unreal-ui": "Design Elements in Unreal Engine",
  "/ux-research": "User Research",
  "/ux-research/ia-research": "IA as a UX Research Tool",
  "/ux-research/menu-redesign": "Menu Redesign",
  "/ux-research/vr-navigation": "Improving VR App Navigation",
  "/product-mgmt": "Product Strategy & Ownership",
  "/product-mgmt/product-strategy": "Product Strategy & Vision",
  "/brand-design": "Brand, App and Web Design",
  "/personal-projects": "Personal Projects",
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const pageTitle = PAGE_TITLES[pathname];
    document.title = pageTitle ? `${pageTitle} — Fernando Zapata` : DEFAULT_TITLE;
  }, [pathname]);
  return null;
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#323435]/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 flex items-center justify-between h-14">
        {!isHome && (
          <Link
            to="/"
            className="font-['Kdam_Thmor_Pro',sans-serif] text-[#0BBA3F] text-[18px] tracking-wider cursor-pointer"
          >
            ferzap!
          </Link>
        )}

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-5 ml-auto">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`font-['Roboto_Slab',serif] text-[13px] transition-colors ${
                location.pathname === item.path
                  ? "text-[#0BBA3F]"
                  : "text-white/70 hover:text-[#0BBA3F]"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://drive.google.com/uc?export=download&id=1dqG3bSWCfuJkNSmmXq8RU4vcl2t29A9O"
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="cv-download"
            className="font-['Roboto_Slab',serif] text-[13px] text-white/70 hover:text-[#0BBA3F] border border-white/20 hover:border-[#0BBA3F]/40 px-4 py-1 rounded transition-colors flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faDownload} style={{ fontSize: 12 }} />
            Download CV
          </a>
          {isHome ? (
            <button
              onClick={() => scrollToContact()}
              className="font-['Roboto_Slab',serif] text-[13px] text-[#323435] bg-[#0BBA3F] px-4 py-1.5 rounded hover:bg-[#09a536] transition-colors cursor-pointer"
            >
              Contact
            </button>
          ) : (
            <Link
              to="/#contact"
              className="font-['Roboto_Slab',serif] text-[13px] text-[#323435] bg-[#0BBA3F] px-4 py-1.5 rounded hover:bg-[#09a536] transition-colors"
            >
              Contact
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white cursor-pointer p-1 ml-auto"
        >
          {mobileOpen ? <FontAwesomeIcon icon={faXmark} style={{ fontSize: 22 }} /> : <FontAwesomeIcon icon={faBars} style={{ fontSize: 22 }} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#323435]/95 backdrop-blur-sm border-t border-white/10 px-5 pb-4 pt-2"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block w-full text-left font-['Roboto_Slab',serif] text-[14px] py-2 transition-colors ${
                location.pathname === item.path
                  ? "text-[#0BBA3F]"
                  : "text-white/70 hover:text-[#0BBA3F]"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://drive.google.com/uc?export=download&id=1dqG3bSWCfuJkNSmmXq8RU4vcl2t29A9O"
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="cv-download"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex items-center gap-2 font-['Roboto_Slab',serif] text-[14px] text-white/70 hover:text-[#0BBA3F] border border-white/20 hover:border-[#0BBA3F]/40 px-4 py-1.5 rounded transition-colors"
          >
            <FontAwesomeIcon icon={faDownload} style={{ fontSize: 12 }} />
            Download CV
          </a>
          {isHome ? (
            <button
              onClick={() => {
                setMobileOpen(false);
                scrollToContact();
              }}
              className="mt-2 font-['Roboto_Slab',serif] text-[14px] text-[#323435] bg-[#0BBA3F] px-4 py-1.5 rounded hover:bg-[#09a536] transition-colors cursor-pointer"
            >
              Contact
            </button>
          ) : (
            <Link
              to="/#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-block font-['Roboto_Slab',serif] text-[14px] text-[#323435] bg-[#0BBA3F] px-4 py-1.5 rounded hover:bg-[#09a536] transition-colors"
            >
              Contact
            </Link>
          )}
        </motion.div>
      )}
    </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-[#323435] min-h-[40vh] flex items-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-[10%] left-[5%] w-48 h-48 border border-[#0BBA3F] rounded-full" />
        <div className="absolute top-[60%] right-[10%] w-32 h-32 border border-[#0BBA3F] rounded-full" />
        <div className="absolute bottom-[20%] left-[40%] w-20 h-20 bg-[#0BBA3F] rounded-full" />
      </div>

      <div className="max-w-[1100px] mx-auto px-5 md:px-8 w-full pt-24 md:pt-20 pb-16 md:pb-12">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Text */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="font-['Roboto_Slab',serif] text-white/40 text-[14px] tracking-[4px] uppercase mb-4">
                Portfolio 2026
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-['Kdam_Thmor_Pro',sans-serif] text-[48px] md:text-[64px] lg:text-[72px] leading-[1.05] tracking-[4px]"
            >
              <span className="text-[#0BBA3F]">Hi, I'm</span>
              <br />
              <span className="text-white">Fernando</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-['Roboto_Slab',serif] text-white/60 text-[15px] md:text-[17px] leading-relaxed mt-6 max-w-[480px] mx-auto md:mx-0">
              Product Lead, 10 years in SaaS. I use AI to move faster from strategy to shipped product — roadmaps, release cycles, design, launch. Open to full-time roles in Paris or remote.
            </motion.p>
          </div>

          {/* Portrait - "Layered Process" (Stack of Cards) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative order-1 md:order-2 flex-shrink-0"
          >
            <motion.div 
              className="relative w-[200px] h-[200px] md:w-[280px] md:h-[280px]"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              {/* Layer 3: The "Raw Idea" (Wireframe/Dashed) */}
              <motion.div
                variants={{
                  rest: { x: 25, y: -15, rotate: 5, opacity: 0.6 },
                  hover: { x: 50, y: -25, rotate: 10, opacity: 0.8 }
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-[#0BBA3F]/40 bg-[#323435]"
              />

              {/* Layer 2: The "Foundation" (Solid Color) */}
              <motion.div
                variants={{
                  rest: { x: -25, y: 15, rotate: -5 },
                  hover: { x: -50, y: 25, rotate: -10 }
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute inset-0 rounded-full bg-[#0BBA3F]/20 border border-[#0BBA3F]/20 backdrop-blur-sm"
              />

              {/* Layer 1: The "Final Product" (Main Image) */}
              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden border-[3px] border-[#323435] shadow-2xl z-10 bg-[#323435]"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* B&W Image (Base) - Fades out on hover */}
                <motion.img
                  src={imgPortraitBW}
                  alt="Fernando Zapata, product designer and design systems lead"
                  className="absolute inset-0 size-full object-cover"
                  variants={{
                    rest: { opacity: 1 },
                    hover: { opacity: 0 }
                  }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />

                {/* Color Image (Overlay) - Fades in on hover */}
                <motion.img
                  src={imgPortraitColor}
                  alt="Fernando Zapata, product designer and design systems lead (color)"
                  className="absolute inset-0 size-full object-cover"
                  variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 }
                  }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
              </motion.div>

              {/* Floating Badge (Optional decorative touch) */}
              <motion.div
                variants={{
                  rest: { scale: 0, opacity: 0, x: -20, y: 20 },
                  hover: { scale: 1, opacity: 1, x: -50, y: 45 }
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.1 }}
                className="absolute bottom-1/3 left-0 bg-[#323435] border border-[#0BBA3F] text-[#0BBA3F] text-[10px] font-['Roboto_Slab',serif] px-2 py-1 rounded-full shadow-lg z-20 pointer-events-none"
              >
                Open to work
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[2px] h-8 bg-[#0BBA3F]/40 rounded-full mx-auto"
        />
      </motion.div>
    </section>
  );
}

function CategoryCard({
  icon,
  title,
  description,
  path,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  path: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link
        to={path}
        className="group block border border-[#e0e0e0] hover:border-[#0BBA3F]/40 rounded-lg p-6 md:p-7 transition-all duration-300 hover:shadow-lg hover:shadow-[#0BBA3F]/5 bg-white"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[#0BBA3F] group-hover:scale-110 transition-transform">
                {icon}
              </span>
              <h3 className="font-['Roboto_Slab',serif] text-[#323435] text-[17px] group-hover:text-[#0BBA3F] transition-colors">
                {title}
              </h3>
            </div>
            <p className="font-['Inter',sans-serif] text-[#666] text-[13px] leading-relaxed">
              {description}
            </p>
          </div>
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{ fontSize: 18 }}
            className="text-[#ccc] group-hover:text-[#0BBA3F] group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
          />
        </div>
      </Link>
    </motion.div>
  );
}

function HomePage() {
  return (
    <div
      className="bg-white min-h-screen"
      style={{ scrollBehavior: "smooth" }}
    >
      <HeroSection />

      <main>

      {/* Category cards */}
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-16 md:py-20">
        <motion.div
          id="categories"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="scroll-mt-24 mb-10"
        >
          <h2 className="font-['Kdam_Thmor_Pro',sans-serif] text-[#323435] text-[24px] md:text-[28px] tracking-[2px] mb-2">
            Featured Work
          </h2>
          <p className="font-['Roboto_Slab',serif] text-[#666] text-[14px] max-w-[640px]">
            Six problems, six outcomes — from VR navigation to org-wide product strategy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CASE_STUDIES.map((cs, i) => (
            <CaseStudyCard
              key={cs.to}
              title={cs.title}
              description={cs.description}
              to={cs.to}
              headerImage={cs.headerImage}
              pills={cs.pills}
              index={i}
            />
          ))}
        </div>

        {/* How I work section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 border border-[#e0e0e0] rounded-lg p-10 md:p-16 bg-[#f9f9f9]"
        >
          <h3 className="font-['Kdam_Thmor_Pro',sans-serif] text-[#323435] text-[20px] md:text-[24px] tracking-[2px] mb-6">
            How I work
          </h3>
          <p className="font-['Roboto_Slab',serif] text-[#666] text-[14px] leading-relaxed mb-8 max-w-[640px]">
            I specialize in user research, rapid prototyping, and building design processes that let teams iterate fast.
          </p>
          <div className="w-full">
            <EnlargeableImage
              src={imgOpportunityMap}
              alt="How I work process"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Other Work section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="scroll-mt-24 mt-16 mb-10"
        >
          <h2 className="font-['Kdam_Thmor_Pro',sans-serif] text-[#323435] text-[24px] md:text-[28px] tracking-[2px] mb-2">
            Additional Projects
          </h2>
          <p className="font-['Roboto_Slab',serif] text-[#666] text-[14px] max-w-[640px]">
            Beyond clients, I explore brand design and personal projects that push creative boundaries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CategoryCard
            icon={<FontAwesomeIcon icon={faPalette} style={{ fontSize: 24 }} />}
            title="Brand & Design"
            description="A showcase of brand identities, web design, and application interfaces. Visual work that spans startups, experimental projects, and design explorations."
            path="/brand-design"
            index={0}
          />
          <CategoryCard
            icon={<Sparkles style={{ width: 24, height: 24 }} />}
            title="Personal Projects"
            description="Side projects and experimental ideas. From rapid prototypes to fully-fledged apps, these showcase problem-solving and creative exploration."
            path="/personal-projects"
            index={1}
          />
        </div>
      </div>
      </main>

      {/* Contact / Footer */}
      <ContactSection />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <PersonJsonLd />
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<div className="bg-[#323435] min-h-screen" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/design-ops" element={<DesignOpsPage />} />
          <Route path="/design-ops/design-system-vr" element={<DesignSystemVrPage />} />
          <Route path="/design-ops/onboarding-docs" element={<OnboardingDocsPage />} />
          <Route path="/design-ops/unreal-ui" element={<UnrealUiPage />} />
          <Route path="/ux-research" element={<UxResearchPage />} />
          <Route path="/ux-research/ia-research" element={<IaResearchPage />} />
          <Route path="/ux-research/menu-redesign" element={<MenuRedesignPage />} />
          <Route path="/ux-research/vr-navigation" element={<VrNavigationPage />} />
          <Route path="/product-mgmt" element={<ProductMgmtPage />} />
          <Route path="/product-mgmt/product-strategy" element={<ProductStrategyPage />} />
          <Route path="/brand-design" element={<BrandDesignPage />} />
          <Route path="/personal-projects" element={<PersonalProjectsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}