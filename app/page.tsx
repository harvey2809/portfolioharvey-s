"use client"
import {ProjectCard} from "@/components/project-card";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {CATEGORIES, PROJECTS} from "@/lib/constants";
import {USER_INFO_CONSTANT} from "@/constants/config/info";

export default function Home() {
  const handleDownloadCV   = () => {
    const url = `https://drive.google.com/file/d/1BqjnTGg9WlmuoaHYWen10iFdVaw_8Q0o/view?usp=drive_link`;
// Create a direct download link by modifying the Google Drive URL
    // This transforms the view URL to an export URL that forces download
    const downloadUrl = url.replace('/view?usp=sharing', '?download=1&format=pdf');

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', 'Aditya_Kumar_CV.pdf');
    link.setAttribute('target', '_blank');

    // Append to the document, trigger click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div className="p-6 space-y-8">
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Welcome to My Portfolio</h2>
        <Card className="bg-accent">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-2xl font-semibold">About Me</h3>
            <p className="text-lg">
              {USER_INFO_CONSTANT.USER_INFO.description}
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">4 Years Frontend</Badge>
              <Badge variant="secondary">2 Years Backend</Badge>
              <Badge variant="secondary">React Expert</Badge>
              <Badge variant="secondary">Node.js Enthusiast</Badge>
            </div>
            <Button onClick={handleDownloadCV} className="mt-4">Download CV</Button>
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
