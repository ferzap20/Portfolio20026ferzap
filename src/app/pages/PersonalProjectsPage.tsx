import { Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { SubPageLayout } from "../components/SubPageLayout";
import {
  PersonalProjectCard,
  PersonalProjectCardProps,
} from "../components/PersonalProjectCard";

// Project header images
import imgTimap from "figma:asset/0eb399add53295ccee0a84bdd55ac4132834e529.png";
import imgBurnAfter from "figma:asset/6fcc1938cd7165c84c207e5c0dea52d2ff1982dc.png";
import imgEatby from "figma:asset/67a26c0e7f1297caa027354b56e70d5c0061f624.png";
import imgPrepshot from "figma:asset/87179aa0d54fed40aa26f99d7c7a0d0bebca2a61.png";

const PROJECTS: PersonalProjectCardProps[] = [
  {
    title: "Timap",
    url: "https://timap.live",
    headerImage: imgTimap,
    description:
      "TIMAP is your go-to platform for finding, creating, and joining sports matches. Whether you're looking to play football, volleyball, basketball, or any other sport, TIMAP connects you with players in your area and makes organizing matches effortless.",
    pills: [
      { label: "Bolt.new", color: "blue" },
      { label: "Prototype", color: "teal" },
      { label: "Typescript", color: "green" },
    ],
  },
  {
    title: "BurnAfter24h",
    url: "https://burnafter24h.figma.site/",
    headerImage: imgBurnAfter,
    description:
      "An ephemeral messaging platform where shared content self-destructs after 24 hours. Designed around privacy-first principles with a minimal, distraction-free interface that puts the focus on temporary communication.",
    pills: [
      { label: "Experimental", color: "purple" },
      { label: "Artsy", color: "pink" },
      { label: "Ephemere", color: "amber" },
    ],
  },
  {
    title: "Eatby",
    url: "https://eatby.figma.site",
    headerImage: imgEatby,
    description:
      "A food expiration tracker that helps reduce waste by keeping tabs on what's in your fridge and pantry. Clean, friendly UI that makes it easy to log items, get reminders before things expire, and plan meals around what you already have.",
    pills: [
      { label: "Figma Make", color: "purple" },
      { label: "Mobile", color: "green" },
      { label: "Claude", color: "cyan" },
    ],
  },
  {
    title: "Prepshot",
    url: "https://qvcam.bolt.host",
    headerImage: imgPrepshot,
    description:
      "A powerful, production-ready Progressive Web App built specifically for camera assistants, this tool makes managing gear effortless on film and TV projects. Create and organize projects, build master equipment lists, and customize gear for each shooting day with precision.",
    pills: [
      { label: "Bolt.new", color: "amber" },
      { label: "Client", color: "indigo" },
      { label: "TypeScript", color: "blue" },
    ],
  },
];

export function PersonalProjectsPage() {
  return (
    <SubPageLayout
      icon={<Sparkles size={28} />}
      title="Personal Projects"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="font-['Roboto_Slab',serif] text-[#666] text-[14px] leading-relaxed mb-10 max-w-[640px]"
      >
        Side experiments, passion projects, and creative explorations — things I build because I'm curious.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {PROJECTS.map((project, i) => (
          <PersonalProjectCard key={project.title} {...project} index={i} />
        ))}
      </div>
    </SubPageLayout>
  );
}