'use client';

import Image from 'next/image'
import Link from 'next/link'
import Timer from '@/components/Timer'

export default function TimerProject() {
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
            src="/images/projects/timer.jpg"
            alt="Timer Project"
            fill
            className="object-contain"
          />
        </div>

        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Interactive Timer</h1>

          <div className="flex flex-wrap gap-2 mb-6">
            {['React', 'TypeScript', 'Tailwind CSS'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-xl text-gray-600 mb-8">
            A modern timer built with React and TypeScript. Features include precise time input,
            countdown functionality, and a clean, responsive design. This project demonstrates
            state management, animations, and component composition in React.
          </p>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Try it out!</h2>
            <Timer />
          </div>
        </div>
      </div>
    </div>
  )
} 