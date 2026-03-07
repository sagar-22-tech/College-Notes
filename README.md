# 📚 NoteVault — College Notes Portal

A clean, fast React app for organizing college notes by year, subject, section, and unit.
Built by **Sagar Saini** — [github.com/sagar-22-tech](https://github.com/sagar-22-tech)

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open in browser
# → http://localhost:5173
```

---

## 📁 Project Structure

```
src/
├── links/
│   ├── year1.js        ← 1st Year Drive links  (edit when ready)
│   ├── year2.js        ← 2nd Year Drive links  (edit when ready)
│   ├── year3.js        ← 3rd Year Drive links  ✏️ EDIT THIS NOW
│   └── year4.js        ← 4th Year Drive links  (edit when ready)
│
├── data/
│   └── subjects.js     ← Subject names, icons, year config
│
├── components/
│   ├── Navbar.jsx
│   ├── Breadcrumb.jsx
│   ├── Footer.jsx
│   └── PreviewModal.jsx
│
├── pages/
│   ├── HomePage.jsx
│   ├── YearsPage.jsx
│   ├── ComingSoonPage.jsx
│   ├── SubjectsPage.jsx
│   ├── SectionsPage.jsx
│   ├── UnitsPage.jsx
│   └── SyllabusPage.jsx
│
├── styles/
│   ├── theme.css       ← CSS variables (dark/light)
│   └── app.css         ← All component styles
│
├── App.jsx             ← Navigation logic
└── main.jsx            ← Entry point
```

---

## ✏️ Adding Links (Day-to-Day Use)

Open `src/links/year3.js` and paste your Google Drive links:

```js
computer_networks: {
  college_notes: {
    unit1: "https://drive.google.com/file/d/YOUR_ID/view",
    unit2: "https://drive.google.com/file/d/YOUR_ID/view",
    // ...
  },
  // ...
},
```

> ⚠️ Make sure sharing is set to **"Anyone with the link"** in Google Drive.

---

## 🔓 Unlocking a New Year

**Step 1** — Open `src/data/subjects.js` and set `active: true` for that year:

```js
{ label: "2nd Year", value: 2, emoji: "📗", active: true, ... },
```

**Step 2** — Add subjects for that year in the same file:

```js
export const year2Subjects = [
  { name: "Your Subject", icon: "📘", key: "your_subject_key" },
  // ...
  { name: "Syllabus (PDF)", icon: "📄", key: "syllabus", isSyllabus: true },
];
```

**Step 3** — Open `src/links/year2.js` and add matching keys with links.

---

## 🏗️ Build for Production

```bash
npm run build
# Output goes to /dist — deploy to GitHub Pages, Vercel, Netlify, etc.
```
