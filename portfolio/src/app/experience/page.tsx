import Link from 'next/link'

const experiences = [
  {
    company: 'Trialize, Switzerland',
    position: 'Senior Frontend Developer',
    period: 'Feb 2021 - Present',
    description: 'Designed and developed a large-scale EDC SaaS platform from scratch, including real-time features using WebSockets, and complex UI components like virtualized tables and dashboards. Established CI/CD pipelines and optimized build systems.',
    technologies: ['ReactJS', 'TypeScript', 'Redux', 'WebSockets', 'Material UI', 'Webpack', 'Bitbucket CI/CD', 'GitLab CI/CD', 'Figma']
  },
  {
    company: 'Sberbank, Saint Petersburg',
    position: 'Senior Frontend Developer',
    period: 'Oct 2019 - Feb 2021',
    description: 'Led frontend development of a new IoT service with real-time dashboards. Created a custom BPMN editor and integrated Spring REST APIs for optimized performance.',
    technologies: ['React', 'TypeScript', 'Redux', 'Redux-Saga', 'StompJS', 'REST API', 'bpmn-js']
  },
  {
    company: 'KudaGo, Saint Petersburg',
    position: 'Frontend Developer',
    period: 'Feb 2019 - Sep 2019',
    description: 'Enhanced a content delivery platform, built an admin system, and contributed to backend tasks in Python (Django).',
    technologies: ['JavaScript', 'React', 'Redux', 'Redux-Saga', 'Python (Django)', 'Google Tag Manager', 'Google Optimize']
  },
  {
    company: 'Dataduck, Saint Petersburg',
    position: 'Frontend Developer',
    period: 'May 2018 - Feb 2019',
    description: 'Built interactive landing pages and mini-games, and developed a landing page template engine.',
    technologies: ['JavaScript', 'React', 'Redux', 'PHP', 'HTML5', 'CSS3']
  }
];


export default function Experience() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Work Experience</h1>
        <a
          href="/cv.pdf"
          download
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Download CV
        </a>
      </div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-blue-600">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600" />
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                  <p className="text-lg text-gray-600">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-500">{exp.period}</span>
              </div>
              <p className="mt-4 text-gray-600">{exp.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 