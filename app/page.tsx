import SessionProviderWrapper from "@/components/auth/session-provider";
import Features from "@/components/landing/features";
import Features2 from "@/components/landing/features-2";
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Message1 from "@/components/landing/message-1";
import Message2 from "@/components/landing/message-2";
import Process from "@/components/landing/process";
import Purpose from "@/components/landing/purpose";
export default function Home() {
  return (
    <div className="bg-white  overflow-hidden">
      <SessionProviderWrapper>
        <Header />
      </SessionProviderWrapper>

      <main className="pt-16">
        <Hero />
      </main>
      <Features />
      <Message1 />
      <Process />
      <Purpose />
      <Features2 />
      <Message2 />
    </div>
  );
}
