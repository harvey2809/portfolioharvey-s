import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  category: string
  technologies: string[]
  pdf?: string // ✅ added PDF prop
  backgroundColor?: string
  darkBackgroundColor?: string
}

export function ProjectCard({ 
  title, 
  description, 
  category, 
  technologies, 
  pdf, // ✅ include in function
  backgroundColor = "bg-pink-50",
  darkBackgroundColor = "dark:bg-pink-900"
}: ProjectCardProps) {
  const CardContentElement = (
    <Card className={`${backgroundColor} ${darkBackgroundColor} border-none hover:cursor-pointer`}>
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary">{category}</Badge>
        </div>
        <CardTitle className="text-xl mt-2">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )

  // ✅ If PDF exists, wrap the card in a link
  return pdf ? (
    <a href={pdf} target="_blank" rel="noopener noreferrer" className="block">
      {CardContentElement}
    </a>
  ) : (
    CardContentElement
  )
}

