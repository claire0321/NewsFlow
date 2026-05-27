# NewsFlow

NewsFlow is a news aggregator app built with Next.js. It provides users with the latest news from various sources in one place.

## Features

- Global News Feed
- Real-time NewsAPI integration
- Interactive news cards with hover effects
- Responsive design
- Fast loading with Next.js App Router
- Secure API key handling through server-side routes

---

## Tech Stack

### Frontend

- Next.js 15
- React
- TypeScript
- Tailwind CSS
- tailwind-styled-components

### Backend

- Next.js Route Handlers

### External APIs

- NewsAPI

---

## Project Structure

```txt
app
├── api
│   └── news
│       └── route.ts
│
│
├── components
│   └── news
│       ├── NewsCard.tsx
│       └── Tabs.tsx
│
├── globals.css
├── layout.tsx
└── page.tsx


public
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd newsflow
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root:

```env
NEWS_API_KEY=YOUR_NEWS_API_KEY
```

Get your API key from:

https://newsapi.org

### 4. Start the Development Server

```bash
npm run dev
```

Open your browser and navigate to:

```txt
http://localhost:3000
```

---

## Application Flow

```txt
User
  ↓
NewsFlow UI
  ↓
/api/news
  ↓
Next.js Route Handler
  ↓
NewsAPI
  ↓
News Data
  ↓
News Cards
```

---

## News Card Design

Each news card displays:

- Featured image
- Headline
- Description
- Source
- Publication date

Additional content is revealed through hover interactions for a more engaging reading experience.

---

## Security

API keys are never exposed to the client.

All requests are routed through Next.js Route Handlers:

```txt
Client
  ↓
Next.js API Route
  ↓
NewsAPI
```

This keeps sensitive credentials secure and allows future enhancements such as caching and request throttling.

---

## Future Enhancements

- Search functionality
- Category filtering
- Bookmarking articles
- Dark mode
- Push notifications
- Chrome Extension support
- Infinite scrolling
- AI-powered news summaries
- User personalization

---

## Author

**Inkyeong Kim**

Built as a personal project to explore modern web development with Next.js, TypeScript, and API integrations.

## Deploy on Vercel

[news-flow-seven.vercel.app](https://news-flow-seven.vercel.app)
