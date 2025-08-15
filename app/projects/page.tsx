import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { CATEGORIES, PROJECTS } from "@/lib/constants";
import { GlassWrapper } from "@/components/ui/glass-wrapper";

export default function ProjectsPage() {
  return (
    <div className="relative container mx-auto py-12 px-4">
      {/* Background overlay to match About page */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm -z-10" />

      <GlassWrapper className="p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-white">My Projects</h1>

        {/* Category Buttons */}
        <div className="flex space-x-4 mb-8 overflow-x-auto pb-4">
          {CATEGORIES.map((category) => (
            <Button
              key={category}
              variant="outline"
              className={`rounded-full flex-shrink-0 border border-white/30 text-white transition ${
                category === "All"
                  ? "bg-white/20 hover:bg-white/30"
                  : "bg-transparent hover:bg-white/20"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <GlassWrapper
              key={index}
              className="p-4 rounded-xl border border-white/20"
            >
              <ProjectCard {...project} />
            </GlassWrapper>
          ))}
        </div>
      </GlassWrapper>
    </div>
  );
}
