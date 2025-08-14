import Link from "next/link";

export default function AppBar() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center backdrop-blur-md bg-white/30 dark:bg-gray-800/30 sticky top-0 z-50">
      <Link className="flex items-center justify-center" href="/">
        <span className="sr-only">Harvey's Portfolio</span>
        <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          AK
        </span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:text-purple-500 transition-colors"
          href="/#about"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:text-purple-500 transition-colors"
          href="/#skills"
        >
          Skills
        </Link>
        <Link
          className="text-sm font-medium hover:text-purple-500 transition-colors"
          href="/#projects"
        >
          Projects
        </Link>
        <Link
          className="text-sm font-medium hover:text-purple-500 transition-colors"
          href="/blog"
        >
          Blog
        </Link>
        <Link
          className="text-sm font-medium hover:text-purple-500 transition-colors"
          href="/#contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
