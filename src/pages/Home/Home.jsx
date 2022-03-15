import React from "react";
import ContactSection from "../../components/ContactSection/ContactSection";
import HeroSection from "../../components/HeroSection/HeroSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import SkillSection from "../../components/SkillsSection/SkillSection";

function Home() {
  return (
    <>
      <HeroSection />
      <SkillSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

export default Home;
