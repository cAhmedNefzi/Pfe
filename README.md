# PFE Copilot

AI workspace for PFE/PFA students: idea validation, research, planning, reporting and defense preparation.

## MVP

- Premium responsive Next.js dashboard
- Project creation flow
- Six PFE/PFA-specific AI tool surfaces
- Secure server-side AI endpoint scaffold
- Vercel-ready configuration
- Environment variable template

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## AI integration

Set `AI_GATEWAY_API_KEY` in the server environment. The `/api/generate` route is intentionally isolated so provider credentials never reach the browser.

## Deployment

The project is configured for Vercel and connected to the `cAhmedNefzi/Pfe` GitHub repository. Pushes to `main` trigger production deployments.

## Roadmap

1. Persist projects with Postgres
2. Add authentication
3. Connect Vercel AI Gateway and streaming responses
4. Add report/document ingestion and citations
5. Add supervisor workspaces
6. Add billing and university plans
