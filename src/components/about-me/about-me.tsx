import React from "react";
import barBugs from "../../../public/images/bar-bugs.jpg";
import ImageCard from "~/components/about-me/image-card";
import AboutMeIntro from "~/components/about-me/about-me-intro";
import AboutMeImages from "./about-me-images";

const AboutMe = () => {
  return (
    <div className="xl:max-width-4xl mx-auto max-w-lg md:max-w-2xl">
      <AboutMeIntro />
      <AboutMeImages />
    </div>
  );
};

export default AboutMe;
