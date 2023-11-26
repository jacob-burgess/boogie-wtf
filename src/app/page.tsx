import AboutMe from "~/components/about-me";

export default function Home() {
  return (
    <main className="container flex flex-col items-center justify-center p-4">
      {/* <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
        boogie.<span className="text-teal-700">wtf</span>
      </h1> */}
      <AboutMe />
    </main>
  );
}
