import ImageCardDisplay from "~/components/image-card-display";

export default function Home() {
  return (
    <main className="container flex flex-col items-center justify-center p-4">
      <p className="mb-8 text-4xl font-extrabold">Some photos i like</p>
      <ImageCardDisplay />
    </main>
  );
}
