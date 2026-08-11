import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data/projects';
import { ArrowUpRight, MapPin, CheckCircle2 } from 'lucide-react';

interface ProjectShowcaseProps {
  onSelectProject: (project: Project) => void;
  onOpenEnquiry: (projectName?: string) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  onSelectProject,
  onOpenEnquiry,
}) => {
  const [activeType, setActiveType] = useState<string>('ALL');
  const [activeStatus, setActiveStatus] = useState<string>('ALL');

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    const matchesType =
      activeType === 'ALL' ||
      (activeType === 'RESIDENTIAL' && proj.propertyType === 'Residential') ||
      (activeType === 'COMMERCIAL' && (proj.propertyType === 'Commercial' || proj.propertyType === 'Mixed Use'));

    const matchesStatus =
      activeStatus === 'ALL' ||
      (activeStatus === 'ONGOING' && proj.status === 'Ongoing') ||
      (activeStatus === 'COMPLETED' && proj.status === 'Completed');

    return matchesType && matchesStatus;
  });

  return (
    <section id="projects" className="py-12 md:py-20 bg-[#F5F2ED] text-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1A1A1A]/10 pb-8">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-[1px] bg-[#C5A059]" />
              <span className="text-[10px] sm:text-xs font-sans tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
                CURATED PORTFOLIO
              </span>
            </div>
            <h2
              className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] font-light"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Our Projects
            </h2>
            <p className="text-sm sm:text-base text-[#1A1A1A]/70 font-sans font-light mt-2">
              Distinct addresses. Thoughtfully engineered spaces across Bengaluru.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="w-full md:w-auto overflow-x-auto no-scrollbar pb-2 md:pb-0 flex items-center gap-2 text-xs font-sans whitespace-nowrap">
            <span className="text-[#1A1A1A]/50 font-bold tracking-wider mr-1 uppercase text-[10px] shrink-0">TYPE:</span>
            {['ALL', 'RESIDENTIAL', 'COMMERCIAL'].map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-3.5 py-2 uppercase tracking-widest text-[11px] font-bold transition-all cursor-pointer shrink-0 ${
                  activeType === type
                    ? 'bg-[#1A1A1A] text-white shadow-sm'
                    : 'bg-white text-[#1A1A1A] border border-[#1A1A1A]/20 hover:border-[#1A1A1A]'
                }`}
              >
                {type}
              </button>
            ))}

            <span className="text-[#1A1A1A]/50 font-bold tracking-wider ml-3 mr-1 uppercase text-[10px] shrink-0">STATUS:</span>
            {['ALL', 'ONGOING', 'COMPLETED'].map((status) => (
              <button
                key={status}
                onClick={() => setActiveStatus(status)}
                className={`px-3.5 py-2 uppercase tracking-widest text-[11px] font-bold transition-all cursor-pointer shrink-0 ${
                  activeStatus === status
                    ? 'bg-[#C5A059] text-white shadow-sm'
                    : 'bg-white text-[#1A1A1A] border border-[#1A1A1A]/20 hover:border-[#C5A059]'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project, idx) => {
            const isFeaturedLarge = idx === 0;
            const gridSpan = isFeaturedLarge ? 'lg:col-span-12' : idx % 3 === 0 ? 'lg:col-span-7' : 'lg:col-span-5';

            return (
              <div
                key={project.id}
                className={`${gridSpan} group bg-white border border-[#1A1A1A]/10 hover:border-[#C5A059] transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col justify-between overflow-hidden cursor-pointer`}
                onClick={() => onSelectProject(project)}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[16/10] bg-[#1A1A1A]">
                  <img
                    src={project.heroImage}
                    alt={project.name}
                    className="w-full h-full object-cover luxury-image-hover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
                    <span className="bg-[#1A1A1A]/90 backdrop-blur-md text-[#C5A059] text-[10px] tracking-[0.2em] uppercase font-bold px-3 py-1 border border-[#C5A059]/40">
                      {project.propertyType} • {project.status}
                    </span>
                    {project.reraNumber && (
                      <span className="hidden sm:inline-flex items-center gap-1 bg-white/95 backdrop-blur-md text-[#1A1A1A] text-[10px] font-mono font-bold px-2.5 py-1 border border-[#1A1A1A]/10">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        RERA REGISTERED
                      </span>
                    )}
                  </div>

                  {/* Hover Overlay CTA */}
                  <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-[#C5A059] text-white text-xs font-bold tracking-widest px-4 py-2 uppercase inline-flex items-center gap-1 shadow-lg">
                      EXPLORE PROJECT <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-[#C5A059] font-bold tracking-widest uppercase">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{project.location}</span>
                    </div>

                    <h3
                      className="font-serif italic text-2xl md:text-3xl text-[#1A1A1A] group-hover:text-[#C5A059] transition-colors font-normal"
                      style={{ fontFamily: "'Georgia', serif" }}
                    >
                      {project.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#1A1A1A]/70 font-sans font-light line-clamp-2 leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1A1A1A]/10 flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
                    <div>
                      <span className="text-[10px] tracking-wider text-[#1A1A1A]/50 font-bold uppercase block">CONFIGURATION</span>
                      <span className="font-semibold text-[#1A1A1A]">{project.configuration}</span>
                    </div>

                    <div>
                      <span className="text-[10px] tracking-wider text-[#1A1A1A]/50 font-bold uppercase block">STARTING PRICE</span>
                      <span className="font-serif text-base font-bold text-[#C5A059]" style={{ fontFamily: "'Georgia', serif" }}>{project.priceRange}</span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenEnquiry(project.name);
                      }}
                      className="px-5 py-2 border border-[#1A1A1A] text-[10px] font-bold uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-colors cursor-pointer"
                    >
                      ENQUIRE
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

