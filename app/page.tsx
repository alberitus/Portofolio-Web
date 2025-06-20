'use client';

import Image from "next/image";
import Silk from "./components/Silk/Silk";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
import { Timeline } from "./components/ui/timeline";
import IconSocmed from "./components/IconSocmed";
import IconSocmed2 from "./components/IconSocmed2";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./SkillsSection";
import dynamic from "next/dynamic";
import Footer from "./components/Footer";
import {
  IconBrandGithub,
  IconHome,
  IconNewSection,
} from "@tabler/icons-react";
const TextPressure = dynamic(() => import("./components/TextPressure/TextPressure"), {
  ssr: false,
});

export default function Home() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <h2 className="text-lg md:text-2xl mb-4 text-white dark:text-white max-w-4xl">
            PT Kraken Ventura Indonesia
          </h2>
          <p className="mb-8 text-xl font-normal text-[#C5C6C7] md:text-sm dark:text-neutral-200">
            Developed a system monitoring and management dashboard for the company, built using <strong>CodeIgniter 4 (PHP Framework)</strong> for efficient and scalable backend performance.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/experience/Kraken.png"
              alt="hero template"
              width={250}
              height={250}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
        
        
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <h2 className="text-lg md:text-2xl mb-4 text-white dark:text-white max-w-4xl mt-4">
            PT. AYUTRANS UTAMA & PT. ANDIMA TRANSPORTINDO
          </h2>
          <p className="mb-8 text-xl font-normal text-[#C5C6C7] md:text-sm dark:text-neutral-200">
            Developed a web-based operational management system using <strong>Laravel (PHP)</strong> with a touch of <strong>JavaScript</strong> for interactive elements.
            The system includes features such as transactions, item input, orders, invoice printing, reimbursements, worksheets, and report exports — all tailored for businesses with integrated workflows.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/experience/Ayutrans.png"
              alt="hero template"
              width={250}
              height={250}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/experience/Andima.png"
              alt="hero template"
              width={250}
              height={250}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "DevLog",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Personal projects & learning journey update log
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            &bull; Built a responsive Portfolio Website with React & TailwindCSS
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            &bull; Experimented with contact form using EmailJS integration
            </div>
            {/* <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              Implemented dark mode toggle and animated hero section
            </div> */}
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              Created a Portofolio Website With <strong>Html</strong> and <strong>CSS</strong>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/oldProfile.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  const links = [
    {
      title: "Experience",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#experience",
    },
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/alberitus",
    },
  ];
  const people = [
  {
    id: 1,
    name: "TypeScript",
    designation: "50%",
    image:
      "/images/skills/typescript.png",
  },
  {
    id: 2,
    name: "JavaScript",
    designation: "75%",
    image:
      "/images/skills/javascript.png",
  },
  {
    id: 3,
    name: "CSS3",
    designation: "85%",
    image:
      "/images/skills/css3.png",
  },
  {
    id: 4,
    name: "HTML",
    designation: "95%",
    image:
      "/images/skills/html5.png",
  }
  ,
  {
    id: 5,
    name: "Tailwind CSS",
    designation: "50%",
    image:
      "/images/skills/tailwind.png",
  },
  ];
  const scrollToWithOffset = (id: string, offset: number) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
  <div className="min-h-screen overflow-x-hidden bg-[#0B0C10]">
    <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full">
      <Silk 
        speed={5}
        scale={1}
        color="#216c9e"
        noiseIntensity={1.5}
        rotation={0}
      />
    </div>
    <div className="w-full h-screen px-0">
      <HeroSection />
    </div>
      <ScrollVelocity
        texts={['Web Programing', 'Web Development']}
        className="text-white"
      />
      <section id="experience">
        <Timeline data={data} />  
      </section>
      <SkillsSection people={people} />
      <section id="contact" className="py-20 px-4 md:px-8 lg:px-20">
        <Footer />
      </section>
      <IconSocmed />
      <IconSocmed2 />
  </div>
  );
} 
