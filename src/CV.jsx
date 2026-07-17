import React from "react";
import {
  Mail, Phone, MapPin, Linkedin, Github, Globe,
  GraduationCap, Briefcase, Code2, Printer,
} from "lucide-react";
import {
  profile, summary, skills, projects,
  experience, education, certifications, languages,
} from "./data.js";

const Section = ({ icon: Icon, title, children }) => (
  <section className="mb-7">
    <div className="flex items-center gap-2 mb-3">
      <Icon size={16} className="text-cv-sidebarSoft" />
      <h2 className="text-[13px] font-bold tracking-[0.12em] uppercase text-cv-sidebar">
        {title}
      </h2>
    </div>
    <div className="h-[2px] w-full bg-gradient-to-r from-cv-accentSoft to-transparent mb-4" />
    {children}
  </section>
);

export default function CV() {
  return (
    <div className="min-h-screen bg-cv-bg flex justify-center p-4 font-body">
      <button
        onClick={() => window.print()}
        className="no-print fixed top-4 right-4 flex items-center gap-2 bg-cv-sidebar text-white text-sm px-4 py-2 rounded-full shadow-lg hover:bg-cv-sidebarSoft transition-colors"
      >
        <Printer size={16} /> Print / Save as PDF
      </button>

      <div
        id="cv-page"
        className="bg-white shadow-xl w-full max-w-[850px] flex text-cv-textDark"
        style={{ minHeight: "1100px" }}
      >
        {/* ---------------- SIDEBAR ---------------- */}
        <aside className="w-[34%] bg-cv-sidebar text-white p-6 flex flex-col">
          <div className="mb-8">
            <h1 className="font-display text-[26px] font-extrabold leading-tight text-white">
              {profile.name}
            </h1>
            <p className="text-[13px] text-cv-accentPale mt-2 leading-snug">
              {profile.title}
            </p>
          </div>

          <div className="mb-8 space-y-3 text-[12px]">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-cv-accentLine shrink-0" />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-cv-accentLine shrink-0" />
              <span className="break-all">{profile.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-cv-accentLine shrink-0" />
              <span>{profile.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin size={14} className="text-cv-accentLine shrink-0" />
              <span className="break-all">{profile.linkedin}</span>
            </div>
            <div className="flex items-center gap-2">
              <Github size={14} className="text-cv-accentLine shrink-0" />
              <span className="break-all">{profile.github}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={14} className="text-cv-accentLine shrink-0" />
              <span className="break-all">{profile.website}</span>
            </div>
            <div className="mt-3 inline-block bg-cv-accent/30 border border-cv-accentLine/50 rounded px-2 py-1 text-[11px] text-cv-accentPale">
              {profile.openTo}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h2 className="text-[12px] font-bold tracking-[0.12em] uppercase text-cv-accentPale mb-3">
              Skills
            </h2>
            <div className="space-y-3">
              {Object.entries(skills).map(([group, items]) => (
                <div key={group}>
                  <p className="text-[11px] font-semibold text-white mb-1">{group}</p>
                  <div className="flex flex-wrap gap-1">
                    {items.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] bg-white/10 border border-white/20 rounded-full px-2 py-[2px] text-cv-accentPale"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="mb-8">
            <h2 className="text-[12px] font-bold tracking-[0.12em] uppercase text-cv-accentPale mb-3">
              Languages
            </h2>
            <div className="space-y-1 text-[12px]">
              {languages.map((l) => (
                <div key={l.name} className="flex justify-between">
                  <span>{l.name}</span>
                  <span className="text-cv-accentLine">{l.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-[12px] font-bold tracking-[0.12em] uppercase text-cv-accentPale mb-3">
              Certifications
            </h2>
            <ul className="text-[11px] space-y-1 list-disc list-inside text-cv-accentPale">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </aside>

        {/* ---------------- MAIN CONTENT ---------------- */}
        <main className="w-[66%] p-7">
          <Section icon={Code2} title="Profile">
            <p className="text-[12.5px] leading-relaxed text-cv-textBody">{summary}</p>
          </Section>

          <Section icon={Briefcase} title="Projects">
            <div className="space-y-4">
              {projects.map((p) => (
                <div key={p.name}>
                  <div className="flex justify-between items-baseline flex-wrap gap-x-2">
                    <h3 className="text-[13px] font-bold text-cv-sidebar">{p.name}</h3>
                    <span className="text-[10.5px] text-cv-sidebarSoft">{p.link}</span>
                  </div>
                  <p className="text-[11px] italic text-cv-sidebarSoft mb-1">{p.tech}</p>
                  <p className="text-[12px] leading-relaxed text-cv-textBody">{p.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section icon={Briefcase} title="Experience">
            <div className="space-y-4">
              {experience.map((e, i) => (
                <div key={i}>
                  <div className="flex justify-between flex-wrap gap-x-2">
                    <h3 className="text-[13px] font-bold text-cv-sidebar">
                      {e.role} — <span className="font-medium">{e.org}</span>
                    </h3>
                    <span className="text-[11px] text-cv-sidebarSoft">{e.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-[12px] text-cv-textBody mt-1 space-y-1">
                    {e.points.map((pt, j) => (
                      <li key={j}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section icon={GraduationCap} title="Education">
            <div className="flex justify-between flex-wrap gap-x-2">
              <h3 className="text-[13px] font-bold text-cv-sidebar">{education.degree}</h3>
              <span className="text-[11px] text-cv-sidebarSoft">{education.period}</span>
            </div>
            <p className="text-[12px] text-cv-textBody">{education.school}</p>
            <p className="text-[11.5px] text-cv-textMuted">{education.gpa}</p>
          </Section>
        </main>
      </div>
    </div>
  );
}
