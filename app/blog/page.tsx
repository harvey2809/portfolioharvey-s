'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { ChevronRight, Search, Calendar, User, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Frontend Development: Trends to Watch in 2024",
    excerpt: "Explore the cutting-edge technologies and methodologies shaping the future of frontend development. From AI-assisted coding to advanced state management techniques, discover what's on the horizon for web developers.",
    date: "2024-03-15",
    author: "Jane Doe",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Frontend", "Web Development", "Trends"]
  },
  {
    id: 2,
    title: "Mastering React Hooks: Advanced Patterns and Best Practices",
    excerpt: "Dive deep into React Hooks and learn advanced patterns that will elevate your React applications. This comprehensive guide covers custom hooks, memoization techniques, and performance optimization strategies.",
    date: "2024-03-10",
    author: "Jane Doe",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Hooks", "JavaScript"]
  },
  {
    id: 3,
    title: "Building Accessible Web Applications: A Comprehensive Guide",
    excerpt: "Learn how to create web applications that are truly accessible to all users. This guide covers ARIA attributes, keyboard navigation, color contrast, and other essential techniques for building inclusive digital experiences.",
    date: "2024-03-05",
    author: "Jane Doe",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Accessibility", "Web Development", "UX"]
  },
  {
    id: 4,
    title: "Optimizing Web Performance: Strategies for Lightning-Fast Websites",
    excerpt: "Discover proven techniques to boost your website's performance. From lazy loading and code splitting to advanced caching strategies, learn how to create blazing-fast web experiences that users will love.",
    date: "2024-02-28",
    author: "Jane Doe",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Performance", "Optimization", "Web Development"]
  },
  {
    id: 5,
    title: "The Art of Clean Code: Writing Maintainable JavaScript",
    excerpt: "Explore best practices for writing clean, maintainable JavaScript code. Learn about modular architecture, design patterns, and coding standards that will make your codebase a joy to work with for you and your team.",
    date: "2024-02-20",
    author: "Jane Doe",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["JavaScript", "Clean Code", "Best Practices"]
  }
]

const FeaturedPost = ({ post }) => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ y }}
      className="relative overflow-hidden rounded-xl shadow-2xl mb-12"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/70 to-pink-500/70 mix-blend-multiply" />
      <Image
        src={post.image}
        alt={post.title}
        width={800}
        height={600}
        className="w-full h-[60vh] object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">{post.title}</h2>
          <p className="text-lg mb-4">{post.excerpt}</p>
          <div className="flex items-center text-sm mb-4">
            <Calendar className="mr-2 h-4 w-4" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <User className="ml-4 mr-2 h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-white/20 text-white">{tag}</Badge>
            ))}
          </div>
          <Button className="bg-white text-purple-600 hover:bg-purple-100">
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}

const BlogPost = ({ post, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl">
      <div className="relative h-48">
        <Image
          src={post.image}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 mix-blend-multiply" />
      </div>
      <CardContent className="flex-grow p-6">
        <CardTitle className="text-xl font-bold mb-2 line-clamp-2">{post.title}</CardTitle>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <Calendar className="mr-2 h-4 w-4" />
          <span>{new Date(post.date).toLocaleDateString()}</span>
          <User className="ml-4 mr-2 h-4 w-4" />
          <span>{post.author}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full group">
          Read More 
          <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  </motion.div>
)

const ShimmerEffect = () => (
  <div className="animate-pulse">
    <div className="h-48 bg-gray-300 rounded-t-lg dark:bg-gray-700 mb-4" />
    <div className="h-4 bg-gray-300 rounded dark:bg-gray-700 mb-2" />
    <div className="h-4 bg-gray-300 rounded dark:bg-gray-700 w-3/4 mb-2" />
    <div className="h-4 bg-gray-300 rounded dark:bg-gray-700 w-1/2" />
  </div>
)

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">

      <main className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-full border-2 border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          {isLoading ? (
            <div className="space-y-8">
              <ShimmerEffect />
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <ShimmerEffect />
                <ShimmerEffect />
                <ShimmerEffect />
              </div>
            </div>
          ) : (
            <>
              {searchTerm === "" && <FeaturedPost post={blogPosts[0]} />}

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.slice(searchTerm === "" ? 1 : 0).map((post, index) => (
                  <BlogPost key={post.id} post={post} index={index} />
                ))}
              </div>
            </>
          )}

          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </main>
    </div>
  )
}