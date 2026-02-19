import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";
import { SubPageLayout } from "../components/SubPageLayout";
import { ImageGallery } from "../components/ImageGallery";

// Brand / Design images (local files)
import imgBrand1 from "@/imports/brand-1.png";
import imgBrand2 from "@/imports/brand-2.png";
import imgBrand3 from "@/imports/brand-3.png";
import imgBrand4 from "@/imports/brand-4.png";
import imgBrand5 from "@/imports/brand-5.png";
import imgBrand6 from "@/imports/brand-6.png";
import imgBrand7 from "@/imports/brand-7.png";
import imgBrand8 from "@/imports/brand-8.png";
import imgBrand9 from "@/imports/brand-9.png";
import imgBrand12 from "@/imports/brand-12.png";
import imgBrand14 from "@/imports/brand-14.png";
import imgBrand15 from "@/imports/brand-15.png";
import imgBrand18 from "@/imports/brand-18.png";
import imgBrand19 from "@/imports/brand-19.png";
import imgBrand20 from "@/imports/brand-20.png";
import imgBrand21 from "@/imports/brand-21.png";
import imgBrand22 from "@/imports/brand-22.png";
import imgBrand23 from "@/imports/brand-23.png";
import imgBrand24 from "@/imports/brand-24.png";
import imgBrand25 from "@/imports/brand-25.png";

export function BrandDesignPage() {
  return (
    <SubPageLayout
      icon={<FontAwesomeIcon icon={faPalette} style={{ fontSize: 28 }} />}
      title="Brand, App and Web Design"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="font-['Inter',sans-serif] text-[#666] text-[14px] leading-relaxed mb-8 max-w-[640px]"
      >
        Design Works Showcase — A selection of brand identity, web design, and application design projects.
      </motion.p>

      {/* Brand identity row */}
      <div className="mb-6">
        <motion.h4
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[14px] mb-4"
        >
          Brand Identity
        </motion.h4>
        <ImageGallery
          images={[
imgBrand20,
            imgBrand21,
            imgBrand2,
            imgBrand3,
            imgBrand4,
            imgBrand15,
            imgBrand1,
            imgBrand18,
            imgBrand19,
            imgBrand23,
            imgBrand24,
            imgBrand25,
          ]}
          columns={3}
        />
      </div>

      {/* Web & App design row */}
      <div className="mb-6">
        <motion.h4
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[14px] mb-4 mt-10"
        >
          Web & App Design
        </motion.h4>
        <ImageGallery
          images={[
            imgBrand5,
            imgBrand6,
            imgBrand7,
            imgBrand12,
          ]}
          columns={3}
        />
      </div>

      {/* Dashboard / Data design row */}
      <div>
        <motion.h4
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-['Roboto_Slab',serif] text-[#0BBA3F] text-[14px] mb-4 mt-10"
        >
          Dashboard & Data Visualization
        </motion.h4>
        <ImageGallery
          images={[
            imgBrand22,
            imgBrand8,
            imgBrand9,
            imgBrand14,
          ]}
          columns={3}
        />
      </div>
    </SubPageLayout>
  );
}