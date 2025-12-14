# Neon Full-Stack Monorepo

This repository contains a scaffold for a full-stack Next.js (TypeScript) frontend and an Express (TypeScript) backend in a monorepo layout using npm workspaces.

Structure:
- packages/frontend — Next.js app with TailwindCSS, Framer Motion, Storybook, Jest, Tailwind Neon design tokens, PWA manifest, and components
- packages/backend — Express server with TypeScript, Prisma, JWT auth, Socket.io, migrations, and seed script

Setup:
1. Install dependencies at the root: `npm install`
2. Start dev: `npm run dev`
3. Visit the frontend at http://localhost:3000 and backend at http://localhost:4000

Deploy:
- Frontend: Use Vercel (or any Next.js host). The frontend includes a vercel.json and PWA manifest.
- Backend: Use Railway, Heroku, or Docker. Dockerfile and Procfile are included.

CI: see .github/workflows/ci.yml for a sample workflow.
