import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="flex flex-col p-12 max-w-2xl mx-auto gap-4">
      <h1 className="text-4xl font-bold">Jacob Burgess</h1>
      <p>a.k.a boogie a.k.a. JacoBoogie</p>
      <p>
        I am a fullstack software engineer with a passion for building. I like
        to stay up to date with latest trends in the web development world via
        my twitter account{" "}
        <a className="underline" href="https://x.com/JacoBoogie">
          @JacoBoogie
        </a>
        .
      </p>
      <p>
        Some side projects I've built:
        <ul className="list-disc list-inside">
          <li>
            <a
              className="underline"
              href="https://github.com/jacob-burgess/killtony"
            >
              KillTony
            </a>{" "}
            - Semantic search of the Kill Tony podcast
          </li>
          <li>
            <a
              className="underline"
              href="https://github.com/jacob-burgess/boogle-drive"
            >
              Boogle Drive
            </a>{" "}
            - A file uploading site
          </li>
          <li>
            <a
              className="underline"
              href="https://github.com/jacob-burgess/boogchat"
            >
              Boog Chat
            </a>{" "}
            - A video chat app built on top of Durable Objects
          </li>
        </ul>
      </p>
      <p>
        My resume is available{" "}
        <a className="underline" href="/images/burgess-resume-2025.pdf">
          here
        </a>
        .
      </p>
    </div>
  );
}
