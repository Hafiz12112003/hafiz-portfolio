import SectionHeader from './SectionHeader'
import { StaggerGroup, staggerItem } from './Reveal'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { PROJECTS } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="bg-canvas-raised py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeader
          title="Projects"
          description="A few things I've built end to end — API to database to interface."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3" stagger={0.12}>
          {PROJECTS.map((project) => (
            <motion.div key={project.id} variants={staggerItem} className="h-full">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
