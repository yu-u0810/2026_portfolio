import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import FadeInSection from "@/components/FadeInSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* 各コンポーネント内のsectionにidを振るか、ここでdivで囲ってidを振ります */}
      <Hero />
      <div className="max-w-4xl mx-auto px-6 space-y-32 pd-32">
        <FadeInSection>
          <Projects />
        </FadeInSection>

        <FadeInSection>
          <Skills />
        </FadeInSection>
      </div>
    </main>
  );
}