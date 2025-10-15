import { ProjectCard } from "../components/ProjectCard";
import { getProjectsByCategory } from "../data/projects";

export function meta() {
  return [
    { title: "Ari - Portfolio" },
    { name: "description", content: "Creative developer and designer portfolio showcasing Touch Designer, Grasshopper, University Projects, and P5.js work." },
  ];
}

export default function Home() {
  const touchDesignerProjects = getProjectsByCategory("touchdesigner");
  const grasshopperProjects = getProjectsByCategory("grasshopper");
  const universityProjects = getProjectsByCategory("university");
  const p5jsProjects = getProjectsByCategory("p5js");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">Arindam Katoch</h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
            Creative Developer & Designer
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-500 max-w-2xl mx-auto">
            Exploring the intersection of art, code, material and design through digital and physical spaces
          </p>
        </div>
      </section>

      {/* Touch Designer Section */}
      <section id="touchdesigner" className="py-20 px-4 md:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Touch Designer</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Real-time interactive installations and audiovisual experiences
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {touchDesignerProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Grasshopper Section */}
      <section id="grasshopper" className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Grasshopper</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Parametric design and computational architecture projects
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {grasshopperProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* University Projects Section */}
      <section id="university" className="py-20 px-4 md:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">University Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Academic research and coursework explorations
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universityProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* P5.js Section */}
      <section id="p5js" className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">P5.js</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Creative coding sketches and interactive web experiences
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {p5jsProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <section className="py-20 px-4 md:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            Interested in collaborating? Let's create something amazing together.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:your.email@example.com"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Email Me
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
