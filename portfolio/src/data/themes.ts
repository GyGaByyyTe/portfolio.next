export type Theme = {
    name: string
    colors: {
        primary: string
        secondary: string
        background: string
        text: string
        accent: string
    }
    spacing: {
        container: string
        section: string
        button: string
    }
    typography: {
        heading: string
        body: string
    }
    animations: {
        hover: string
        transition: string
    }
    borders: {
        button: string
        card: string
    }
    background: {
        image: string
        overlay: string
    }
}

export const themes: Record<string, Theme> = {
    default: {
        name: 'Default',
        colors: {
            primary: 'bg-blue-600 hover:bg-blue-700',
            secondary: 'bg-gray-100 hover:bg-gray-200',
            background: 'bg-gray-50',
            text: 'text-gray-900',
            accent: 'text-blue-600'
        },
        spacing: {
            container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12',
            section: 'mb-8 sm:mb-12',
            button: 'px-6 py-3'
        },
        typography: {
            heading: 'text-3xl sm:text-4xl font-bold',
            body: 'text-lg sm:text-xl'
        },
        animations: {
            hover: 'hover:shadow-md transition-shadow duration-200',
            transition: 'transition-all duration-200'
        },
        borders: {
            button: 'rounded-md',
            card: 'rounded-lg'
        },
        background: {
            image: '',
            overlay: 'bg-white/80 backdrop-blur-sm'
        }
    },
    calculator: {
        name: 'Calculator',
        colors: {
            primary: 'bg-purple-600 hover:bg-purple-700',
            secondary: 'bg-gray-100 hover:bg-gray-200',
            background: 'bg-gradient-to-br from-purple-50 to-indigo-50',
            text: 'text-gray-900',
            accent: 'text-purple-600'
        },
        spacing: {
            container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16',
            section: 'mb-10 sm:mb-14',
            button: 'px-8 py-4'
        },
        typography: {
            heading: 'text-4xl sm:text-5xl font-bold',
            body: 'text-xl sm:text-2xl'
        },
        animations: {
            hover: 'hover:shadow-lg hover:scale-105 transition-all duration-300',
            transition: 'transition-all duration-300'
        },
        borders: {
            button: 'rounded-xl',
            card: 'rounded-2xl'
        },
        background: {
            image: '/images/projects/calculator-bg.jpg',
            overlay: 'bg-white/90 backdrop-blur-md'
        }
    },
    projectOne: {
        name: 'Project One',
        colors: {
            primary: 'bg-emerald-600 hover:bg-emerald-700',
            secondary: 'bg-gray-100 hover:bg-gray-200',
            background: 'bg-gradient-to-br from-emerald-50 to-teal-50',
            text: 'text-gray-900',
            accent: 'text-emerald-600'
        },
        spacing: {
            container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14',
            section: 'mb-9 sm:mb-12',
            button: 'px-7 py-3.5'
        },
        typography: {
            heading: 'text-3xl sm:text-4xl font-bold',
            body: 'text-lg sm:text-xl'
        },
        animations: {
            hover: 'hover:shadow-md hover:translate-y-[-2px] transition-all duration-200',
            transition: 'transition-all duration-200'
        },
        borders: {
            button: 'rounded-lg',
            card: 'rounded-xl'
        },
        background: {
            image: '/images/projects/project1-bg.jpg',
            overlay: 'bg-white/85 backdrop-blur-sm'
        }
    }
} 