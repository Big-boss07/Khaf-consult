import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { ProjectCard } from '../features/ProjectCard';
import { Modal } from '../ui/Modal';
import { projects, categories } from '../../data/projects';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 bg-gray-50 min-h-screen">
      <Container>
        <SectionTitle 
          title="Our Project Portfolio"
          subtitle="Past Work" 
        />

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat 
                  ? 'bg-brand-navy text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedProject(project)} 
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No projects found in this category.
          </div>
        )}
      </Container>

      {/* Project Detail Modal */}
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
              className="w-full h-80 object-cover rounded-xl mb-6 shadow-sm"
            />
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-1.5 bg-brand-navy/5 text-brand-navy border border-brand-navy/10 rounded-full text-sm font-bold tracking-wide uppercase">
                {selectedProject.category}
              </span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Project Overview</h3>
            <p className="text-gray-700 leading-relaxed max-w-3xl text-lg mb-8">
              {selectedProject.description}
            </p>
            <div className="bg-gray-50 p-6 rounded-xl border mb-6">
              <h4 className="font-bold text-brand-navy mb-4">Ready for similar results?</h4>
              <Link to="/contact">
                <Button className="w-full sm:w-auto">Consult with us</Button>
              </Link>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
