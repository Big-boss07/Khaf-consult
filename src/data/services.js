import { Building2, Map, FileSearch, HardHat, TreePine, Ruler } from 'lucide-react';

export const services = [
  {
    id: 'urban-planning',
    title: 'Urban & Regional Planning',
    description: 'Comprehensive layout design, site planning, and master plan development for functional and sustainable communities.',
    icon: Map,
    features: ['Layout design and site planning', 'Land use planning and zoning analysis', 'Master plan development'],
  },
  {
    id: 'development-control',
    title: 'Development Control & Approval',
    description: 'Expert guidance in securing building plan approvals and land use documentation in compliance with regulations.',
    icon: FileSearch,
    features: ['Building plan preparation & approval processing', 'Change of land use documentation', 'Regularization of land/property documents'],
  },
  {
    id: 'architectural-drafting',
    title: 'Architectural & Drafting Services',
    description: 'Detailed 2D drawings and as-built plans using state-of-the-art AutoCAD and design tools.',
    icon: Ruler,
    features: ['2D drawings using AutoCAD', 'As-built drawings', 'Renovation and remodeling plans'],
  },
  {
    id: 'project-management',
    title: 'Project Management',
    description: 'Hands-on site supervision and construction coordination ensuring quality control from concept to execution.',
    icon: HardHat,
    features: ['Site supervision', 'Construction coordination', 'Quality control and compliance monitoring'],
  },
  {
    id: 'environmental-feasibility',
    title: 'Environmental & Feasibility',
    description: 'Rigorous site analysis, environmental impact considerations, and viability studies for safe developments.',
    icon: TreePine,
    features: ['Environmental impact considerations', 'Feasibility and viability studies', 'Site analysis and reporting'],
  },
  {
    id: 'survey-documentation',
    title: 'Survey & Land Documentation',
    description: 'Advisory and coordination with surveyors to manage title processing and documentation seamlessly.',
    icon: Building2,
    features: ['Land documentation advisory', 'Coordination with surveyors and engineers', 'Title processing guidance'],
  }
];
