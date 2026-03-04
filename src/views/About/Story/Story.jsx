import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FounderIntro from "../../../components/AboutComps/StoryComps/FounderIntro";
import BackgroundHistory from "../../../components/AboutComps/StoryComps/BackgroundHistory";
import DedicatedService from "../../../components/AboutComps/StoryComps/DedicatedService";
import LittleHavenEthos from "../../../components/AboutComps/StoryComps/LittleHavenEthos";
import LearningExperiences from "../../../components/AboutComps/StoryComps/LearningExperiences";
import PurposeDesignedSpaces from "../../../components/AboutComps/StoryComps/PurposeDesignedSpaces";
import AmazingTeam from "../../../components/AboutComps/StoryComps/AmazingTeam";
import StaffTraining from "../../../components/AboutComps/StoryComps/StaffTraining";

const ease = [0.22, 1, 0.36, 1];

const Story = () => (
  <div className="min-h-screen" style={{ background: "#faf8f4" }}>

    {/* ── Hero ─────────────────────────────────────────────── */}
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: "440px",
        background: "linear-gradient(135deg, #0c2b5e 0%, #0a2248 60%, #0e2d58 100%)",
      }}
    >
      {/* Dot texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(125,178,255,0.12) 0%, transparent 70%)",
        }}
      />

      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-16"
        style={{ minHeight: "440px", paddingTop: "8rem" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="max-w-2xl"
        >
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-6" aria-label="Breadcrumb">
            <Link
              to="/about"
              className="font-sans text-xs font-semibold text-white/45 hover:text-white/70 transition-colors duration-200 uppercase tracking-widest"
            >
              About Us
            </Link>
            <span className="text-white/25 text-xs">/</span>
            <span className="font-sans text-xs font-semibold text-white/70 uppercase tracking-widest">
              Our Story
            </span>
          </nav>

          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-7 h-px bg-white/35 flex-shrink-0" />
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-white/45">
              Our Story
            </span>
          </div>
          <h1
            className="font-display font-semibold text-white leading-tight mb-4"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            Two decades of<br />
            <span className="text-primary-200">caring for children.</span>
          </h1>
          <p className="font-sans text-white/60 text-lg leading-relaxed max-w-xl">
            From community childcare programmes to three thriving nurseries — the story of Little Haven
            is one of passion, purpose, and a deep commitment to every child.
          </p>
        </motion.div>
      </div>
    </section>

    {/* ── Story sections ───────────────────────────────────── */}
    <FounderIntro />
    <BackgroundHistory />
    <LittleHavenEthos />
    <DedicatedService />
    <LearningExperiences />
    <PurposeDesignedSpaces />
    <AmazingTeam />
    <StaffTraining />

  </div>
);

Story.displayName = "Story";
export default memo(Story);
