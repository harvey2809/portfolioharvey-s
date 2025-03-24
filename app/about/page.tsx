import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {SKILLS, WORK_EXPERIENCE} from "@/lib/constants"
import {USER_INFO_CONSTANT} from "@/constants/config/info";

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
              {USER_INFO_CONSTANT.USER_INFO.description}
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

