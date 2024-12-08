import { IconProps } from "@radix-ui/react-icons/dist/types";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/C8g6GCXetul
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Skills() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              My Skills
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              As a frontend developer, I have expertise in a variety of
              technologies and tools.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-muted rounded-full p-4 flex items-center justify-center">
                <HashIcon className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">HTML</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-muted rounded-full p-4 flex items-center justify-center">
                <CodepenIcon className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">CSS</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-muted rounded-full p-4 flex items-center justify-center">
                <CodepenIcon className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">JavaScript</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-muted rounded-full p-4 flex items-center justify-center">
                <CodepenIcon className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">React</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-muted rounded-full p-4 flex items-center justify-center">
                <FastForwardIcon className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">Next.js</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-muted rounded-full p-4 flex items-center justify-center">
                <WindIcon className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-muted rounded-full p-4 flex items-center justify-center">
                <GitGraphIcon className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CodepenIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  );
}

function FastForwardIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 19 22 12 13 5 13 19" />
      <polygon points="2 19 11 12 2 5 2 19" />
    </svg>
  );
}

function GitGraphIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>
  );
}

function HashIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="9" y2="9" />
      <line x1="4" x2="20" y1="15" y2="15" />
      <line x1="10" x2="8" y1="3" y2="21" />
      <line x1="16" x2="14" y1="3" y2="21" />
    </svg>
  );
}

function WindIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  );
}
