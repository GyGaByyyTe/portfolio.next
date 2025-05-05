import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type BaseProject = {
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  isEmbedded: boolean
}

type RegularProject = BaseProject & {
  isEmbedded: false
}

type EmbeddedProject = BaseProject & {
  isEmbedded: true
  embeddedComponent: string
}

type Project = RegularProject | EmbeddedProject

// This would typically come from a database or CMS
const projects: Record<string, Project> = {
  'project-one': {
    title: 'Project One',
    description: 'A modern web application built with Next.js and TypeScript.',
    longDescription: 'Detailed description of the project, its features, and technologies used.',
    image: '/project1-placeholder.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/project-one',
    liveUrl: 'https://project-one.com',
    isEmbedded: false
  },
  'project-two': {
    title: 'Project Two',
    description: 'Interactive dashboard with real-time data visualization.',
    longDescription: 'A comprehensive dashboard that displays real-time data with interactive charts and graphs.',
    image: '/project2-placeholder.jpg',
    technologies: ['React', 'D3.js', 'Node.js'],
    githubUrl: 'https://github.com/yourusername/project-two',
    liveUrl: 'https://project-two.com',
    isEmbedded: true,
    embeddedComponent: 'ProjectTwoDashboard'
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug]

  if (!project) {
    notFound()
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/projects"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
      >
        ← Back to Projects
      </Link>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="relative h-[400px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-xl text-gray-600 mb-8">{project.longDescription}</p>

          <div className="flex gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              View on GitHub
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>

      {project.isEmbedded && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Interactive Demo</h2>
          <div className="bg-white rounded-lg shadow-sm p-8">
            {/* This is where you would render your embedded component */}
            <div className="text-center text-gray-500">
              Embedded component: {project.embeddedComponent}
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 