import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import SkillSection from "../../components/SkillsSection/SkillSection";

function Home() {
  return (
    <>
      <HeroSection />
      <SkillSection />
      <ProjectsSection />
    </>
  );
}

export default Home;
