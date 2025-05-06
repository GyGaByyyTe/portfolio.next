import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Hi, I'm <span className="text-blue-600">Andrei Lebedev</span>
          </h1>
          <p className="text-xl text-gray-600">
            A passionate Frontend Developer with expertise in modern web technologies.
            I create beautiful, responsive, and user-friendly web applications.
          </p>
          <div className="flex space-x-4">
            <Link 
              href="/experience"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              View Experience
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              See Projects
            </Link>
          </div>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://i.pravatar.cc/400?u=gygabyyyyyte"
            alt="Profile picture"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="mt-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills & Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((skill) => (
            <div
              key={skill}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
