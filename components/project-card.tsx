import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  category: string
  technologies: string[]
  rating?: number
  backgroundColor?: string
  darkBackgroundColor?: string
}

export function ProjectCard({ 
  title, 
  description, 
  category, 
  technologies, 
  rating = 5.0,
  backgroundColor = "bg-pink-50",
  darkBackgroundColor = "dark:bg-pink-900"
}: ProjectCardProps) {
  return (
    <Card className={`${backgroundColor} ${darkBackgroundColor} border-none`}>
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary">{category}</Badge>
          <div className="ml-auto flex items-center">
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-yellow-500 ml-1">★</span>
          </div>
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
}

