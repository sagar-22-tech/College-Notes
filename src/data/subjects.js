// ============================================================
//  SUBJECTS DATA
//  Names, icons, and link-keys for each year.
//  ✏️  To unlock a new year: add subjects to that year's array
//      and make sure the keys match your links/yearX.js file.
//  🚫  Do NOT put Drive links here — use src/links/yearX.js
// ============================================================

import { year1Links } from "../links/year1";
import { year2Links } from "../links/year2";
import { year3Links } from "../links/year3";
import { year4Links } from "../links/year4";

// ── 1st Year ─────────────────────────────────────────────────
// Add subjects here when you're ready to unlock 1st year
export const year1Subjects = [
  // { name: "Subject Name", icon: "📘", key: "subject_key" },
  { name: "Syllabus (PDF)", icon: "📄", key: "syllabus", isSyllabus: true },
];

// ── 2nd Year ─────────────────────────────────────────────────
// Add subjects here when you're ready to unlock 2nd year
export const year2Subjects = [
  // { name: "Subject Name", icon: "📗", key: "subject_key" },
  { name: "Syllabus (PDF)", icon: "📄", key: "syllabus", isSyllabus: true },
];

// ── 3rd Year ─────────────────────────────────────────────────
export const year3Subjects = [
  { name: "Computer Networks", icon: "🌐", key: "computer_networks" },
  { name: "Data Analytics", icon: "📊", key: "data_analytics" },
  { name: "Software Engineering", icon: "⚙️", key: "software_engineering" },
  { name: "Machine Learning Techniques", icon: "🤖", key: "machine_learning" },
  { name: "Idea of Business Models", icon: "💡", key: "business_models" },
  { name: "Indian Traditional Culture & Society", icon: "🏛️", key: "indian_culture" },
  { name: "Big Data", icon: "📊", key: "big_data" },
  { name: "Complier Design", icon: "📟", key: "complier_design" },
  { name: "Artificial Intelligence", icon: "🧠", key: "artificial_intelligence" },
  { name: "ASC", icon: "📐", key: "asc" },
  { name: "COI", icon: "⚖️", key: "coi" },
  { name: "DAA", icon: "🔍", key: "daa" },
  { name: "DBMS", icon: "🗄️", key: "dbms" },
  { name: "PYQ Papers", icon: "📝", key: "pyq_papers" },
  { name: "Quantum", icon: "⚛️", key: "quantum" },
  { name: "WebD", icon: "🕸️", key: "webd" },
  { name: "Syllabus (PDF)", icon: "📄", key: "syllabus", isSyllabus: true },
];

// ── 4th Year ─────────────────────────────────────────────────
// Add subjects here when you're ready to unlock 4th year
export const year4Subjects = [
  // { name: "Subject Name", icon: "🏆", key: "subject_key" },
  { name: "Syllabus (PDF)", icon: "📄", key: "syllabus", isSyllabus: true },
];

// ── Year config (controls what's shown + active/locked) ──────
// To unlock a year: change  active: false  →  active: true
export const YEARS_CONFIG = [
  { label: "1st Year", value: 1, emoji: "🌱", active: false, subjects: year1Subjects, links: year1Links },
  { label: "2nd Year", value: 2, emoji: "📗", active: false, subjects: year2Subjects, links: year2Links },
  { label: "3rd Year", value: 3, emoji: "🎓", active: true, subjects: year3Subjects, links: year3Links },
  { label: "4th Year", value: 4, emoji: "🏆", active: false, subjects: year4Subjects, links: year4Links },
];

// ── Sections (same for all years) ────────────────────────────
export const SECTIONS = [
  { key: "college_notes", label: "College Notes", icon: "🏫", desc: "Official college provided notes" },
  { key: "notes", label: "Notes", icon: "📓", desc: "Handwritten & curated notes" },
  { key: "assignment", label: "Assignment", icon: "📋", desc: "Assignment sheets & solutions" },
];

export const UNITS = [1, 2, 3, 4, 5];
