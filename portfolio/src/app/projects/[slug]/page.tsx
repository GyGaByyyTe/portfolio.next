import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import dynamic from 'next/dynamic'

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

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug]

  if (!project) {
    notFound()
  }

  // Dynamically import the embedded component if it exists
  const EmbeddedComponent = project.isEmbedded
    ? dynamic(() => import(`@/components/${project.embeddedComponent}`), {
        loading: () => (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading component...</p>
          </div>
        ),
      })
    : null

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

      {project.isEmbedded && EmbeddedComponent && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Interactive Demo</h2>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <EmbeddedComponent />
          </div>
        </div>
      )}
    </div>
  )
} 