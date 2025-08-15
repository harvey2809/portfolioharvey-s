<div className="container mx-auto py-12 px-4">
  {/* Glassmorphism container with stronger contrast */}
  <div className="bg-white/5 backdrop-blur-lg rounded-xl shadow-lg p-8 border border-white/10">
    <h1 className="text-4xl font-bold mb-8 text-gray-100">My Projects</h1>

    {/* Categories */}
    <div className="flex space-x-4 mb-8 overflow-x-auto pb-4">
      {CATEGORIES.map((category) => (
        <Button
          key={category}
          variant={category === "All" ? "default" : "outline"}
          className={`rounded-full flex-shrink-0 transition-colors ${
            category === "All"
              ? "bg-purple-500/80 text-white hover:bg-purple-500"
              : "bg-transparent border border-white/30 text-gray-200 hover:bg-white/20"
          }`}
        >
          {category}
        </Button>
      ))}
    </div>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {PROJECTS.map((project, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-gray-100 shadow-lg hover:bg-white/20 transition"
        >
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  </div>
</div>
