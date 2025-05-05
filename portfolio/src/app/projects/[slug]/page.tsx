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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Link
        href="/projects"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 sm:mb-8"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to Projects
      </Link>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="relative h-48 sm:h-64 md:h-[400px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {project.title}
          </h1>
          
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

          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            {project.longDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              View on GitHub
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live Demo
            </a>
          </div>
        </div>
      </div>

      {project.isEmbedded && EmbeddedComponent && (
        <div className="mt-8 sm:mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Interactive Demo
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
            <EmbeddedComponent />
          </div>
        </div>
      )}
    </div>
  )
} 