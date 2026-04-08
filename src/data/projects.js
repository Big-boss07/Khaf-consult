import projectLayout from '../assets/project_layout_1775633346416.png';
import projectBuilding from '../assets/project_building_1775633402244.png';
import projectSupervision from '../assets/project_supervision_1775633486692.png';
import aboutBg from '../assets/About.png';

export const projects = [
  {
    id: 1,
    title: 'Lekki Residential Estate Layout',
    category: 'Estate Layout',
    image: projectLayout,
    description: 'Comprehensive plot division, road network mapping, and green space allocation for a 50-plot premium residential estate in Lagos.',
  },
  {
    id: 2,
    title: 'Victoria Island Commercial Hub',
    category: 'Commercial Building Approval',
    image: projectBuilding,
    description: 'Facilitated the structural drawing preparation and swift regulatory approval process for a 5-story commercial complex.',
  },
  {
    id: 3,
    title: 'Abuja Private Residence Supervision',
    category: 'Site Supervision',
    image: projectSupervision,
    description: 'End-to-end site supervision from foundation to roofing, ensuring compliance with approved building plans and safety standards.',
  },
  {
    id: 4,
    title: 'Ikeja Change of Land Use',
    category: 'Approval & Documentation',
    image: aboutBg,
    description: 'Successfully processed the change of land use from strictly residential to mixed-use for a major client, complete with environmental analysis.',
  },
  {
    id: 5,
    title: 'Maitama Renovation Plan',
    category: 'Renovation & Redesign',
    image: projectBuilding,
    description: 'Provided detailed as-built drawings and guided the complete remodeling of a 15-year-old property to modern standards.',
  },
  {
    id: 6,
    title: 'Mainland Topographical Mapping',
    category: 'Survey Coordination',
    image: projectLayout,
    description: 'Coordinated with certified surveyors to produce accurate topographic maps serving as the basis for a 20-hectare government layout.',
  }
];

export const categories = ['All', 'Estate Layout', 'Commercial Building Approval', 'Site Supervision', 'Approval & Documentation', 'Renovation & Redesign', 'Survey Coordination'];
