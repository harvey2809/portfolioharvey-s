import Link from "next/link"
import { Home, Calendar, Book, Layout, Settings, User } from 'lucide-react'

export function Sidebar() {
  return (
    <div className="w-16 bg-background border-r flex flex-col items-center py-4 space-y-8">
      <Link href="/" className="p-2">
        <div className="font-bold text-2xl">DB</div>
      </Link>
      <nav className="flex flex-col space-y-6">
        <Link href="/" className="p-2 hover:bg-accent rounded-lg">
          <Home className="w-6 h-6" />
        </Link>
        <Link href="/experience" className="p-2 hover:bg-accent rounded-lg">
          <Calendar className="w-6 h-6" />
        </Link>
        <Link href="/projects" className="p-2 hover:bg-accent rounded-lg">
          <Layout className="w-6 h-6" />
        </Link>
        <Link href="/blog" className="p-2 hover:bg-accent rounded-lg">
          <Book className="w-6 h-6" />
        </Link>
        <Link href="/settings" className="p-2 hover:bg-accent rounded-lg mt-auto">
          <Settings className="w-6 h-6" />
        </Link>
      </nav>
      <div className="mt-auto mb-4">
        <Link href="/profile">
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
            <User className="w-6 h-6" />
          </div>
        </Link>
      </div>
    </div>
  )
}

