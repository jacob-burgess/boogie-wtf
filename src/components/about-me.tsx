import Link from "next/link";
import { Button } from "~/components/ui/button";
import { siteConfig } from "~/config/site";

const AboutMe = () => {
  return (
    <div className="xl:max-width-4xl mx-auto max-w-lg md:max-w-2xl">
      <h1 className="mb-4 font-mono  text-2xl uppercase tracking-widest text-teal-700">
        About me
      </h1>
      <h1 className="mb-4 text-4xl font-bold">
        Hello, my name is <span className="text-teal-700">Jacob Burgess.</span>
      </h1>
      <p className="mb-4 text-lg">
        some of my friends call me{" "}
        <span className="font-extrabold text-teal-700">boogie</span>
      </p>
      <p className="mb-4 text-lg">
        I&apos;m a software developer and life-long funthusiast.
      </p>
      <p className="mb-4 text-lg">
        I generally have a few side projects going on. I&apos;m currently
        working at{" "}
        <a
          className="text-teal-600 hover:underline"
          target="_blank"
          href="https://rootine.co/"
          rel="noopener noreferrer"
        >
          Rootine
        </a>{" "}
        as a software engineer.
      </p>
      <p className="mb-4 text-lg">
        I love building things and exploring new ways to make my development
        life easier through the tools I use (recently hooked on SST as my
        love/hate relationship with terraform evolves). I grew up in San Diego,
        CA and gracuated from USC in 2020. Since then, I&apos;ve been living bby
        the beach in Venice, CA and try to{" "}
        <a
          className="text-teal-600 hover:underline"
          href="https://twitter.com/JacoBoogie/status/1727095350564176335"
          target="_blank"
        >
          touch sand at least once a day.{" "}
        </a>
      </p>
      <div className="mb-4 items-center justify-center text-center">
        <Button size="lg" asChild>
          <Link href="/about">
            Check the about page, its got pics n stuff too
          </Link>
        </Button>
      </div>
      <p className="mb-4 text-lg">
        you can find me on{" "}
        <ul className="mt-2 list-inside list-disc">
          <li>
            <a className="hover:underline" href={siteConfig.links.github}>
              github
            </a>
          </li>
          <li>
            <a className="hover:underline" href={siteConfig.links.twitter}>
              twitter
            </a>
          </li>
          <li>
            <a
              className="hover:underline"
              href="mailto:jacobburgess11@gmail.com"
            >
              email
            </a>
          </li>
        </ul>
      </p>
    </div>
  );
};

export default AboutMe;
