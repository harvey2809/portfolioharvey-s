import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SKILLS, WORK_EXPERIENCE } from "@/lib/constants"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>My Journey</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              With 7 years of experience in web development, I've had the privilege of working on a wide range of projects, from small business websites to large-scale enterprise applications. My passion for clean, efficient code and user-centric design has driven me to continuously expand my skills and stay at the forefront of web technologies.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Skills & Expertise</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill, index) => (
                <Badge key={index}>{skill}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Professional Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-4">
              {WORK_EXPERIENCE.map((job, index) => (
                <li key={index}>
                  <strong>{job.title}</strong> at {job.company} ({job.period})
                  <p>{job.description}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

