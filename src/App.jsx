import { profile, navLinks, about, skillGroups, projects } from "./data/portfolio.js";
import Aurora from "./components/ui/Aurora.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";
import Skills from "./components/sections/Skills.jsx";
import Projects from "./components/sections/Projects.jsx";
import Contact from "./components/sections/Contact.jsx";

export default function App() {
  return (
    <div className="relative min-h-dvh">
      <Aurora />

      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
      >
        Skip to projects
      </a>

      <Navbar profile={profile} links={navLinks} activeIds={navLinks.map((l) => l.id)} />

      <main id="home">
        <Hero profile={profile} />
        <About profile={profile} about={about} />
        <Skills groups={skillGroups} />
        <Projects projects={projects} github={profile.github} />
        <Contact profile={profile} />
      </main>

      <Footer profile={profile} links={navLinks} />
    </div>
  );
}
