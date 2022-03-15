import React from "react";
import ContactSection from "../../components/ContactSection/ContactSection";
import FooterSection from "../../components/FooterSection/FooterSection";
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
      <FooterSection />
    </>
  );
}

export default Home;
