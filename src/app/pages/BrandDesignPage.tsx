import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";
import { SubPageLayout } from "../components/SubPageLayout";
import { ImageGallery } from "../components/ImageGallery";

// Brand / Design images
import imgBrand1 from "figma:asset/6f56f64cae38a50545bcd1b5aee227e7a47b4774.png";
import imgBrand2 from "figma:asset/3d692c38ae6f00ed7573eb880f16dab1147315aa.png";
import imgBrand3 from "figma:asset/1f551f77be6e6f7ac614a84151f337a8b201ab52.png";
import imgBrand4 from "figma:asset/f6b5dd18d248d81ab39d069e9c2f961f2c7bf941.png";
import imgBrand5 from "figma:asset/9c7efb9ec96274068edc6cc427348934feced0fa.png";
import imgBrand6 from "figma:asset/e2decf930ca68436d27cbc17aac89862e91a63c2.png";
import imgBrand7 from "figma:asset/8b7cb7de81b0a349426d4914aa96a38a4aba44bf.png";
import imgBrand8 from "figma:asset/945271fa2d6ea9522ed4d7d4eddd531103c4aafd.png";
import imgBrand9 from "figma:asset/55b3bc963cf36dd0144a36a25d4344d0fc865444.png";
import imgBrand10 from "figma:asset/d5534dd8108aa76c03b5d05175d2260915532533.png";
import imgBrand11 from "figma:asset/6c6d7fe3dab66e5aeea074734d4c32e1fda118e3.png";
import imgBrand12 from "figma:asset/99682e7626f3a3a5079a0da6ccd913502400f0cc.png";
import imgBrand13 from "figma:asset/38bbbd4408e03c84d6218d22ef02b984b6e4c582.png";
import imgBrand14 from "figma:asset/8a38a73a236899b417e967afef5ec75b27893b77.png";
import imgBrand15 from "figma:asset/3255985b82f338c144bd0278a97e12b5d7228102.png";
import imgBrand16 from "figma:asset/8d52c36cf042c64cfb34ff8c9b96293df372f2af.png";
import imgBrand17 from "figma:asset/e5312e96bc18474e81a9cf016db7ed78e096f503.png";
import imgBrand18 from "figma:asset/b123154c1d1e60f7214ccc6ed76b916920bb8d6f.png";
import imgBrand19 from "figma:asset/3f5393f89a61e1137cf2f6519f0de65140c9cf5e.png";
import imgBrand20 from "figma:asset/0c0c208b02334ad23845fac61480364ff290ba04.png";
import imgBrand21 from "figma:asset/10cd1f75bc258363826701cecd038eebbdb5e1a6.png";
import imgBrand22 from "figma:asset/102347bf617efda572644c60eb72500ef7b81624.png";
import imgBrand23 from "figma:asset/d7dee484fa14155de3e555fffa276c11a5d879a8.png";
import imgBrand24 from "figma:asset/d9bc45fbc3f134594ffb404e2a5022ce4341f962.png";
import imgBrand25 from "figma:asset/b6bf6024228e0c845da802b2fe0573e1b8ad7887.png";

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