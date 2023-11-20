import Link from "next/link";
import { HandMetal } from "lucide-react";

import { Button } from "~/components/ui/button";

const NotFound = ({}) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold tracking-wider">Oops! | 404</h1>
      <h2 className="text-xl font-bold tracking-wider">
        Looks like this party&apos;s rolled.
      </h2>
      {/* TODO: more clever 404 */}
      <Button asChild variant="secondary">
        <Link href="/">
          <HandMetal className="mr-4 h-6 w-6" />
          Back to the party
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
