const USER_INFO = {
    name:'Aditya Kumar',
    designation:'Frontend Developer',
    description: "With over 4 years of experience, I craft exceptional digital experiences that combine cutting-edge technology with intuitive design."
}



const ABOUT_ME = {
    title: 'About Me',
    description: "I'm a seasoned frontend developer with a passion for creating seamless user experiences. My journey in web development began over 4 years ago, and since then, I've had the privilege of working on a diverse range of projects, from small business websites to large-scale enterprise applications.My expertise lies in building responsive, accessible, and performant web applications using modern technologies like React, Next.js, and TypeScript. I'm constantly exploring new tools and techniques to stay at the forefront of frontend development. When I'm not coding, you can find me contributing to open-source projects, writing technical articles, or mentoring aspiring developers.",
    imageUrl: 'https://drive.google.com/file/d/1fEMIWOJVpjPx5oB1qj5gTIQDQmi0lC1J/view?usp=sharing',
}


const SKILLS = [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "GraphQL", level: 80 },
        { name: "Redux", level: 85 },
    ]


const CONTACT_US = {
    email: 'adityakmr9672@gmail.com',
    linkedIn:'https://www.linkedin.com/in/adityakmr7',
    github:'https://www.github.com/adityakmr7'
}


const PROJECTS = [
    { 
      title: "E-commerce Platform", 
      description: "A full-featured online store built with Next.js, GraphQL, and Stripe integration.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "GraphQL", "Stripe", "Tailwind CSS"]
    },
    { 
      title: "Social Media Dashboard", 
      description: "Real-time analytics dashboard for social media platforms using React and D3.js.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "D3.js", "WebSocket", "Material-UI"]
    },
    { 
      title: "AI-powered Chatbot", 
      description: "An intelligent chatbot built with React and integrated with OpenAI's GPT-3.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "OpenAI API", "Socket.io"]
    },
  ]

export const USER_INFO_CONSTANT ={
 USER_INFO,
 ABOUT_ME,
 SKILLS,
 PROJECTS,
 CONTACT_US

}