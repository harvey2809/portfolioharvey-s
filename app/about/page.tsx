import { Badge } from "@/components/ui/badge";
import { SKILLS } from "@/lib/constants";
import { USER_INFO_CONSTANT } from "@/constants/config/info";
import { GlassWrapper } from "@/components/ui/glass-wrapper";

export default function AboutPage() {
  return (
    <div className="relative container mx-auto py-12 px-4">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm -z-10" />

      <GlassWrapper className="p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-white">About Me</h1>

        <p className="text-lg text-white mb-6 leading-relaxed">
          {USER_INFO_CONSTANT.USER_INFO.description}
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-white">
          Skills & Expertise
        </h2>

        <div className="flex flex-wrap gap-2">
          {SKILLS.map((skill, index) => (
            <Badge
              key={index}
              className="bg-white/20 text-white border border-white/30 hover:bg-white/30 transition"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </GlassWrapper>
    </div>
  );
}

