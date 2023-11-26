"use client";

import React from "react";
import Image from "next/image";
import barBugs from "../../public/images/bar-bugs.jpg";
import { Button } from "./ui/button";

const AboutMe = () => {
  return (
    <div className="xl:max-width-4xl mx-auto max-w-lg md:max-w-2xl">
      <h1 className="mb-4 font-mono text-2xl uppercase tracking-widest text-primary">
        About me
      </h1>
      <h1 className="mb-4 text-4xl font-bold">
        Hello, my name is Jacob Burgess.
      </h1>
      <p className="mb-4 text-lg">
        I&apos;m a software developer and life-long funthusiast.
      </p>
      <p className="mb-4 text-lg">
        I love building things and generally have a few side projects going on.
        I graduated from USC in 2020 and still live in LA - Venice, to be exact.
        I&apos;m currently working at
        <Button className="p-0" size="lg" variant={"link"} asChild>
          <a
            target="_blank"
            href="https://rootine.co/"
            rel="noopener noreferrer"
            className="text-lg font-bold"
          >
            Rootine
          </a>
        </Button>{" "}
        as a software engineer.
      </p>

      <p className="mb-4">
        I wrote my first line of code in college and immediately fell in love...
        <div style={{ position: "relative", width: "300px", height: "500px" }}>
          <Image
            alt="debugging in the bar"
            src={barBugs}
            fill
            sizes="100vw"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        ({"there's a lot fewer bugs now… or at least I hide them better"})
      </p>

      <p className="mb-4">
        and did other college stuff there too...
        <div style={{ position: "relative", width: "300px", height: "500px" }}>
          {/* <Video src={atriumYmca} /> */}
        </div>
      </p>

      <p className="mb-4">
        {"Now, when I'm not coding or learning about coding, I'm"}
      </p>

      <div className="mb-4">
        <p>traveling...</p>
        {/* Add more image tags for pics */}
      </div>

      <div className="mb-4">
        <p>attending sports games...</p>
        {/* Add more image tags for pics */}
      </div>

      <div className="mb-4">
        <p>and doing (water) action sports...</p>
        {/* Add more image tags for surf/wake pics */}
      </div>

      <p className="mb-4">
        … my days of snowboarding are over{" "}
        {/* <Image
          src="/images/collar-bone.jpeg"
          alt="Broken bones"
          className="mt-2 max-w-full"
          width={3000}
          height={3000}
        /> */}
      </p>

      <p className="mb-4">
        I love building things and exploring new ways to make my development
        life easier through the tools I use (recently hooked on SST as my
        love/hate relationship with terraform evolves). I live in Venice, CA,
        and try to touch sand at least once a day.
        <a href="/link-to-random-thought-page" className="text-blue-500">
          Link to random thought page about how sand is just dirt
        </a>
      </p>

      <div className="mb-4">
        <p>You can find me at</p>
        <ul>
          <li>Twitter</li>
          <li>Github</li>
          <li>Email: your@email.com</li>
        </ul>
      </div>

      <p className="mb-4">
        Checkout some <a href="/projects">{"projects I've built"}</a> and{" "}
        <a href="/blogs">{"blogs I've written"}</a>.
      </p>

      <p>If you like ice cream, put your email in here:</p>
      {/* Add your email input and button here */}
    </div>
  );
};

export default AboutMe;
