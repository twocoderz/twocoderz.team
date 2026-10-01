# twocoderz.team

> The official website of the twocoderz team.

The twocoderz team website is a modern, responsive front-end built to present the team, its identity, projects, and online presence in a polished web experience.

🌐 **Live website:** [twocoderz-team.vercel.app](https://twocoderz-team.vercel.app/)

## Features

- Responsive layout for desktop, tablet, and mobile screens
- Team-focused landing page and presentation sections
- Smooth animations and transitions powered by Framer Motion
- Client-side navigation with React Router
- Reusable React components and utility classes
- Tailwind CSS styling with class merging support
- Vercel Analytics integration
- Type-safe development with TypeScript

## Tech stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://motion.dev/)
- [Vercel Analytics](https://vercel.com/analytics)
- [ESLint](https://eslint.org/)

## Requirements

- Node.js 20 or a compatible current release
- npm

Check your local installation with:

```bash
node --version
npm --version
```

## Getting started

1. Clone the repository:

   ```bash
   git clone https://github.com/twocoderz/twocoderz.team.git
   cd twocoderz.team
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL displayed by Vite in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check the project and create a production build |
| `npm run lint` | Run ESLint across the project |
| `npm run preview` | Preview the production build locally |

## Project structure

```text
src/
├── assets/       # Images, icons, and other imported assets
├── components/   # Reusable interface components
├── pages/        # Route-level pages
├── App.tsx       # Main application component
└── main.tsx      # Application entry point

public/            # Static files served as-is
```

The exact structure may evolve as new pages and components are added. Keep shared UI in reusable components and place route-specific behavior with its corresponding page.

## Production build

Create a production build with:

```bash
npm run build
```

Preview the generated build locally with:

```bash
npm run preview
```

The project can be deployed to Vercel or another static hosting provider that supports Vite applications. Configure the deployment to run `npm run build` and publish the generated `dist` directory.

## Contributing

1. Create a feature branch from the default branch.
2. Keep changes focused and maintain the existing visual language.
3. Use TypeScript for new application code.
4. Run `npm run lint` and `npm run build` before opening a pull request.
5. Include screenshots or a short description when changing the user interface.

## License

No license has been specified for this repository yet.

**Last updated:** October 1, 2026
