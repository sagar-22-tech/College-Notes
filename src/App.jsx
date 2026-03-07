import { useState, useEffect } from "react";
import { YEARS_CONFIG } from "./data/subjects";

import Navbar        from "./components/Navbar";
import Breadcrumb    from "./components/Breadcrumb";
import Footer        from "./components/Footer";
import PreviewModal  from "./components/PreviewModal";

import HomePage      from "./pages/HomePage";
import YearsPage     from "./pages/YearsPage";
import ComingSoonPage from "./pages/ComingSoonPage";
import SubjectsPage  from "./pages/SubjectsPage";
import SectionsPage  from "./pages/SectionsPage";
import UnitsPage     from "./pages/UnitsPage";
import SyllabusPage  from "./pages/SyllabusPage";

import "./styles/theme.css";
import "./styles/app.css";

// ─── NAVIGATION STACK ────────────────────────────────────────────────────────
// Each entry: { page: string, payload?: any }
// Pages: home | yearSelect | comingsoon | subjects | sections | units | syllabus

export default function App() {
  const [stack,   setStack]   = useState([{ page: "home" }]);
  const [isDark,  setIsDark]  = useState(true);
  const [modal,   setModal]   = useState(null);   // { subject, section, unit }

  const current = stack[stack.length - 1];

  const push = (entry) => setStack((s) => [...s, entry]);
  const goTo = (index) => setStack((s) => s.slice(0, index + 1));

  // Build breadcrumb labels from the stack
  const crumbs = stack.map((e) => {
    if (e.page === "home")       return "Home";
    if (e.page === "yearSelect") return "Select Year";
    if (e.page === "comingsoon") return e.payload?.yearConfig?.label || "Coming Soon";
    if (e.page === "subjects")   return e.payload?.yearConfig?.label || "Subjects";
    if (e.page === "sections")   return e.payload?.subject?.name || "Subject";
    if (e.page === "units")      return e.payload?.section?.label || "Section";
    if (e.page === "syllabus")   return "Syllabus";
    return "";
  });

  const handleSelectYear = (yearConfig) => {
    if (yearConfig.active) {
      push({ page: "subjects", payload: { yearConfig } });
    } else {
      push({ page: "comingsoon", payload: { yearConfig } });
    }
  };

  const handleSelectSubject = (subject, yearConfig) => {
    if (subject.isSyllabus) {
      push({ page: "syllabus", payload: { yearConfig } });
    } else {
      push({ page: "sections", payload: { subject, yearConfig } });
    }
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modal]);

  return (
    <div className={isDark ? "dark-root" : "light-root"}>
      <div className="root-wrap">
        <div className="bg-layer" />
        <div className="page">

          <Navbar
            crumbs={crumbs}
            isDark={isDark}
            onToggle={() => setIsDark((d) => !d)}
            onCrumbClick={goTo}
          />

          {current.page !== "home" && current.page !== "yearSelect" && (
            <Breadcrumb crumbs={crumbs} onCrumbClick={goTo} />
          )}

          {current.page === "home" && (
            <HomePage onBrowse={() => push({ page: "yearSelect" })} />
          )}

          {current.page === "yearSelect" && (
            <YearsPage onSelectYear={handleSelectYear} />
          )}

          {current.page === "comingsoon" && (
            <ComingSoonPage yearLabel={current.payload?.yearConfig?.label} />
          )}

          {current.page === "subjects" && (
            <SubjectsPage
              yearConfig={current.payload.yearConfig}
              onSelectSubject={(s) => handleSelectSubject(s, current.payload.yearConfig)}
            />
          )}

          {current.page === "sections" && (
            <SectionsPage
              subject={current.payload.subject}
              yearLabel={current.payload.yearConfig?.label}
              onSelectSection={(sec) =>
                push({
                  page: "units",
                  payload: {
                    subject:    current.payload.subject,
                    section:    sec,
                    yearConfig: current.payload.yearConfig,
                  },
                })
              }
            />
          )}

          {current.page === "units" && (
            <UnitsPage
              subject={current.payload.subject}
              section={current.payload.section}
              yearLinks={current.payload.yearConfig?.links}
              onNoLink={setModal}
            />
          )}

          {current.page === "syllabus" && (
            <SyllabusPage yearConfig={current.payload.yearConfig} />
          )}

        </div>

        {modal && <PreviewModal data={modal} onClose={() => setModal(null)} />}
      </div>

      <Footer />
    </div>
  );
}
