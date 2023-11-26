import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";

const NotFound = ({}) => {
  return (
    <main className="mt-40 flex flex-col items-center justify-center gap-4">
      <div className="h-32 w-32">
        <Image
          src="/discoball.gif"
          width="32"
          height="32"
          alt="Disco"
          className="inline h-auto w-full animate-bounce"
          priority
        />
      </div>
      <h1 className="text-2xl font-bold tracking-wider">Oops! | 404</h1>
      <h2 className="text-xl font-bold tracking-wider">
        website is a work in progress...
      </h2>
      <Button asChild variant={"link"}>
        {/* TODO: Link doesnt take back home, maybe has to be client components or something */}
        <Link href="/">Back to the party</Link>
      </Button>
    </main>
  );
};

export default NotFound;
