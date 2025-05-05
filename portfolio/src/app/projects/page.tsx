import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/data/projects'

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(projects).map(([slug, project]) => (
          <Link
            key={slug}
            href={`/projects/${slug}`}
            className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
            <div className="relative h-48 sm:h-56 md:h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                {project.title}
              </h2>
              
              <p className="text-gray-600 mb-4 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 