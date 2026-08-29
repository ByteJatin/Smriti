# Smriti

**Cognitive care that feels like home.**

Smriti is an AI-powered memory-gaming and reminder companion for elderly dementia
patients across the North Eastern Region of India — built to speak their language,
work without the internet, and never feel foreign.

Built for **Smart India Hackathon 2026** · Problem Statement **26003** ·
Ministry of Development of North Eastern Region (MDoNER)

---

## The problem

Dementia is rising among NER's elderly population, but the region's remote,
hilly terrain limits access to neurologists, cognitive therapists, and
long-term elder care. Existing cognitive-training apps (Lumosity, BrainHQ, etc.)
don't support Indian regional languages, assume stable internet, and use
generic content that feels culturally foreign to elderly users here.

## Our solution

One app, three parts:

- **Play & Learn** — adaptive memory, attention, and recall games themed
  around local life (tea gardens, festivals, folk motifs)
- **Gentle Reminders** — medicine, hydration, meals, and family calls,
  spoken aloud
- **Caregiver View** — a simple weekly dashboard so family members can check
  in remotely, with early alerts if something changes

## What makes it different

| | Existing apps | Smriti |
|---|---|---|
| Language | English/global only | Regional NER languages, voice-first |
| Connectivity | Requires stable internet | Offline-first, syncs when reconnected |
| Content | Generic global themes | Local festivals, food, folk motifs |
| Scope | Games only | Games + reminders + caregiver view, in one app |
| Difficulty | Fixed levels | Adapts to reaction time & accuracy each session |

## Tech stack

- **Frontend:** React (Vite), PWA-ready
- **Backend:** Node.js + Express, PostgreSQL
- **Voice:** AI4Bharat / cloud STT-TTS for regional language support
- **Offline sync:** IndexedDB with queued sync on reconnect
- **Notifications:** Firebase Cloud Messaging

## Project structure

\`\`\`
smriti/
├── frontend/        # React app — patient & caregiver screens
├── backend/         # API server, database, adaptive scoring logic
└── docs/            # Pitch deck, diagrams, research notes
\`\`\`

## Getting started

### Frontend
\`\`\`bash
cd frontend
npm install
npm run dev
\`\`\`

### Backend
\`\`\`bash
cd backend
npm install
npm run dev
\`\`\`

## Team

**Team Smriti** — [Your Institution Name]

| Name | Role |
|---|---|
| — | Frontend |
| — | Backend |
| — | Voice & Offline Integration |
| — | Research & Content |
| — | UI/UX Design & Testing |
| — | Pitch, Docs & Presentation |

## Beyond dementia

The core engine — adaptive games, reminders, offline voice UI, caregiver
monitoring — isn't dementia-specific. The same approach extends to Parkinson's
and stroke rehab, Mild Cognitive Impairment, post-surgery cognitive recovery,
and general elderly wellness in low-connectivity communities.

---

*Built for Smart India Hackathon 2026.*
