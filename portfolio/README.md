# Frontend Developer Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Modern, responsive design
- Project showcase with embedded demos
- Experience timeline
- Downloadable CV
- Built-in interactive projects

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
│   │   ├── experience/ # Experience page
│   │   ├── projects/   # Projects pages
│   │   └── layout.tsx  # Root layout
│   └── data/           # Data files
│       └── projects.ts # Project data
```

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create the following directories in `public/images/`:
   - `profile/` - Add your profile picture as `profile.jpg`
   - `projects/` - Add project screenshots as `project1.jpg`, `project2.jpg`, etc.
4. Add your CV file as `public/cv.pdf`
5. Update the project data in `src/data/projects.ts`
6. Run the development server:
   ```bash
   npm run dev
   ```

## Customization

1. Update personal information in `src/app/layout.tsx`
2. Modify project data in `src/data/projects.ts`
3. Add your own embedded projects in the `src/app/projects/[slug]` directory
4. Customize styles in `src/app/globals.css`

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- React
- ESLint
- Prettier

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
