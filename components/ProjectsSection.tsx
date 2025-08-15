import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { CATEGORIES, PROJECTS } from "@/lib/constants"

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Lightened main container */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-8 border border-white/20">
        <h1 className="text-4xl font-bold mb-8 text-white">My Projects</h1>

        {/* Categories */}
        <div className="flex space-x-4 mb-8 overflow-x-auto pb-4">
          {CATEGORIES.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={`rounded-full flex-shrink-0 ${
                category === "All"
                  ? "bg-white/30 text-white hover:bg-white/40"
                  : "bg-transparent border border-white/40 text-white hover:bg-white/30"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-4 text-white shadow-md"
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
