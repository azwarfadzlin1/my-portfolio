import { ArrowUpRight, ArrowDownToLine } from "lucide-react";
import { ProjectFolders } from "./DesktopControls";

const fiuu = [
  ["Configuration as code", "Initiated a migration proof of concept with a Senior Software Engineer to automate 30+ manual database queries across Production, UAT, and Sandbox, reducing dependency on DBA and engineering handoffs."],
  ["Merchant-specific workflows", "Designed a workflow to apply approved configurations dynamically by Merchant ID, targeting Sandbox setup that previously required days of coordination."],
  ["15 minutes to 3 minutes", "Introduced Playwright automation and maintained internal onboarding tools, reducing repetitive merchant onboarding form completion time by 80% per MRP."],
  ["30+ scenarios, 3+ products", "Conducted UAT across online, own-terminal, and FIUU terminal payment flows."],
  ["From bug report to validated fix", "Worked directly with Product Engineers to reproduce and investigate bugs, troubleshoot issues, and validate fixes. Provided reproducible steps, test evidence, expected versus actual behaviour, and technical documentation to reduce repeated clarification."],
];

const roles = [
  { title: "Service Desk Analyst", date: "Aug 2023 – Aug 2024 · Contract", points: ["Supported 100+ end users by phone, email, and instant messaging; managed 20–30 daily ServiceNow tickets with 95%+ SLA compliance.", "Diagnosed hardware and software issues: component replacement, BIOS configuration, BitLocker, and remote troubleshooting, plus wireless and VPN connectivity.", "Managed Active Directory account unlocks, password resets, and access. Escalated complex incidents to Level 2 and 3 with clear documentation.", "Performed OS deployment, software installation, and routine system updates."] },
  { title: "Desktop Vulnerability Management Analyst", date: "Dec 2023 – Jan 2024 · Internship", points: ["Selected to move from IT Support into Vulnerability Management based on strong performance.", "Remediated corporate endpoint vulnerabilities and maintained compliance with internal security standards and current Windows security patches.", "Deployed SCCM security updates; performed manual patching, encryption verification, and update validation."] },
  { title: "IT Support", date: "Aug – Nov 2023 · Internship", points: ["Troubleshot and repaired laptops and workstations on site, including hardware, OS deployment, imaging, BIOS, and BitLocker.", "Installed enterprise software, supported routine updates, and prepared IT assets and endpoints for corporate deployment.", "Resolved WiFi and VPN connectivity issues."] },
];

const skills = [
  ["Programming", "Kotlin, Java, JavaScript, SQL, PHP, Python"],
  ["Frontend & mobile", "React, Next.js, Tailwind CSS, Jetpack Compose"],
  ["Backend & cloud", "Node.js, Firebase, Supabase, AWS, Vercel"],
  ["Databases", "Firestore (NoSQL), PostgreSQL, MySQL"],
  ["Tools & version control", "Git, GitHub, Android Studio, Visual Studio Code"],
  ["Engineering concepts", "Client-server architecture, MVVM, Agile development, CRUD, CI/CD"],
];

const awards = [
  ["AWS Certified Cloud Practitioner", "CLF-C02"],
  ["AWS Academy Graduate", "Cloud foundations"],
  ["Dice 3.0", "Gold medal"],
  ["Dean’s List", "All 7 consecutive semesters at KPM"],
  ["National Science Week", "Robotic Competition · 3rd runner-up"],
  ["ICYOUTH 2026", "Hackathon Challenge participant"],
];

export default function ResumeFolders() {
  return <div className="os-resume-stack" aria-label="Resume folders">
    <div className="os-folder-marker" aria-hidden="true" /><section id="projects" className="os-resume-folder" aria-labelledby="work-heading">
      <a className="os-resume-tab" href="#projects" aria-label="Open Work folder">Work</a>
      <div className="os-folder-viewport"><div className="os-resume-content os-work-dossier">
        <header className="os-dossier-heading"><span className="os-file-label">Projects / open a folder</span><h2 id="work-heading">Built to be used.</h2><p>Fitness tracking, sustainable living, and a personal corner of the web.</p></header>
        <ProjectFolders location="section" />
        <p className="os-folder-hint">Select a project to explore its features and technology.</p>
      </div>
      </div>
    </section><div className="os-folder-runway" aria-hidden="true" />
    <div className="os-folder-marker" aria-hidden="true" /><section id="experience" className="os-resume-folder os-dossier-fiuu" aria-labelledby="fiuu-heading">
      <a className="os-resume-tab" href="#experience" aria-label="Open FIUU folder">FIUU</a>
      <div className="os-folder-viewport"><div className="os-resume-content os-dossier-layout">
        <header className="os-dossier-heading"><span className="os-file-label">Shah Alam, Selangor · Aug 2026 to present</span><h2 id="fiuu-heading">Less repetition.<br />More progress.</h2><p className="os-role-title">Product Development Intern</p><p>FIUU (Razer Merchant Services)</p><p>Fintech product development, UAT, API testing, payment initiatives, and cross-functional technical coordination.</p></header>
        <div className="os-field-notes"><div className="os-note-title">Field notes / product development</div><dl>{fiuu.map(([title, text]) => <div key={title}><dt>{title}</dt><dd>{text}</dd></div>)}</dl></div>
      </div>
      </div>
    </section><div className="os-folder-runway" aria-hidden="true" />
    <div className="os-folder-marker" aria-hidden="true" /><section id="experian" className="os-resume-folder os-dossier-experian" aria-labelledby="experian-heading">
      <a className="os-resume-tab" href="#experian" aria-label="Open Experian folder">Experian</a>
      <div className="os-folder-viewport"><div className="os-resume-content os-dossier-layout">
        <header className="os-dossier-heading"><span className="os-file-label">Cyberjaya, Selangor · 2023–2024</span><h2 id="experian-heading">People supported.<br />Endpoints secured.</h2><p>Three roles at Experian Malaysia, spanning enterprise IT, service desk operations, and vulnerability management.</p><p className="os-folder-hint">Contract and internship dates follow the resume and overlap.</p></header>
        <div className="os-role-history">{roles.map(role => <article key={role.title}><span className="os-history-date">{role.date}</span><h3>{role.title}</h3><ul>{role.points.map(point => <li key={point}>{point}</li>)}</ul></article>)}</div>
      </div>
      </div>
    </section><div className="os-folder-runway" aria-hidden="true" />
    <div className="os-folder-marker" aria-hidden="true" /><section id="about" className="os-resume-folder os-dossier-education" aria-labelledby="education-heading">
      <a className="os-resume-tab" href="#about" aria-label="Open Education folder">Education</a>
      <div className="os-folder-viewport"><div className="os-resume-content os-dossier-layout">
        <header className="os-dossier-heading"><span className="os-file-label">Azwar Fadzlin bin Zailani / Bangi, Selangor</span><h2 id="education-heading">A foundation.<br />And a little curiosity.</h2><p>Software engineering student with hands-on experience in mobile and web development, fintech, enterprise IT, API testing, and cloud technologies.</p></header>
        <div className="os-education-records"><article><span className="os-history-date">Expected Mar 2027 · Bangi, Selangor</span><h3>Universiti Kebangsaan Malaysia</h3><p>Bachelor of Software Engineering (Information Systems)</p><div className="os-academic-result"><strong>3.88<span> / 4.00</span></strong><span>Current CGPA · IESP MARA Scholar</span></div><ul><li>Faculty Student Secretariat, PERTAMA UKM.</li><li>College Executive Committee Member (Exco), Bureau of TTK, Kolej Pendeta Za’ba.</li><li>Involved in 40+ university programs, serving multiple times as Technical Exco and leading technical execution.</li></ul></article><article><span className="os-history-date">Jun 2024 · Beranang, Selangor</span><h3>Kolej Profesional MARA Beranang</h3><p>Diploma in Computer Science</p><div className="os-academic-result"><strong>3.69<span> / 4.00</span></strong><span>First Class · MUET Band 4.0</span></div></article></div>
      </div>
      </div>
    </section><div className="os-folder-runway" aria-hidden="true" />
    <div className="os-folder-marker" aria-hidden="true" /><section id="skills" className="os-resume-folder os-dossier-skills" aria-labelledby="skills-heading">
      <a className="os-resume-tab" href="#skills" aria-label="Open Skills folder">Skills</a>
      <div className="os-folder-viewport"><div className="os-resume-content os-dossier-layout"><header className="os-dossier-heading"><span className="os-file-label">The toolkit</span><h2 id="skills-heading">From the interface<br />to the infrastructure.</h2><p>The languages, frameworks, and tools behind my work.</p></header><dl className="os-skill-index">{skills.map(([title, text]) => <div key={title}><dt>{title}</dt><dd>{text}</dd></div>)}</dl></div>
      </div>
    </section><div className="os-folder-runway" aria-hidden="true" />
    <div className="os-folder-marker" aria-hidden="true" /><section id="certificates" className="os-resume-folder os-dossier-awards" aria-labelledby="awards-heading">
      <a className="os-resume-tab" href="#certificates" aria-label="Open Awards folder">Awards</a>
      <div className="os-folder-viewport"><div className="os-resume-content os-dossier-layout"><header className="os-dossier-heading"><span className="os-file-label">Certificates & achievements</span><h2 id="awards-heading">A few keepsakes<br />from the journey.</h2><p>Cloud learning, academic consistency, and time spent building with others.</p><a className="os-text-link" href="/Azwar%20Fadzlin%20Resume.pdf" download>Download full resume <ArrowDownToLine size={15} /></a></header><ol className="os-award-records">{awards.map(([title, detail]) => <li key={title}><span className="os-award-seal" aria-hidden="true">✦</span><div><h3>{title}</h3><p>{detail}</p></div></li>)}</ol></div>
      </div>
    </section><div className="os-folder-runway" aria-hidden="true" />
    <div className="os-dossier-end"><span>That’s the file. Let’s write the next chapter.</span><a href="#contact">Get in touch <ArrowUpRight size={16} /></a></div>
  </div>;
}
