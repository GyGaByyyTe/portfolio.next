# Frontend Developer Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio is configured for static site generation, making it easy to deploy on any static hosting service.

## Features

- Modern, responsive design with dynamic themes
- Project showcase with embedded interactive demos
- Static site generation for optimal performance
- Dynamic project pages with custom themes
- Built-in interactive projects (e.g., Calculator)
- Optimized images with Next.js Image component

## Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── profile/     # Profile pictures
│   │   └── projects/    # Project screenshots and previews
│   └── cv.pdf          # Your CV file
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── projects/   # Projects pages
│   │   │   ├── [slug]/ # Dynamic project pages
│   │   │   └── page.tsx # Projects listing
│   │   └── layout.tsx  # Root layout
│   ├── components/     # React components
│   │   └── Calculator/ # Interactive calculator demo
│   └── data/          # Data files
│       ├── projects.ts # Project data
│       └── themes.ts   # Project-specific themes
```

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create the following directories in `public/images/`:
   - `profile/` - Add your profile picture
   - `projects/` - Add project screenshots
4. Add your CV file as `public/cv.pdf`
5. Update the project data in `src/data/projects.ts`
6. Run the development server:
   ```bash
   npm run dev
   ```
7. Build for production:
   ```bash
   npm run build
   ```

## Customization

1. Update project data in `src/data/projects.ts`
2. Customize themes in `src/data/themes.ts`
3. Add new embedded projects:
   - Create component in `src/components/`
   - Add project data in `src/data/projects.ts`
   - Add theme in `src/data/themes.ts`
4. Customize styles in `src/app/globals.css`

## Technologies Used

- Next.js 15 (Static Export)
- TypeScript
- Tailwind CSS
- React
- ESLint
- Prettier

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run start
```

## Deployment

This project is configured for static site generation (`output: 'export'` in `next.config.ts`), making it compatible with any static hosting service:

- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any static file server

## License

MIT

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
