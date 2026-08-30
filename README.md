# Smriti

**Cognitive care that feels like home.**

Smriti is an AI-powered memory gaming and reminder companion mobile app for elderly dementia patients across the North Eastern Region of India. It is built to speak their language, work completely offline, and never feel foreign.

Built for **Smart India Hackathon 2026** · Problem Statement **26003** · Ministry of Development of North Eastern Region (MDoNER)

---

## The Problem

Dementia is rising among NER's elderly population, but the region's remote, hilly terrain limits access to neurologists, cognitive therapists, and long-term elder care. Existing web tools or cognitive training apps (Lumosity, BrainHQ, etc.) don't support Indian regional languages, assume stable internet, and use generic content that feels culturally foreign to elderly users here. Furthermore, web apps are difficult for elderly users to navigate compared to a dedicated mobile app.

## Our Solution

One seamless mobile app with three integrated ecosystems:

- **Play & Learn (Patient View)** - Adaptive memory, attention, and recall games themed around local life (tea gardens, festivals, folk motifs) optimized for touch-based mobile interactions.
- **Gentle Reminders (Voice-First)** - Medicine, hydration, meals, and family calls, spoken aloud using native mobile text-to-speech engines.
- **Caregiver Dashboard** - A dedicated portal within the app (or via a linked view) allowing family members to track cognitive health trends, view game metrics, and receive early alerts if behavioral patterns shift.

## What Makes it Different

| Feature | Existing Apps | Smriti Mobile App |
|---|---|---|
| **Form Factor** | Primarily Web/Desktop | **Native Mobile App** (accessible, large tap targets) |
| **Language** | English / Global only | **Regional NER languages**, Voice-first UI |
| **Connectivity**| Requires stable internet | **Offline-first architecture** via local mobile storage |
| **Content** | Generic global themes | Local festivals, regional foods, folk motifs |
| **Scope** | Brain games only | **Games + Reminders + Caregiver Monitoring** in one app |
| **Difficulty** | Fixed/Linear levels | **Dynamically adapts** to device-tracked reaction times |

## Tech Stack

- **Mobile Frontend:** React Native with Expo (Cross-platform iOS & Android)
- **Backend API:** Node.js + Express (Hosted in the cloud for caregiver data sync)
- **Local Database (Offline):** SQLite / WatermelonDB (On-device storage for seamless offline gameplay)
- **Cloud Database:** PostgreSQL (Centralized storage for syncing caregiver analytics)
- **Voice UI:** AI4Bharat integration / Native Mobile Text-to-Speech (TTS) & Speech-to-Text (STT)
- **Push Notifications:** Expo Notifications / Firebase Cloud Messaging (FCM) for medication alerts

## Project Structure

