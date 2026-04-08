import React from 'react';
import { Badge } from '../ui/Badge';

export function ProjectCard({ project, onClick }) {
  return (
    <div 
      className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl cursor-pointer h-[400px]"
      onClick={onClick}
    >
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
      </div>
      
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
          <Badge variant="secondary" className="mb-4">
            {project.category}
          </Badge>
          <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}
