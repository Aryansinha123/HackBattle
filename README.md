# SkillUp - Exercises Backend Integration

## Prerequisites
- Node.js 18+
- MongoDB connection string
- Judge0 CE (or RapidAPI Judge0) endpoint for server code execution (optional)

## Environment Variables
Create `.env.local` in the project root:

```
MONGODB_URI=mongodb+srv://<user>:<pass>@<cluster>/<db>?retryWrites=true&w=majority
# Base URL for server-side fetches (include protocol). For local dev:
NEXT_PUBLIC_BASE_URL=http://localhost:3000
# Judge0 configuration (optional, needed for server execution)
JUDGE0_URL=https://judge0-ce.p.rapidapi.com
JUDGE0_KEY=your_rapidapi_key_optional
```

If running a local Judge0 CE, set `JUDGE0_URL` to your instance (e.g. `http://localhost:2358`).

## Install & Seed
```
npm install
node scripts/seed.js
```

## Run Dev Server
```
npm run dev
```

## Navigation Flow
- Sidebar → Exercises by Topic → `'/domains'`
- Domain list → `'/domains/:domain'`
- Exercise detail → `'/domains/:domain/:slug'`

## APIs
- `GET /api/domains` → list domains
- `GET /api/domains/:id` → get domain
- `GET /api/domains/:id/exercises` → list exercises in a domain
- `GET /api/exercises/:domain/:slug` → get exercise details
- `POST /api/run` → run code via Judge0

Body example for `/api/run`:
```
{
  "language": "javascript",
  "source": "function solve(input){return input}\nmodule.exports={solve};",
  "input": "hello"
}
```

## Sourcing Problems
You can extend the seed with curated datasets or import from your own CSV/JSON. Public sources like LeetCode/Codeforces terms restrict direct scraping/embedding; prefer your own authored problems or open datasets (e.g., Kattis open problems metadata only, not statements). This repo uses local sample problems to avoid licensing issues.
