import Features from "@/components/landing/features";
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Message1 from "@/components/landing/message-1";

export default function Home() {
  return (
    <div className="bg-white">
        <Header />
        <main className="pt-16">
            <Hero />
        </main>
        <Features/>
        <Message1/>
    </div>
  );
}
