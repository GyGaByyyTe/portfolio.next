import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: 'Project One',
    description: 'A modern web application built with Next.js and TypeScript.',
    image: '/project1-placeholder.jpg',
    link: '/projects/project-one',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    title: 'Project Two',
    description: 'Interactive dashboard with real-time data visualization.',
    image: '/project2-placeholder.jpg',
    link: '/projects/project-two',
    technologies: ['React', 'D3.js', 'Node.js']
  },
  {
    title: 'Project Three',
    description: 'E-commerce platform with modern UI/UX design.',
    image: '/project3-placeholder.jpg',
    link: '/projects/project-three',
    technologies: ['Next.js', 'Stripe', 'MongoDB']
  }
]

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-12">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.link}
            className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
          >
            <div className="relative h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 