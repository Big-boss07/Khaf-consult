import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { ProjectCard } from '../features/ProjectCard';
import { Button } from '../ui/Button';
import { projects } from '../../data/projects';
import { Modal } from '../ui/Modal';

export function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  // Get top 3 projects for preview
  const featured = projects.slice(0, 3);

  return (
    <section className="py-24 bg-white relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-navy/5 -z-10 rounded-l-[100px]" />
      
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionTitle 
            title="Featured Projects"
            subtitle="Our Portfolio" 
            align="left"
            className="mb-0"
          />
          <Link to="/portfolio" className="shrink-0">
            <Button variant="outline" className="gap-2 group">
              View All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedProject(project)} 
            />
          ))}
        </div>
      </Container>

      {/* Quick Preview Modal (Reuse simple design for preview) */}
      <Modal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
      >
        {selectedProject && (
          <div>
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title} 
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <div className="flex gap-2 mb-4">
              <span className="px-3 py-1 bg-brand-gold/10 text-brand-navy rounded-full text-sm font-semibold">
                {selectedProject.category}
              </span>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              {selectedProject.description}
            </p>
            <div className="flex justify-end">
              <Link to="/portfolio">
                <Button onClick={() => setSelectedProject(null)}>View Full Portfolio</Button>
              </Link>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
