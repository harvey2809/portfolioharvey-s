import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SKILLS } from "@/lib/constants"
import { USER_INFO_CONSTANT } from "@/constants/config/info"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="bg-black/40 backdrop-blur-md rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-8 text-white">About Me</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-white/10 backdrop-blur-md border border-white/20 text-white">
            <CardHeader>
              <CardTitle>My Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                {USER_INFO_CONSTANT.USER_INFO.description}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border border-white/20 text-white">
            <CardHeader>
              <CardTitle>Skills & Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill, index) => (
                  <Badge key={index} className="bg-white/20 text-white hover:bg-white/30">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
