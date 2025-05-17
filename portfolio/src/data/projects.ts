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
    title: 'Interactive Timer',
    description: 'A modern timer built with React and TypeScript.',
    longDescription: 'A modern timer built with React and TypeScript. Features include precise time input, countdown functionality, and a clean, responsive design. This project demonstrates state management, animations, and component composition in React.',
    image: '/images/projects/timer.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/GyGaByyyTe/portfolio.next/tree/main/portfolio/src/app/projects/timer',
    liveUrl: '/projects/timer',
    isEmbedded: true,
    embeddedComponent: 'Timer'
  },
  'next.food': {
    title: 'Food Platform',
    description: 'A platform for food enthusiasts to share recipes, discover new dishes, and connect with other food lovers.',
    longDescription: 'A web application that allows users to:\n' +
        '\n' +
        'Share their favorite recipes with the world\n' +
        'Discover new dishes from other food enthusiasts\n' +
        'Connect with like-minded people in the food community\n' +
        'Participate in exclusive food-related events',
    image: '/images/projects/food.jpg',
    technologies: ['React 18', 'Next.js 15', 'TypeScript', 'SQLite3', 'CSS Modules', 'Jest', 'React Testing Library'],
    githubUrl: 'https://github.com/GyGaByyyTe/next.level.food',
    liveUrl: 'http://food.does.cool',
    isEmbedded: false,
  },
  'amazon': {
    title: 'Extension: Amazon Quick Access',
    description: 'A Chrome extension that allows quick searching of selected text across various regional Amazon websites.',
    longDescription: 'This Chrome extension provides a convenient way to search for products on Amazon using either the popup interface or context menu. It supports multiple regional domains and offers a user-friendly interface for quick access to Amazon search functionality.',
    image: '/images/projects/amazon.jpg',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Chrome Extension API', 'Manifest_v3'],
    githubUrl: 'https://github.com/GyGaByyyTe/amazon-quick-access',
    liveUrl: 'https://chromewebstore.google.com/detail/amazon-quick-access/hdjbgcfphpnbbndnnkplclkfjaedmhbe',
    isEmbedded: false
  }
} 