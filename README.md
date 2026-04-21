# ForexDeals Karachi — Next.js Website

## Setup & Run Karne Ka Tarika

### Step 1 — Node.js Install Karein
Pehle check karein Node.js installed hai ya nahi:
```bash
node -v
```
Agar nahi hai, https://nodejs.org se download karein (LTS version).

---

### Step 2 — Project Folder Open Karein
```bash
cd forexdeals-karachi
```

---

### Step 3 — Dependencies Install Karein
```bash
npm install
```
(Pehli baar thoda time lagega)

---

### Step 4 — Dev Server Chalayein
```bash
npm run dev
```
Browser mein jaayein: **http://localhost:3000**

---

## Project Structure

```
forexdeals-karachi/
├── src/
│   ├── app/
│   │   ├── layout.tsx       ← Root layout + metadata
│   │   ├── page.tsx         ← Main page (sab components yahan)
│   │   └── globals.css      ← Global styles + Tailwind
│   └── components/
│       ├── Navbar.tsx       ← Fixed navigation bar
│       ├── Hero.tsx         ← Landing hero section
│       ├── Signals.tsx      ← Live trading signals
│       ├── Courses.tsx      ← Course pricing cards
│       ├── About.tsx        ← About the institute
│       ├── Contact.tsx      ← Contact form (WhatsApp redirect)
│       └── Footer.tsx       ← Footer
├── tailwind.config.js       ← Custom colors (gold theme)
├── next.config.js
└── package.json
```

---

## Customize Kaise Karein

### WhatsApp Number Change Karein
`src/components/Contact.tsx` mein:
```tsx
// "923000000000" ki jagah apna number likhein
href: 'https://wa.me/923XXXXXXXXX'
```

### Prices Change Karein
`src/components/Courses.tsx` mein `courses` array update karein.

### Signals Update Karein
`src/components/Signals.tsx` mein `signals` array update karein.

---

## Vercel pe Deploy Karna (Free)

```bash
npm install -g vercel
vercel
```
Ya https://vercel.com pe GitHub se connect karein.
