import { GithubIcon } from "../ui/BrandIcons.jsx";
import Section from "../ui/Section.jsx";
import ProjectCard from "../ui/ProjectCard.jsx";
import Button from "../ui/Button.jsx";

export default function Projects({ projects, github }) {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      subtitle="AI tools, safety tech and full-stack applications — each one an excuse to learn something new."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      {github && (
        <div className="mt-10 flex justify-center">
          <Button href={github} variant="outline" size="lg" external>
            <GithubIcon size={17} /> See all repositories
          </Button>
        </div>
      )}
    </Section>
  );
}
