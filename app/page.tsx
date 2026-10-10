import * as motion from "framer-motion/client";
import { Mail, MapPin, Phone, GraduationCap, Briefcase, Code2, MonitorPlay, Smartphone, Globe, Database } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import VisitorCounter from "@/components/VisitorCounter";
import Navbar from "@/components/Navbar";
import ProjectGallery from "@/components/ProjectGallery";
import ContactForm from "@/components/ContactForm";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Home() {

  
  return (
    <main className="min-h-screen relative font-sans">
      <Navbar />

      <div className="pt-32 pb-16 px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        
        {/* Hero Section */}
        <motion.section 
          id="home"
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 py-10"
          initial="hidden"
          animate="visible"
          data-reveal variants={staggerContainer}
        >
          <motion.div className="flex-1 space-y-6" data-reveal variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 font-medium text-sm mb-2 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              Product Development Intern at FIUU
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight text-white font-heading leading-tight">
              Hi, I&apos;m <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">Azwar Fadzlin</span>
            </h1>
            
            <p className="text-zinc-400 text-lg lg:text-xl max-w-2xl leading-relaxed mt-6">
              Software Engineering student and Product Development Intern at FIUU (Razer Merchant Services), working on fintech products, UAT, API testing, and automation. I build mobile and web applications with Kotlin, Java, React, and Next.js, backed by enterprise IT experience at Experian.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-8">
              <a href="#projects" className="px-8 py-4 bg-blue-600/20 text-blue-100 rounded-lg font-semibold hover:bg-blue-600/30 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.2)] border border-blue-500/30 backdrop-blur-md">
                View Work
              </a>
              <a href="#contact" className="px-8 py-4 bg-transparent text-white rounded-lg font-semibold hover:bg-white/5 transition-colors border border-white/10 backdrop-blur-md">
                Contact Me
              </a>
            </div>
          </motion.div>
          
          <motion.div className="flex-1 flex justify-center lg:justify-end" data-reveal variants={fadeInUp}>
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-125 lg:h-125">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <Image 
                  src="/azwar_image.jpeg" 
                  alt="Azwar Fadzlin" 
                  fill 
                  className="object-cover mix-blend-screen opacity-90"
                  preload
                  sizes="(max-width: 639px) 256px, (max-width: 1023px) 320px, 500px"
                />
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Featured Highlights Section */}
        <motion.section 
          className="py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          data-reveal variants={staggerContainer}
        >
          <motion.h2 className="text-3xl lg:text-4xl font-bold font-heading text-white mb-10" data-reveal variants={fadeInUp}>
            Featured Highlights
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div className="glass-card p-8 group hover:bg-white/3 transition-all" data-reveal variants={fadeInUp}>
              <Smartphone className="w-8 h-8 text-blue-400 mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-xl font-bold text-white mb-4">Mobile Development</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                Building Android experiences with Kotlin and Jetpack Compose, focused on performance, UX, and scalable architecture.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="glass-chip">Kotlin</span>
                <span className="glass-chip">Jetpack Compose</span>
                <span className="glass-chip">Firebase</span>
              </div>
            </motion.div>

            <motion.div className="glass-card p-8 group hover:bg-white/3 transition-all" data-reveal variants={fadeInUp}>
              <Globe className="w-8 h-8 text-purple-400 mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-xl font-bold text-white mb-4">Web Development</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                Developing responsive web apps with modern UI and component-driven architecture.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="glass-chip">React</span>
                <span className="glass-chip">Next.js</span>
                <span className="glass-chip">TypeScript</span>
              </div>
            </motion.div>

            <motion.div className="glass-card p-8 group hover:bg-white/3 transition-all" data-reveal variants={fadeInUp}>
              <Database className="w-8 h-8 text-indigo-400 mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-xl font-bold text-white mb-4">Cloud & Data</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                Hands-on exposure to AWS, database systems, and backend services for reliable deployments.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="glass-chip">AWS</span>
                <span className="glass-chip">Supabase</span>
                <span className="glass-chip">PostgreSQL</span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Selected Works Section */}
        <motion.section 
          id="projects"
          className="py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          data-reveal variants={staggerContainer}
        >
          <div className="mb-12">
            <motion.h2 className="text-5xl lg:text-7xl font-black font-heading text-white tracking-tight" data-reveal variants={fadeInUp}>
              Selected Works
            </motion.h2>
            <motion.p className="text-zinc-400 text-lg lg:text-xl mt-6 max-w-2xl leading-relaxed" data-reveal variants={fadeInUp}>
              A collection of software engineering projects demonstrating technical precision, architectural understanding, and problem-solving capabilities.
            </motion.p>
          </div>

          <ProjectGallery />
        </motion.section>

        {/* Engineering the Digital Ecosystem Section */}
        <motion.section 
          id="experience"
          className="py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          data-reveal variants={staggerContainer}
        >
          <div className="mb-16">
            <motion.h2 className="text-5xl lg:text-7xl font-black font-heading text-white tracking-tight leading-tight" data-reveal variants={fadeInUp}>
              Engineering the <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-300 to-indigo-400">Digital Ecosystem</span>
            </motion.h2>
            <motion.p className="text-zinc-400 text-lg mt-6 max-w-2xl" data-reveal variants={fadeInUp}>
              A focused summary of my education, industry experience, and technical capabilities in software engineering.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left Column: Story & Education */}
            <div className="space-y-8">
              {/* My Story */}
              <motion.div data-reveal variants={fadeInUp}>
                <div className="flex items-center gap-3 mb-6">
                  <MonitorPlay className="w-6 h-6 text-blue-400" />
                  <h3 className="text-2xl font-bold text-white font-heading">My Story</h3>
                </div>
                <div className="glass-card p-8">
                  <div className="space-y-6 text-zinc-400 text-sm leading-relaxed">
                    <p>
                      Final-year Software Engineering student with a strong foundation in Java and software engineering principles. I build real-world software across mobile (Kotlin, Jetpack Compose) and web (Next.js, React, TypeScript), with hands-on exposure to AWS infrastructure and CI/CD workflows.
                    </p>
                    <p>
                      Over a year of industry experience in IT operations and vulnerability management at Experian, with a track record of working in structured, professional environments. Currently a Product Development Intern at FIUU (Razer Merchant Services), supporting fintech product testing, automation, and engineering coordination.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Education */}
              <motion.div data-reveal variants={fadeInUp}>
                <div className="flex items-center gap-3 mb-6 pt-4">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                  <h3 className="text-2xl font-bold text-white font-heading">Education</h3>
                </div>
                <div className="space-y-4">
                  <div className="glass-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-bold text-white">Universiti Kebangsaan Malaysia (UKM)</h4>
                      <p className="text-blue-400 font-medium text-sm">Bachelor in Software Engineering (Information System) • 03/2027</p>
                      <p className="text-zinc-400 text-sm mt-2">IESP MARA Scholar</p>
                      <p className="text-zinc-500 text-sm">Faculty Student Secretariat, PERTAMA UKM</p>
                      <p className="text-zinc-500 text-sm">College Executive Committee (Exco), Bureau of TTK, Kolej Pendeta Za&apos;ba</p>
                      <p className="text-zinc-500 text-sm">Active in 40+ university programs, multiple terms as Technical Lead Exco</p>
                    </div>
                    <div className="bg-black/50 px-4 py-2 rounded-lg border border-white/10 whitespace-nowrap">
                      <span className="text-zinc-500 text-xs font-bold mr-2">CGPA</span>
                      <span className="text-white font-black">3.88</span>
                    </div>
                  </div>
                  
                  <div className="glass-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-bold text-white">Kolej Profesional MARA (KPM)</h4>
                      <p className="text-blue-400 font-medium text-sm">Diploma in Computer Science • 06/2024</p>
                      <p className="text-zinc-500 text-sm mt-2">Graduated 1st Class</p>
                      <p className="text-zinc-500 text-sm">MUET: Band 4.0</p>
                    </div>
                    <div className="bg-black/50 px-4 py-2 rounded-lg border border-white/10 whitespace-nowrap">
                      <span className="text-zinc-500 text-xs font-bold mr-2">CGPA</span>
                      <span className="text-white font-black">3.69</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Experience & Technical Arsenal */}
            <div className="space-y-12">
              {/* Professional Experience */}
              <motion.div data-reveal variants={fadeInUp}>
                <div className="flex items-center gap-3 mb-8">
                  <Briefcase className="w-6 h-6 text-blue-400" />
                  <h3 className="text-2xl font-bold text-white font-heading">Professional Experience</h3>
                </div>
                
                <div className="space-y-10 pl-2">
                  <div className="relative pl-8 border-l border-white/10">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full left-[-8.5px] top-1 border-4 border-[#09090b]"></div>
                    <h4 className="text-lg font-bold text-white">Product Development Intern</h4>
                    <p className="text-zinc-300 font-medium text-sm mb-4">FIUU (Razer Merchant Services) • Aug 2026 - Present • Shah Alam</p>
                    <ul className="text-zinc-400 text-sm leading-relaxed list-disc pl-5 space-y-2">
                      <li>Initiated a configuration-as-code migration proof of concept with a Senior Software Engineer to automate 30+ manual database queries across Production, UAT, and Sandbox.</li>
                      <li>Introduced Playwright automation and maintained onboarding tools, reducing repetitive merchant onboarding form completion from 15 minutes to 3 minutes.</li>
                      <li>Conducted 30+ UAT scenarios across 3+ fintech products, covering online and terminal payment flows.</li>
                      <li>Worked with Product Engineers to reproduce bugs, investigate issues, and validate fixes, supported by test evidence and technical documentation.</li>
                    </ul>
                  </div>
                  <div className="relative pl-8 border-l border-white/10">
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full left-[-8.5px] top-1 shadow-[0_0_15px_rgba(59,130,246,0.5)] border-4 border-[#09090b]"></div>
                    <h4 className="text-lg font-bold text-white">Service Desk Analyst (Contract)</h4>
                    <p className="text-zinc-400 font-medium text-sm mb-4">Experian (MY) • Feb 2024 - Aug 2024 (Hybrid)</p>
                    <ul className="text-zinc-400 text-sm leading-relaxed list-disc pl-5 space-y-2">
                      <li>Provided first-level technical support for 100+ end users via phone, email, and instant messaging.</li>
                      <li>Managed 20-30 daily incident tickets using ServiceNow, maintaining 95%+ SLA compliance.</li>
                      <li>Resolved hardware/software issues including BIOS configuration, BitLocker support, and remote troubleshooting.</li>
                      <li>Performed hardware and network troubleshooting, including wireless connectivity and VPN issues.</li>
                      <li>Escalated complex incidents to Level 2/3 teams while ensuring proper documentation.</li>
                      <li>Handled AD account management, OS deployments, and software installations.</li>
                    </ul>
                  </div>

                  <div className="relative pl-8 border-l border-white/10">
                    <div className="absolute w-3 h-3 bg-zinc-600 rounded-full left-[-6.5px] top-1.5 border-2 border-[#09090b]"></div>
                    <h4 className="text-lg font-bold text-zinc-300">Desktop Vulnerability Management Analyst (Intern)</h4>
                    <p className="text-zinc-500 font-medium text-sm mb-4">Experian (MY) • Dec 2023 - Jan 2024 (Hybrid)</p>
                    <ul className="text-zinc-400 text-sm leading-relaxed list-disc pl-5 space-y-2">
                      <li>Transitioned from IT Support based on performance to focus on vulnerability management.</li>
                      <li>Remediated endpoint vulnerabilities and ensured compliance with security standards.</li>
                      <li>Deployed SCCM updates and validated patching, encryption, and update compliance.</li>
                    </ul>
                  </div>

                  <div className="relative pl-8 border-l border-transparent">
                    <div className="absolute w-3 h-3 bg-zinc-600 rounded-full left-[-6.5px] top-1.5 border-2 border-[#09090b]"></div>
                    <h4 className="text-lg font-bold text-zinc-300">IT Support (Intern)</h4>
                    <p className="text-zinc-500 font-medium text-sm mb-4">Experian (MY) • Aug 2023 - Nov 2023 (On-Site)</p>
                    <ul className="text-zinc-400 text-sm leading-relaxed list-disc pl-5 space-y-2">
                      <li>Performed on-site troubleshooting and repair for laptops and workstations.</li>
                      <li>Conducted hardware repairs, OS imaging, BIOS configuration, and BitLocker support.</li>
                      <li>Installed enterprise software, prepared IT assets for deployment, and assisted with WiFi/VPN issues.</li>
                    </ul>
                  </div>
                </div>
              </motion.div>


            </div>
          </div>
        </motion.section>

        {/* Technical Arsenal Section */}
        <motion.section 
          id="skills"
          className="py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          data-reveal variants={staggerContainer}
        >
          <motion.div className="flex items-center gap-3 mb-10" data-reveal variants={fadeInUp}>
            <Code2 className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl lg:text-5xl font-black font-heading text-white">Technical Arsenal</h2>
          </motion.div>
          
          <motion.div className="glass-card p-5 sm:p-12 space-y-10" data-reveal variants={fadeInUp}>
            {/* Programming Languages */}
            <div>
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-white/10">
                <Smartphone className="w-5 h-5 text-blue-400" />
                <p className="text-zinc-300 text-sm font-bold tracking-widest uppercase">Languages</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                  { name: 'Kotlin', emoji: '🎯' },
                  { name: 'Java', emoji: '☕' },
                  { name: 'JavaScript', emoji: '⚡' },
                  { name: 'SQL', emoji: '🗄️' },
                  { name: 'PHP', emoji: '🐘' },
                  { name: 'Python', emoji: '🐍' }
                ].map(skill => (
                  <div key={skill.name} className="px-4 py-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-center hover:bg-blue-500/20 transition-colors">
                    <div className="text-2xl mb-1">{skill.emoji}</div>
                    <span className="text-xs font-medium text-blue-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frontend & Backend */}
            <div>
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-white/10">
                <Globe className="w-5 h-5 text-purple-400" />
                <p className="text-zinc-300 text-sm font-bold tracking-widest uppercase">Frontend & Backend</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {[
                  { name: 'React', emoji: '⚛️' },
                  { name: 'Next.js', emoji: '▲' },
                  { name: 'Tailwind CSS', emoji: '🎨' },
                  { name: 'Jetpack Compose', emoji: '📱' },
                  { name: 'Node.js', emoji: '🟢' },
                  { name: 'Firebase', emoji: '🔥' },
                  { name: 'Supabase', emoji: '🐘' },
                  { name: 'AWS', emoji: '☁️' },
                  { name: 'Vercel', emoji: '⬛' }
                ].map(skill => (
                  <div key={skill.name} className="px-3 py-3 rounded-lg bg-purple-500/10 border border-purple-500/20 text-center hover:bg-purple-500/20 transition-colors">
                    <div className="text-2xl mb-1">{skill.emoji}</div>
                    <span className="text-xs font-medium text-purple-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Database & Tools */}
            <div>
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-white/10">
                <Database className="w-5 h-5 text-indigo-400" />
                <p className="text-zinc-300 text-sm font-bold tracking-widest uppercase">Database & Tools</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {[
                  { name: 'Git', emoji: '📦' },
                  { name: 'GitHub', emoji: '🐙' },
                  { name: 'Android Studio', emoji: '🤖' },
                  { name: 'VS Code', emoji: '💻' },
                  { name: 'Firestore', emoji: '🗃️' },
                  { name: 'PostgreSQL', emoji: '🐘' },
                  { name: 'MySQL', emoji: '🗄️' },
                  { name: 'CI/CD', emoji: '🔄' },
                  { name: 'Agile', emoji: '⚙️' },
                  { name: 'MVVM', emoji: '🏗️' }
                ].map(skill => (
                  <div key={skill.name} className="px-3 py-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-center hover:bg-indigo-500/20 transition-colors">
                    <div className="text-2xl mb-1">{skill.emoji}</div>
                    <span className="text-xs font-medium text-indigo-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.section>
        <motion.section 
          id="certificates"
          className="py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          data-reveal variants={staggerContainer}
        >
          <motion.h2 className="text-4xl lg:text-5xl font-black font-heading text-white mb-10" data-reveal variants={fadeInUp}>
            Certificates & Awards
          </motion.h2>

          <motion.div className="glass-card p-8" data-reveal variants={fadeInUp}>
            <ul className="text-zinc-400 text-sm list-disc pl-5 space-y-2">
              <li>AWS Certified Cloud Practitioner (CLF-C02)</li>
              <li>AWS Academy Graduate</li>
              <li>Gold Medal in Dice 3.0</li>
              <li>Dean List Award for all 7 consecutive semesters (KPM)</li>
              <li>3rd runner-up in Robotic Competition (National Science Week)</li>
            </ul>
          </motion.div>
        </motion.section>

        {/* References */}
        <motion.section 
          id="references"
          className="py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          data-reveal variants={staggerContainer}
        >
          <motion.h2 className="text-4xl lg:text-5xl font-black font-heading text-white mb-10" data-reveal variants={fadeInUp}>
            References
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div className="glass-card p-8" data-reveal variants={fadeInUp}>
              <h3 className="text-xl font-bold text-white mb-2">Ts. Masura Rahmat</h3>
              <p className="text-zinc-400 text-sm mb-4">IT Instructor (Final Year Project Supervisor) • Universiti Kebangsaan Malaysia</p>
              <p className="text-zinc-400 text-sm">Email: masura@ukm.edu.my</p>
              <p className="text-zinc-400 text-sm">Phone: +60 19-212 5724</p>
            </motion.div>

            <motion.div className="glass-card p-8" data-reveal variants={fadeInUp}>
              <h3 className="text-xl font-bold text-white mb-2">Abdullah Syukri Bin Ahmad</h3>
              <p className="text-zinc-400 text-sm mb-4">Field Support Manager, Experian MY (Former Internship Supervisor & Team Lead)</p>
              <p className="text-zinc-400 text-sm">Email: AbdullahSyukri.BinAhmad@experian.com</p>
              <p className="text-zinc-400 text-sm">Phone: +60 12-945 1563</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Let's Connect Section */}
        <motion.section 
          id="contact"
          className="py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          data-reveal variants={staggerContainer}
        >
          <div className="glass-card p-2 border-indigo-500/30 overflow-hidden relative">
            <div className="absolute inset-0 bg-linear-to-b from-indigo-500/10 to-transparent"></div>
            
            <div className="bg-[#0f0f11] rounded-2xl p-4 sm:p-10 lg:p-16 relative z-10 border border-white/5">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <motion.h2 className="text-4xl lg:text-6xl font-black font-heading text-white tracking-tight mb-4" data-reveal variants={fadeInUp}>
                  Let&apos;s Connect
                </motion.h2>
                <motion.p className="text-zinc-400 text-lg" data-reveal variants={fadeInUp}>
                  Currently working in product development at FIUU. Get in touch to discuss my projects, software engineering, or future opportunities.
                </motion.p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 lg:gap-8">
                {/* Contact Info */}
                <motion.div className="bg-black/50 rounded-2xl p-4 sm:p-8 border border-white/5 h-full flex flex-col" data-reveal variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-blue-400 mb-4">Contact Information</h3>
                  <p className="text-zinc-400 text-sm mb-10 leading-relaxed">
                    Feel free to reach out through any of these channels.
                  </p>
                  
                  <div className="space-y-8 flex-1">
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors shrink-0">
                        <Mail className="w-5 h-5 text-zinc-300" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm mb-1">Email</p>
                        <a href="mailto:azwarfadzlin1@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">azwarfadzlin1@gmail.com</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors shrink-0">
                        <Phone className="w-5 h-5 text-zinc-300" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm mb-1">Phone</p>
                        <a href="tel:+60142913880" className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">+60 14-2913-880</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors shrink-0">
                        <MapPin className="w-5 h-5 text-zinc-300" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm mb-1">Location</p>
                        <p className="text-zinc-400 text-sm font-medium">Bangi, Selangor</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-10 border-t border-white/10 flex gap-4 mt-8">
                    <a aria-label="Azwar Fadzlin on LinkedIn" href="https://linkedin.com/in/azwarfadzlin/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors">
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a aria-label="Azwar Fadzlin on GitHub" href="https://github.com/azwarfadzlin1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors">
                      <FaGithub className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div className="bg-[#141416] rounded-2xl p-4 sm:p-8 border border-white/5" data-reveal variants={fadeInUp}>
                  <ContactForm />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

      </div>

      {/* Footer */}
      <footer className="bg-black/80 border-t border-white/10 py-10 mt-10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row flex-wrap items-center justify-between gap-6">
          <div className="font-heading font-black text-xl tracking-tighter text-white">
            Azwar Fadzlin
          </div>
          <p className="text-zinc-500 text-sm text-center md:text-left">
            © 2026 Azwar Fadzlin. Built with technical precision.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium text-zinc-400">
            <a href="https://github.com/azwarfadzlin1" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/azwarfadzlin/" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="mailto:azwarfadzlin1@gmail.com" className="hover:text-white transition-colors">Email</a>
          </div>
          <VisitorCounter />
        </div>
      </footer>
    </main>
  );
}
