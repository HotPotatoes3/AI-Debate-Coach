
# 🧠 AI Debate Coach

An interactive desktop-first AI application designed to help users practice and improve formal debate skills. Users enter a debate resolution and are guided through structured debate practice, with future support for AI feedback, voice interaction, and real-time observability.

This project is being built with **React + TypeScript**, designed for expansion into **Electron**, **Google Cloud Vertex AI / Gemini**, and **voice-driven interaction**.

---

## 🚀 Current Features

- ✅ Desktop-first UI using React + Vite
- ✅ Resolution-based debate flow
- ✅ Centered, modern UI with support for custom sprites and backgrounds
- ✅ Component-based architecture for rapid iteration
- ✅ Clean separation between UI, logic, and future backend services

---

## 🧱 Tech Stack (Current)

### Frontend
- **React 18**
- **TypeScript**
- **Vite** (fast dev server + bundler)
- **CSS (custom global styling)**

### Architecture
- Component-driven UI
- Single-page application (SPA)
- State managed via React hooks (`useState`)
- Designed for Electron desktop embedding

---

## 📁 Project Structure

```

src/
├── app/
│   ├── App.tsx          # Root application logic
│   └── main.tsx         # React entry point
│
├── components/
│   └── StartScreen.tsx  # Initial UI for entering debate resolution
│
├── styles/
│   └── global.css       # Global styles, layout, background, typography
│
├── public/
│   └── assets/          # Sprites, backgrounds, images (PNG supported)
│
└── index.html           # HTML entry point

````

---

## 🧩 Key Components

### `App.tsx`
- Root application component
- Manages high-level application state:
  - `resolution` (string | null)
- Conditionally renders:
  - `StartScreen` when no resolution is set
  - Debate session view once a resolution is provided

---

### `StartScreen.tsx`
- Initial user interaction screen
- Displays:
  - App title
  - Prompt to enter a debate resolution
- Emits the resolution to the parent component via callback (`onStart`)
- Designed to be extended with:
  - Animated sprite
  - Voice input
  - Mode selection (LD, PF, Policy, etc.)

---

## 🎨 Styling & UI

- All UI elements are centered using Flexbox
- Supports:
  - Custom PNG background (e.g. tech screen aesthetic)
  - Transparent overlay for readability
  - Custom sprites (idle / thinking / speaking states)
- Styles live in `styles/global.css`

---

## 🖥️ Running the Project Locally

### Install dependencies
```bash
npm install
````

### Start development server

```bash
npm run dev
```

Then open:

```
http://localhost:5173
```

---

## 🧭 Planned Features (Roadmap)

### 🤖 AI & ML (Google Cloud)

* Gemini-powered debate feedback
* Argument strength analysis
* Logical fallacy detection
* Rebuttal suggestions
* Topic framing and strategic advice

### 🎙 Voice Interaction

* ElevenLabs voice agent integration
* Fully speech-driven debate sessions
* Real-time transcription and coaching

### 📊 Observability & Monitoring

* Datadog integration
* LLM latency tracking
* Prompt/response health metrics
* Error detection and alerting
* Debug dashboards for AI engineers

### 🖥 Desktop Deployment

* Electron wrapper
* Cross-platform desktop support (Windows / macOS / Linux)

---

## 🧪 Development Philosophy

* Build UI first, backend second
* Fail fast with visible errors
* Modular components for hackathon speed
* Clear observability for AI behavior

---

