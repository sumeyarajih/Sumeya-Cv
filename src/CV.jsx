import React, { useState, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Globe,
  GraduationCap,
  Briefcase,
  Code2,
  Award,
  Users,
  BookOpen,
  Printer,
  User,
  Upload,
  Download,
} from "lucide-react";
import {
  profile,
  summary,
  skills,
  experience,
  education,
  certifications,
  languages,
  // achievements,
  // leadership,
  // additionalInfo,
  // references,
} from "./data.js";

/* ─────────────────────────────── helpers ─────────────────────────────── */

/** Sidebar section heading */
const SideHeading = ({ children }) => (
  <h2 className="text-[11px] font-bold tracking-[0.14em] uppercase text-orange-200 mb-2 mt-1">
    {children}
  </h2>
);

/** Pink sidebar divider */
const Divider = () => (
  <div className="h-[1.5px] w-full bg-gradient-to-r from-orange-300/60 to-transparent mb-3" />
);

/** Main-area section with icon + title */
const Section = ({ icon: Icon, title, children }) => (
  <section className="mb-5">
    <div className="flex items-center gap-2 mb-1">
      <Icon size={14} className="text-orange-500 shrink-0" />
      <h2 className="text-[11.5px] font-bold tracking-[0.12em] uppercase text-orange-700">
        {title}
      </h2>
    </div>
    <div className="h-[2px] w-full bg-gradient-to-r from-orange-300 to-transparent mb-2.5" />
    {children}
  </section>
);

/* ─────────────────────────────── component ─────────────────────────────── */

export default function CV() {
  // ── State for uploaded profile photo
  const [photoUrl, setPhotoUrl] = useState(null);
  const fileInputRef = useRef(null);
  const cvRef = useRef(null);

  // ── Handle photo file selection
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPhotoUrl(url);
  };

  // ── Handle PDF download via html2pdf.js (dynamic import)
  const handleDownloadPdf = async () => {
    const html2pdf = (await import("html2pdf.js")).default;
    const element = cvRef.current;
    const opt = {
      margin: 0,
      filename: "Sumeya_Rajih_CV.pdf",
      image: { type: "jpeg", quality: 0.98 },
      // scale:2 for sharp text; scrollY:0 prevents offset bugs
      html2canvas: { scale: 2, useCORS: true, scrollY: 0, logging: false },
      // A4 in mm — html2pdf auto-fits content height, no blank padding
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="min-h-screen bg-orange-50 flex justify-center py-8 px-4 font-body">

      {/* ── Action Buttons (no-print) ── */}
      <div className="no-print fixed top-5 right-5 z-50 flex flex-col gap-2">
        {/* Upload Photo */}
        <button
          onClick={() => fileInputRef.current.click()}
          className="flex items-center gap-2 bg-white border-2 border-orange-400 text-orange-700 text-sm px-4 py-2 rounded-full shadow-lg hover:bg-orange-50 active:scale-95 transition-all font-medium"
        >
          <Upload size={14} />
          Upload Photo
        </button>

        {/* Download PDF */}
        <button
          onClick={handleDownloadPdf}
          className="flex items-center gap-2 bg-orange-700 text-white text-sm px-4 py-2 rounded-full shadow-lg hover:bg-orange-800 active:scale-95 transition-all font-medium"
        >
          <Download size={14} />
          Download PDF
        </button>

        {/* Print */}
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 bg--900 text-white text-sm px-4 py-2 rounded-full shadow-lg hover:bg-orange-950 active:scale-95 transition-all font-medium"
        >
          <Printer size={14} />
          Print
        </button>
      </div>

      {/* Hidden file input for photo upload */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handlePhotoChange}
      />

      {/* ── CV Page ── */}
      {/* No minHeight — let content determine height so PDF/print has no blank gap */}
      <div
        ref={cvRef}
        id="cv-page"
        className="bg-white shadow-2xl w-full max-w-[900px] flex text-gray-800"
      >

        {/* ══════════════════ SIDEBAR — LEFT 32% ══════════════════
            Contains: Photo / Name / Title / Contact / Certifications / Languages / Additional Info
            Skills moved → right column (too heavy for sidebar)
        ══════════════════════════════════════════════════════════ */}
        <aside
          className="w-[32%] flex flex-col shrink-0"
          style={{ background: "linear-gradient(160deg, #b46a45 0%, #b46a45 60%, #b46a45 100%)" }}
        >
          {/* ── Photo + Name + Title ── */}
          <div className="flex flex-col items-center pt-7 pb-5 px-5 text-center border-b border-orange-400/30">

            {/* Circular photo — clickable to upload (hidden on print) */}
            <div
              onClick={() => fileInputRef.current.click()}
              title="Click to upload your photo"
              className="no-print w-[120px] h-[120px] rounded-full border-4 border-orangek-300/70 overflow-hidden flex items-center justify-center mb-3 shadow-lg cursor-pointer hover:opacity-80 transition-opacity bg-orange-200/30"
            >
              {photoUrl ? (
                <img src={photoUrl} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <User size={52} className="text-orange-200/80" />
              )}
            </div>

            {/* Photo shown in print (non-interactive) */}
            {photoUrl && (
              <div className="print-only w-[120px] h-[120px] rounded-full border-4 border-orange-300/70 overflow-hidden mb-3 shadow-lg mx-auto">
                <img src={photoUrl} alt="Profile" className="w-full h-full object-cover" />
              </div>
            )}

            <h1 className="font-display text-[16px] font-extrabold leading-snug text-white">
              {profile.name}
            </h1>
            <p className="text-[10px] text-orange-200 mt-1.5 leading-relaxed px-1">
              {profile.title}
            </p>
          </div>

          {/* ── Sidebar sections ── */}
          <div className="flex-1 px-5 pt-4 pb-5 space-y-4 text-white">

            {/* Contact */}
            <div>
              <SideHeading>Contact</SideHeading>
              <Divider />
              <div className="space-y-1.5 text-[10.5px]">
                <div className="flex items-start gap-2">
                  <MapPin size={11} className="text-orange-300 shrink-0 mt-0.5" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Phone size={11} className="text-orange-300 shrink-0 mt-0.5" />
                  <span>{profile.phone}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Mail size={11} className="text-orange-300 shrink-0 mt-0.5" />
                  <span className="break-all">{profile.email}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Linkedin size={11} className="text-orange-300 shrink-0 mt-0.5" />
                  <span className="break-all">{profile.linkedin}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Github size={11} className="text-orange-300 shrink-0 mt-0.5" />
                  <span className="break-all">{profile.github}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Globe size={11} className="text-orange-300 shrink-0 mt-0.5" />
                  <span className="break-all">{profile.website}</span>
                </div>
              </div>
              {/* Availability badges */}
              <div className="mt-2.5 space-y-1.5">
                <div className="flex items-center gap-1 bg-white/10 border border-orange-300/40 rounded-full px-2.5 py-[3px] text-[9.5px] text-orange-100">
                  ✈️ {profile.openToRelocation}
                </div>
                <div className="flex items-center gap-1 bg-white/10 border border-orange-300/40 rounded-full px-2.5 py-[3px] text-[9.5px] text-orange-100">
                  🌐 {profile.openToRemote}
                </div>
              </div>
            </div>

            {/* Certifications — sidebar keeps this compact list */}
            <div>
              <SideHeading>Certifications</SideHeading>
              <Divider />
              <ul className="space-y-1.5">
                {certifications.map((c, i) => (
                  <li key={i} className="flex gap-1.5 items-start text-[10px] text-orangek-100 leading-snug">
                    <span className="text-orange-300 shrink-0 mt-0.5">▸</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div>
              <SideHeading>Languages</SideHeading>
              <Divider />
              <div className="space-y-1.5">
                {languages.map((l) => (
                  <div key={l.name} className="flex justify-between items-center">
                    <span className="text-[11px] text-white">{l.name}</span>
                    <span className="text-[9.5px] text-orange-200 bg-white/10 rounded-full px-2 py-[1px]">
                      {l.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            {/* <div>
              <SideHeading>Additional Info</SideHeading>
              <Divider />
              <ul className="space-y-1.5">
                {additionalInfo.map((item) => (
                  <li key={item} className="text-[10px] text-pink-100 leading-snug">
                    {item}
                  </li>
                ))}
              </ul>
            </div> */}

          </div>
        </aside>

        {/* ══════════════════ MAIN CONTENT — RIGHT 68% ══════════════════
            Contains: Summary / Skills (full-width table) / Experience / Education
            Achievements / Leadership / References kept as comments (ready to re-enable)
        ══════════════════════════════════════════════════════════════════ */}
        <main className="w-[68%] px-6 py-7">

          {/* Professional Summary */}
          <Section icon={Code2} title="Professional Summary">
            <p className="text-[11.5px] leading-relaxed text-gray-600">{summary}</p>
          </Section>

          {/* Technical Skills — displayed as a clean category table in the wider right column */}
          <Section icon={Code2} title="Technical Skills">
            <div className="space-y-2">
              {Object.entries(skills).map(([group, items]) => (
                <div key={group} className="flex gap-2 items-start">
                  {/* Category label */}
                  <span className="text-[10px] font-semibold text-orange-700 shrink-0 w-[130px] mt-[2px]">
                    {group}:
                  </span>
                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-1">
                    {items.map((s) => (
                      <span
                        key={s}
                        className="text-[9.5px] bg-orange-50 border border-orange-200 text-orange-700 rounded-full px-2 py-[1px]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Experience */}
          <Section icon={Briefcase} title="Experience">
            <div className="space-y-4">
              {experience.map((e, i) => (
                <div key={i}>
                  <div className="flex justify-between flex-wrap gap-x-2 items-baseline">
                    <h3 className="text-[12px] font-bold text-orange-800">{e.role}</h3>
                    <span className="text-[10px] text-orange-400 font-medium shrink-0">{e.period}</span>
                  </div>
                  <p className="text-[10.5px] italic text-orange-500 mb-1">{e.org}</p>
                  <ul className="space-y-0.5">
                    {e.points.map((pt, j) => (
                      <li key={j} className="text-[11px] text-gray-600 flex gap-1.5">
                        <span className="text-orange-400 shrink-0 mt-0.5">▸</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          {/* Education */}
          <Section icon={GraduationCap} title="Education">
            <div className="flex justify-between flex-wrap gap-x-2 items-baseline">
              <h3 className="text-[12px] font-bold text-orange-800">{education.degree}</h3>
              <span className="text-[10px] text-orange-400 font-medium shrink-0">{education.period}</span>
            </div>
            <p className="text-[11px] text-gray-600 mt-0.5">{education.school}</p>
            <p className="text-[10.5px] text--500orange mt-0.5 font-medium">{education.gpa}</p>
          </Section>

          {/* Achievements — uncomment to re-enable */}
          {/* <Section icon={Award} title="Achievements">
            <ul className="space-y-1">
              {achievements.map((a, i) => (
                <li key={i} className="text-[11px] text-gray-600 leading-snug">{a}</li>
              ))}
            </ul>
          </Section> */}

          {/* Leadership & Extracurricular — uncomment to re-enable */}
          {/* <Section icon={Users} title="Leadership & Extracurricular">
            <div className="space-y-3">
              {leadership.map((l, i) => (
                <div key={i}>
                  <div className="flex justify-between flex-wrap gap-x-2 items-baseline">
                    <h3 className="text-[11.5px] font-bold text-pink-800">{l.role}</h3>
                    <span className="text-[10px] text-pink-400 font-medium shrink-0">{l.period}</span>
                  </div>
                  <p className="text-[10.5px] italic text-pink-500 mb-0.5">{l.org}</p>
                  <p className="text-[11px] text-gray-600">{l.desc}</p>
                </div>
              ))}
            </div>
          </Section> */}

          {/* References — uncomment to re-enable */}
          {/* <Section icon={BookOpen} title="References">
            <p className="text-[11.5px] text-gray-500 italic">{references}</p>
          </Section> */}

        </main>
      </div>
    </div>
  );
}
