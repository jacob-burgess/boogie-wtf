import React from "react";
import { Button } from "~/components/ui/button";

const AboutMeIntro = () => {
  return (
    <>
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
        <Button className="m-0 p-0" size="lg" variant={"link"} asChild>
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
    </>
  );
};

export default AboutMeIntro;
