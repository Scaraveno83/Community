# Neon Backend

This package contains the Node.js Express backend for Neon.

Quick start:
1. Copy `.env.example` to `.env` and update values
2. Install dependencies: `npm install`
3. Run Prisma migrations: `npx prisma migrate dev --name init`
4. Seed the database: `npm run seed`
5. Start dev server: `npm run dev`

Notes:
- This backend uses `bcryptjs` in place of the native `bcrypt` library to avoid native build issues on some CI platforms.
- During CI builds, tests are excluded from TypeScript compilation to avoid dev-only type dependencies causing build failures. If you want CI to run tests, ensure devDependencies are installed during CI.
