"use client";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Button } from "@/components/ui/button";

export default function Home() {
  const handleDownloadCV = () => {
    const url = `https://drive.google.com/uc?export=download&id=1BqjnTGg9WlmuoaHYWen10iFdVaw_8Q0o`;
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Aditya_Kumar_CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-6 space-y-12">
      <section>
        <AboutSection />
        <Button
          onClick={handleDownloadCV}
          className="mt-6 bg-white/20 text-white hover:bg-white/30"
        >
          Download CV
        </Button>
      </section>

      <section>
        <ProjectsSection limit={4} />
      </section>
    </div>
  );
}
