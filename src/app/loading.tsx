import Image from "next/image";

const loadingTextOptions = [
  "Getting the party started for you...",
  "Pouring the drinks...",
  "Cracking the cold ones...",
  "Turning on the party lights...",
  "Pickin' the tunes...",
  "Setting up the dance floor...",
];

const getRandomLoadingText = () => {
  const randomIndex = Math.floor(Math.random() * loadingTextOptions.length);
  return loadingTextOptions[randomIndex];
};

const Loading = ({}) => {
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
      <h1 className="text-xl font-bold tracking-wider">
        {getRandomLoadingText()}
      </h1>
    </main>
  );
};

export default Loading;
