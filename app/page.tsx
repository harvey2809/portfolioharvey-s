import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CATEGORIES, PROJECTS } from "@/lib/constants";

export default function Home() {
  return (
    <div className="p-6 space-y-8">
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Welcome to My Portfolio</h2>
        <Card className="bg-accent">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-2xl font-semibold">About Me</h3>
            <p className="text-lg">
              Hi, I'm Aditya Kumar, a passionate Full Stack Developer with 5
              years of experience in crafting robust and scalable web
              applications. My journey in the tech world has been driven by a
              love for solving complex problems and creating user-centric
              solutions.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">4 Years Frontend</Badge>
              <Badge variant="secondary">2 Years Backend</Badge>
              <Badge variant="secondary">React Expert</Badge>
              <Badge variant="secondary">Node.js Enthusiast</Badge>
            </div>
            <Button className="mt-4">Download CV</Button>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">My Projects</h2>
        <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
          {CATEGORIES.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className="rounded-full flex-shrink-0"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.slice(0, 4).map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
