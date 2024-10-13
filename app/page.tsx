'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Linkedin, Mail, Send, ChevronRight, Star } from "lucide-react"
import { USER_INFO_CONSTANT } from '@/constants/config/info'

// Custom hook for animated text
const useAnimatedText = (texts: string[], interval = 3000) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }, interval)
    return () => clearInterval(timer)
  }, [texts, interval])

  return texts[currentIndex]
}

export default function PortfolioLanding() {
  const animatedText = useAnimatedText([
    "Frontend Developer",
    "React Native",
    "UI/UX Enthusiast",
    "React Specialist",
    "Performance Optimizer",
  ])

  const skills = USER_INFO_CONSTANT.SKILLS

  const projects = USER_INFO_CONSTANT.PROJECTS

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none mb-4">
                {USER_INFO_CONSTANT.USER_INFO.name}
              </h1>
              <AnimatePresence mode="wait">
                <motion.p
                  key={animatedText}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl text-purple-600 dark:text-purple-400 mb-6"
                >
                  {animatedText}
                </motion.p>
              </AnimatePresence>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mb-8">
                With over 4 years of experience, I craft exceptional digital experiences that combine cutting-edge technology with intuitive design.
              </p>
              <div className="space-x-4">
                <Link href="#contact">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">Hire Me</Button>
                </Link>
                <Link href="#projects">
                  <Button size="lg" variant="outline">View Projects</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-500 dark:text-gray-400 md:text-lg mb-4">
                  I'm a seasoned frontend developer with a passion for creating seamless user experiences. My journey in web development began over 4 years ago, and since then, I've had the privilege of working on a diverse range of projects, from small business websites to large-scale enterprise applications.
                </p>
                <p className="text-gray-500 dark:text-gray-400 md:text-lg mb-4">
                  My expertise lies in building responsive, accessible, and performant web applications using modern technologies like React, Next.js, and TypeScript. I'm constantly exploring new tools and techniques to stay at the forefront of frontend development.
                </p>
                <p className="text-gray-500 dark:text-gray-400 md:text-lg">
                  When I'm not coding, you can find me contributing to open-source projects, writing technical articles, or mentoring aspiring developers.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="https://photos.fife.usercontent.google.com/pw/AP1GczOyXozQYNz2QuGtLMUDRw490NLJwfRvbj3lWtSphJsQFBuvayrZZIdilg=w974-h974-s-no-gm?authuser=0"
                  alt="Jane Doe"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-purple-600 text-white p-4 rounded-lg shadow-xl">
                  <p className="font-bold text-2xl">4+</p>
                  <p className="text-sm">Years of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill) => (
                <div key={skill.name} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{skill.name}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                    <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Featured Projects</h2>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="web">Web Apps</TabsTrigger>
                <TabsTrigger value="mobile">Mobile</TabsTrigger>
                <TabsTrigger value="design">UI/UX</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-48"
                      />
                      <CardContent className="p-4">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-500 dark:text-gray-400 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">{tag}</Badge>
                          ))}
                        </div>
                        <Button variant="outline" className="w-full">
                          View Project <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </TabsContent>
              {/* Add content for other tabs as needed */}
            </Tabs>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-600 text-white px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">What Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((testimonial) => (
                <Card key={testimonial} className="bg-white/10 backdrop-blur-lg text-white">
                  <CardContent className="p-6">
                    <Star className="h-6 w-6 text-yellow-400 mb-4" />
                    <p className="mb-4">
                      "Jane's expertise in frontend development significantly improved our project's performance and user experience. Her attention to detail and problem-solving skills are outstanding."
                    </p>
                    <p className="font-semibold">- Client {testimonial}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  I'm always open to new opportunities, collaborations, or just a friendly chat about web development. Feel free to reach out!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 mr-2 text-purple-600" />
                    <span>{USER_INFO_CONSTANT.CONTACT_US.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="h-6 w-6 mr-2 text-purple-600" />
                    <span>{USER_INFO_CONSTANT.CONTACT_US.linkedIn}</span>
                  </div>
                  <div className="flex items-center">
                    <Github className="h-6 w-6 mr-2 text-purple-600" />
                    <span>{USER_INFO_CONSTANT.CONTACT_US.github}</span>
                  </div>
                </div>
              </div>
              <form className="space-y-4">
                <Input type="text" placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Textarea placeholder="Your Message" className="min-h-[150px]" />
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                  Send Message
                  <Send className="ml-2 h-4  w-4" />
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 px-4 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
            © 2024 Jane Doe. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link href={USER_INFO_CONSTANT.CONTACT_US.github} className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400">
              <Github className="h-5 w-5" />
            </Link>
            <Link href={USER_INFO_CONSTANT.CONTACT_US.linkedIn} className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href={USER_INFO_CONSTANT.CONTACT_US.email} className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400">
              <Mail className="h-5 w-5" />
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}