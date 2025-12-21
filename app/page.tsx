import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";

export default function Home() {
  return (
    <div className="bg-white">
        <Header />
        <main className="pt-16">
            <Hero />
        </main>
    </div>
  );
}
