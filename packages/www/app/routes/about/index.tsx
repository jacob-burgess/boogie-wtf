import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col p-12 max-w-2xl mx-auto gap-4">
      <div className="flex gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Jacob Burgess</h1>
          <p>a.k.a boogie a.k.a. JacoBoogie</p>
        </div>
        <img
          className="rounded-full"
          src="/images/profile.jpg"
          alt="JacoBoogie"
          width={150}
          height={150}
        />
      </div>
      <p>
        I was born and raised in San Diego and went to the University of
        Southern California. I graduated with a degree in Computer Science
        Business Administration in 2020 and have been a software developer ever
        since.
      </p>
      <p>
        I now live in Venice, CA where I enjoy my free time by going to the gym,
        surfing, and skateboarding.
      </p>
      <p>
        I currently enjoy building with{" "}
        <a className="underline" href="https://tanstack.com/start">
          TanStack Start
        </a>
        ,{" "}
        <a className="underline" href="https://sst.dev">
          SST
        </a>
        , and{" "}
        <a className="underline" href="https://planetscale.com">
          PlanetScale
        </a>
        .
      </p>
    </div>
  );
}
