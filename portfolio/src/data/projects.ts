export type BaseProject = {
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  isEmbedded: boolean
}

export type RegularProject = BaseProject & {
  isEmbedded: false
}

export type EmbeddedProject = BaseProject & {
  isEmbedded: true
  embeddedComponent: string
}

export type Project = RegularProject | EmbeddedProject

export const projects: Record<string, Project> = {
  'calculator': {
    title: 'Interactive Calculator',
    description: 'A modern calculator built with React and TypeScript.',
    longDescription: 'A modern calculator built with React and TypeScript. Features include basic arithmetic operations, clear functionality, and a clean, responsive design. This project demonstrates state management, event handling, and component composition in React.',
    image: '/images/projects/calculator.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/calculator',
    liveUrl: '/projects/calculator',
    isEmbedded: true,
    embeddedComponent: 'Calculator'
  },
  'project-one': {
    title: 'Portfolio',
    description: 'A modern web application built with Next.js and TypeScript.',
    longDescription: 'Detailed description of the project, its features, and technologies used. This project demonstrates advanced state management, responsive design, and modern web development practices.',
    image: '/images/projects/project1.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/GyGaByyyTe/portfolio.next',
    liveUrl: 'https://andrei.does.cool/projects/project-one',
    isEmbedded: false
  },
  'timer': {
    title: 'Time Bomb',
    description: 'A time bomb that counts down to zero and explodes when it reaches zero.',
    longDescription: 'A time bomb that counts down to zero and explodes when it reaches zero.',
    image: '/images/projects/timer.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/time-bomb',
    liveUrl: 'https://andrei.does.cool/projects/timer',
    isEmbedded: true,
    embeddedComponent: 'BombTimer'
  },
  'project-two': {
    title: 'Project Two',
    description: 'Interactive dashboard with real-time data visualization.',
    longDescription: 'A comprehensive dashboard that displays real-time data with interactive charts and graphs. Features include data filtering, custom visualizations, and real-time updates.',
    image: '/images/projects/project2.jpg',
    technologies: ['React', 'D3.js', 'Node.js'],
    githubUrl: 'https://github.com/yourusername/project-two',
    liveUrl: 'https://project-two.com',
    isEmbedded: false,
    // embeddedComponent: 'ProjectTwoDashboard'
  },
  'project-three': {
    title: 'Project Three',
    description: 'E-commerce platform with modern UI/UX design.',
    longDescription: 'A full-featured e-commerce platform with product management, shopping cart, and secure payment processing. Built with modern web technologies and best practices.',
    image: '/images/projects/project3.jpg',
    technologies: ['Next.js', 'Stripe', 'MongoDB'],
    githubUrl: 'https://github.com/yourusername/project-three',
    liveUrl: 'https://project-three.com',
    isEmbedded: false
  }
} 