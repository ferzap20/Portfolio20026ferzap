import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";
import { Link } from "react-router";
import { SubPageLayout } from "../components/SubPageLayout";
import { CaseStudyCard } from "../components/CaseStudyCard";
import { CreativeWorkJsonLd } from "../components/JsonLd";

// Card header images (local files) — single hero image per card
import imgProdMgmt1 from "@/imports/prod-mgmt-1.png";

export function ProductMgmtPage() {
  return (
    <>
      <CreativeWorkJsonLd
        name="Product Management & Ownership"
        description="Bridging design, development, and business goals through strategic product ownership and cross-team alignment."
        keywords={["Product Strategy", "Product Management", "Roadmap Planning", "Cross-team Alignment"]}
        slug="product-management"
      />
      <SubPageLayout
        icon={<FontAwesomeIcon icon={faClipboardList} style={{ fontSize: 28 }} />}
        title="Product Strategy & Ownership"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-['Inter',sans-serif] text-[#666] text-[14px] leading-relaxed mb-8 max-w-[640px]"
        >
          Bridging design, development, and business goals through strategic product ownership.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-50 p-6 rounded-lg mb-12 max-w-[640px]"
        >
          <h3 className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[13px] font-semibold mb-4 uppercase tracking-wide">
            On this page
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/product-mgmt/product-strategy" className="text-[#0BBA3F] hover:text-[#0a9931] text-[13px] font-['Roboto_Slab',serif] transition-colors">
                Product Strategy & Vision
              </Link>
            </li>
          </ul>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div id="product-strategy" className="scroll-mt-32">
            <CaseStudyCard
              title="Product Strategy & Vision"
              description="Collaborated with company leadership to define and visualize short and long-term product strategy, organize and prioritize the roadmap, and create clear communication tools to align all teams around a shared vision."
              to="/product-mgmt/product-strategy"
              headerImage={imgProdMgmt1}
              pills={[
                { label: "Strategy", color: "green" },
                { label: "Roadmap", color: "blue" },
                { label: "Cross-team", color: "indigo" },
              ]}
              index={0}
            />
          </div>
        </div>
      </SubPageLayout>
    </>
  );
}
