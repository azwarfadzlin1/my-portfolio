"use client";
import { supabase } from "@/lib/supabase";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ExternalLink, GraduationCap, Briefcase, Code2, MonitorPlay } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-20"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div className="flex-1 space-y-6" variants={fadeInUp}>
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium text-sm mb-4">
            Available for Internship (Aug 2026)
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white font-heading">
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">Azwar Fadzlin</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-zinc-300 font-medium font-heading">
            Software Engineering Student & Full Stack Developer
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            I specialize in building real-world applications using modern technologies like Kotlin, Jetpack Compose, React, and Firebase. Passionate about scalable systems and agile development.
          </p>
          <div className="flex items-center gap-4 pt-4">
            <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25">
              View Work
            </a>
            <a href="#contact" className="px-6 py-3 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-colors border border-white/10">
              Contact Me
            </a>
          </div>
          <div className="flex items-center gap-4 pt-6 text-zinc-400">
            <a href="https://github.com/azwarfadzlin1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 rounded-full hover:bg-white/5">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/azwarfadzlin/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 rounded-full hover:bg-white/5">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="mailto:azwarfadzlin1@gmail.com" className="hover:text-white transition-colors p-2 rounded-full hover:bg-white/5">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
        
        <motion.div className="flex-1 flex justify-center md:justify-end" variants={fadeInUp}>
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-linear-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full border border-white/10 overflow-hidden glass-card p-4">
              <Image 
                src="/avatar.png" 
                alt="Abstract 3D Avatar" 
                fill 
                className="object-cover rounded-full mix-blend-screen"
                priority
              />
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* About & Skills */}
      <motion.section 
        id="about" 
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div className="glass-card p-8" variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold font-heading">Education</h3>
            </div>
            <div className="space-y-6">
              <div className="relative pl-6 border-l border-white/10">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full left-[-6.5px] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                <h4 className="text-lg font-semibold text-white">Universiti Kebangsaan Malaysia (UKM)</h4>
                <p className="text-blue-400 font-medium text-sm mb-2">Bachelor in Software Engineering • Expected Mar 2027</p>
                <p className="text-zinc-400 text-sm">CGPA: 3.86 / 4.00 | IESP MARA Scholar</p>
              </div>
              <div className="relative pl-6 border-l border-white/10">
                <div className="absolute w-3 h-3 bg-zinc-600 rounded-full left-[-6.5px] top-1.5"></div>
                <h4 className="text-lg font-semibold text-white">Kolej Profesional MARA (KPM)</h4>
                <p className="text-zinc-400 font-medium text-sm mb-2">Diploma in Computer Science • Jun 2024</p>
                <p className="text-zinc-400 text-sm">CGPA: 3.69 / 4.00 | Graduated 1st Class</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="glass-card p-8" variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold font-heading">Technical Skills</h3>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-zinc-400 text-sm mb-3">Programming Languages</p>
                <div className="flex flex-wrap gap-2">
                  {['Kotlin', 'Java', 'JavaScript', 'SQL', 'PHP', 'Python'].map(skill => (
                    <span key={skill} className="glass-chip">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-zinc-400 text-sm mb-3">Frameworks & Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {['Jetpack Compose', 'React', 'Firebase', 'AWS', 'MySQL', 'Node.js', 'Bootstrap'].map(skill => (
                    <span key={skill} className="glass-chip">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-zinc-400 text-sm mb-3">Tools & Concepts</p>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Android Studio', 'MVVM', 'Agile', 'Client-Server Architecture'].map(skill => (
                    <span key={skill} className="glass-chip">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        id="experience" 
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div className="flex items-center gap-3 mb-10" variants={fadeInUp}>
          <Briefcase className="w-8 h-8 text-indigo-400" />
          <h2 className="text-3xl font-bold font-heading text-white">Experience</h2>
        </motion.div>
        
        <motion.div className="glass-card p-8" variants={fadeInUp}>
          <h3 className="text-xl font-bold text-white mb-2">Experian (MY)</h3>
          <p className="text-zinc-400 mb-8">End User Services (EUS) • Hybrid / On-Site</p>
          
          <div className="space-y-8">
            <div className="relative pl-6 border-l border-indigo-500/30">
                <div className="absolute w-3 h-3 bg-indigo-500 rounded-full left-[-6.5px] top-1.5"></div>
              <h4 className="text-lg font-semibold text-indigo-300">Service Desk Analyst (Contract)</h4>
              <p className="text-zinc-500 text-sm mb-3">Feb 2024 – Aug 2024</p>
              <ul className="text-zinc-400 text-sm list-disc pl-4 space-y-2">
                <li>Managed 20–30 daily incident tickets using ServiceNow, maintaining 95%+ SLA compliance.</li>
                <li>Diagnosed and resolved hardware/software issues, including BIOS, BitLocker, and remote troubleshooting.</li>
                <li>Managed user accounts in Active Directory and performed system administration tasks via SCCM.</li>
              </ul>
            </div>
            
            <div className="relative pl-6 border-l border-indigo-500/30">
                <div className="absolute w-3 h-3 bg-zinc-600 rounded-full left-[-6.5px] top-1.5"></div>
              <h4 className="text-lg font-semibold text-zinc-300">Desktop Vulnerability Management Analyst (Intern)</h4>
              <p className="text-zinc-500 text-sm mb-3">Dec 2023 – Jan 2024</p>
              <ul className="text-zinc-400 text-sm list-disc pl-4 space-y-2">
                <li>Remediated identified vulnerabilities across corporate endpoints, improving security compliance.</li>
                <li>Deployed security updates using SCCM and validated patch compliance manually.</li>
              </ul>
            </div>
            
            <div className="relative pl-6 border-l border-indigo-500/30">
                <div className="absolute w-3 h-3 bg-zinc-600 rounded-full left-[-6.5px] top-1.5"></div>
              <h4 className="text-lg font-semibold text-zinc-300">IT Support (Intern)</h4>
              <p className="text-zinc-500 text-sm mb-3">Aug 2023 – Nov 2023</p>
              <ul className="text-zinc-400 text-sm list-disc pl-4 space-y-2">
                <li>Performed on-site troubleshooting and repair for user laptops and workstations.</li>
                <li>Conducted hardware repairs, OS deployment, system imaging, and BIOS configuration.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects" 
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div className="flex items-center gap-3 mb-10" variants={fadeInUp}>
          <MonitorPlay className="w-8 h-8 text-blue-400" />
          <h2 className="text-3xl font-bold font-heading text-white">Featured Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* UniMove */}
          <motion.div className="glass-card flex flex-col group md:col-span-2" variants={fadeInUp}>
            <div className="p-8 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-blue-400 font-medium text-sm mb-1">Final Year Project</p>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors font-heading">
                      UniMove
                    </h3>
                  </div>
                  <a href="https://github.com/azwarfadzlin1/UniMove.git" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-zinc-300 hover:text-white">
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  A campus-focused mobile fitness community application developed for Universiti Kebangsaan Malaysia (UKM). It encourages students to engage in physical activities like running and walking with real-time tracking, leaderboards, and a community feed. Extended to support Wear OS for standalone smartwatch tracking.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="glass-chip border-blue-500/30 text-blue-300">Kotlin</span>
                  <span className="glass-chip border-blue-500/30 text-blue-300">Jetpack Compose</span>
                  <span className="glass-chip">Firebase</span>
                  <span className="glass-chip">Google Maps SDK</span>
                  <span className="glass-chip">Wear OS</span>
                  <span className="glass-chip">MVVM</span>
                </div>
              </div>
              <div className="w-full md:w-1/3 aspect-9/16 md:aspect-square bg-linear-to-br from-blue-900/50 to-purple-900/50 rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526506114642-1277a9b1c747?q=80&w=600&auto=format&fit=crop')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
                <div className="text-center z-10 p-4">
                  <MonitorPlay className="w-12 h-12 text-blue-400 mx-auto mb-2 opacity-50" />
                  <p className="text-blue-300 font-medium text-sm">Android & Wear OS App</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Customer Management */}
          <motion.div className="glass-card flex flex-col group p-8" variants={fadeInUp}>
            <div className="flex-1 space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors font-heading">
                  Customer Management App
                </h3>
                <a href="http://lrgs.ftsm.ukm.my/users/a209041/myPT3/index.php" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-zinc-300 hover:text-white">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                A web-based application to manage customer data with full CRUD functionalities. Features a responsive UI using Bootstrap and robust backend data handling with PHP and MySQL.
              </p>
              <div className="flex flex-wrap gap-2 pt-4 mt-auto">
                <span className="glass-chip">PHP</span>
                <span className="glass-chip">MySQL</span>
                <span className="glass-chip">Bootstrap</span>
              </div>
            </div>
          </motion.div>

          {/* Product Management */}
          <motion.div className="glass-card flex flex-col group p-8" variants={fadeInUp}>
            <div className="flex-1 space-y-4">
              <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors font-heading">
                Product Management System
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                A structured relational database system built with Microsoft Access to track product records and inventory. Implemented complex query operations for efficient data retrieval.
              </p>
              <div className="flex flex-wrap gap-2 pt-4 mt-auto">
                <span className="glass-chip">Microsoft Access</span>
                <span className="glass-chip">Database Design</span>
                <span className="glass-chip">Visual Studio</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div className="glass-card p-12 text-center relative overflow-hidden" variants={fadeInUp}>
          <div className="absolute inset-0 bg-linear-to-t from-blue-900/20 to-transparent pointer-events-none"></div>
          <h2 className="text-4xl font-bold font-heading text-white mb-4">Let&apos;s Connect</h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-8">
            Currently seeking a 20-week Software Engineering internship starting in August 2026. My inbox is always open whether you have a question or just want to say hi!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10">
            <a href="mailto:azwarfadzlin1@gmail.com" className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>azwarfadzlin1@gmail.com</span>
            </a>
            <div className="hidden sm:block w-1 h-1 bg-zinc-700 rounded-full"></div>
            <a href="tel:+60142913880" className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>(+60) 14-2913-880</span>
            </a>
            <div className="hidden sm:block w-1 h-1 bg-zinc-700 rounded-full"></div>
            <div className="flex items-center gap-2 text-zinc-300">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>Bangi, Selangor</span>
            </div>
          </div>
          
          <a href="mailto:azwarfadzlin1@gmail.com" className="inline-flex px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25 items-center gap-2">
            Say Hello
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </motion.section>

      

      {/* Footer */}
      <footer className="text-center py-8 text-zinc-500 text-sm border-t border-white/5">
        <p>Designed & Built by Azwar Fadzlin © 2026</p>
      </footer>
    </main>
    
  );
 async function testDB() {
    const { data, error } = await supabase
      .from("test")
      .select("*");

    console.log(data, error);
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <button
        className="px-4 py-2 bg-black text-white"
        onClick={testDB}
      >
        Test Supabase
      </button>
    </div>
  );

  
}
