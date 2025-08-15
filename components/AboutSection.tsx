import { Badge } from "@/components/ui/badge";
import { SKILLS } from "@/lib/constants";
import { USER_INFO_CONSTANT } from "@/constants/config/info";
import { GlassWrapper } from "@/components/ui/glass-wrapper";

export function AboutSection() {
  return (
    <GlassWrapper>
      <h1 className="text-4xl font-bold mb-6 text-white">About Me</h1>
      <p className="text-lg text-white mb-6">
        {USER_INFO_CONSTANT.USER_INFO.description}
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-white">Skills & Expertise</h2>
      <div className="flex flex-wrap gap-2">
        {SKILLS.map((skill, index) => (
          <Badge key={index} className="bg-white/20 text-white">
            {skill}
          </Badge>
        ))}
      </div>
    </GlassWrapper>
  );
}
