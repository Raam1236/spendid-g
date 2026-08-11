import React, { useState } from 'react';
import { Project, FloorPlan } from '../types';
import {
  X,
  MapPin,
  CheckCircle2,
  Calendar,
  Building,
  Layers,
  ArrowRight,
  Download,
  Phone,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Compass,
  FileText
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenSiteVisit: (projectName: string) => void;
  onOpenEnquiry: (projectName: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenSiteVisit,
  onOpenEnquiry
}) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'OVERVIEW' | 'FLOORPLANS' | 'AMENITIES' | 'GALLERY' | 'LOCATION'>('OVERVIEW');
  const [selectedFloorPlan, setSelectedFloorPlan] = useState<FloorPlan | null>(
    project.floorPlans?.[0] || null
  );
  const [customLightboxImages, setCustomLightboxImages] = useState<string[] | null>(null);
  const [customLightboxIndex, setCustomLightboxIndex] = useState<number>(0);

  const tabs = ['OVERVIEW', 'FLOORPLANS', 'AMENITIES', 'GALLERY', 'LOCATION'] as const;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex justify-center items-start p-2 sm:p-6 animate-fade-in">
      <div className="bg-[#FBF9F5] text-[#1C1917] w-full max-w-5xl my-4 sm:my-8 shadow-2xl border border-[#D8D2C6] relative overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Sticky Header Bar */}
        <div className="bg-[#1A1A1A] text-white p-4 sm:p-6 flex items-center justify-between border-b border-white/10 sticky top-0 z-20">
          <div>
            <span className="text-[10px] font-sans tracking-[0.3em] text-[#C5A059] uppercase block font-bold">
              SPLENDID GROUP • {project.propertyType.toUpperCase()}
            </span>
            <h2 className="font-serif italic text-xl sm:text-2xl md:text-3xl font-light text-white" style={{ fontFamily: "'Georgia', serif" }}>{project.name}</h2>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => onOpenEnquiry(project.name)}
              className="hidden sm:inline-flex bg-[#C5A059] text-[#1A1A1A] px-5 py-2 text-xs font-bold tracking-widest uppercase hover:bg-white transition-all border border-[#C5A059]"
            >
              ENQUIRE
            </button>
            <button
              onClick={onClose}
              className="p-2.5 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 active:scale-95"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="bg-[#EFECE6] border-b border-[#1A1A1A]/10 px-4 sm:px-6 flex items-center gap-2 sm:gap-6 overflow-x-auto no-scrollbar text-xs font-sans font-bold tracking-wider text-[#1A1A1A]/60 whitespace-nowrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3.5 px-2.5 uppercase border-b-2 transition-all shrink-0 ${
                activeTab === tab
                  ? 'border-[#C5A059] text-[#1A1A1A] font-bold'
                  : 'border-transparent hover:text-[#1A1A1A]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Modal Main Scrollable Content */}
        <div className="overflow-y-auto p-6 md:p-10 space-y-8 flex-1">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'OVERVIEW' && (
            <div className="space-y-8">
              {/* Hero Banner */}
              <div 
                onClick={() => {
                  setCustomLightboxImages([project.heroImage]);
                  setCustomLightboxIndex(0);
                }}
                className="relative aspect-[16/8] overflow-hidden border border-[#D8D2C6] cursor-pointer group"
                title="Click to view full image"
              >
                <img
                  src={project.heroImage}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-black/70 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 border border-white/20">
                  <Maximize2 className="w-5 h-5 text-[#C5A880]" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white flex flex-wrap items-end justify-between gap-4 pointer-events-none">
                  <div>
                    <p className="text-xs font-sans tracking-widest text-[#C5A880] uppercase flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {project.sublocation}
                    </p>
                    <p className="font-serif text-2xl sm:text-3xl text-white font-light">{project.configuration}</p>
                  </div>
                  <div className="bg-black/80 backdrop-blur-md px-4 py-2 border border-[#C5A880]/30 text-right">
                    <span className="text-[10px] text-[#A89F91] uppercase block tracking-widest">STARTING PRICING</span>
                    <span className="font-serif text-xl font-bold text-[#C5A880]">{project.priceRange}</span>
                  </div>
                </div>
              </div>

              {/* Key Highlights Strip */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-5 border border-[#E2DBD0] text-center">
                <div>
                  <span className="text-[10px] text-[#8C8377] uppercase tracking-widest block">PROPERTY STATUS</span>
                  <span className="font-serif text-base font-semibold text-[#141311]">{project.status}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#8C8377] uppercase tracking-widest block">POSSESSION</span>
                  <span className="font-serif text-base font-semibold text-[#141311]">{project.possessionDate || 'On Request'}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#8C8377] uppercase tracking-widest block">TOTAL RESIDENCES</span>
                  <span className="font-serif text-base font-semibold text-[#141311]">{project.totalUnits ? `${project.totalUnits} Units` : 'Boutique'}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#8C8377] uppercase tracking-widest block">RERA COMPLIANT</span>
                  <span className="font-serif text-xs font-semibold text-emerald-700 block truncate" title={project.reraNumber}>
                    {project.reraNumber ? 'VERIFIED RERA' : 'APPROVED'}
                  </span>
                </div>
              </div>

              {/* Project Story & Description */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-8 space-y-4">
                  <h3 className="font-serif text-2xl text-[#141311]">ARCHITECTURAL STORY</h3>
                  <p className="text-sm sm:text-base text-[#524B43] font-sans leading-relaxed font-light">
                    {project.longDescription}
                  </p>
                  <p className="text-sm text-[#6E655C] font-sans leading-relaxed italic border-l-2 border-[#8A6F48] pl-4 py-1">
                    "{project.story}"
                  </p>
                </div>

                <div className="md:col-span-4 bg-white p-6 border border-[#E2DBD0] space-y-4 h-fit">
                  <h4 className="font-serif text-lg text-[#141311] border-b border-[#E2DBD0] pb-2">RERA TITLES</h4>
                  <p className="text-xs text-[#6B6256] font-mono leading-normal break-all">
                    {project.reraNumber || 'PRM/KA/RERA/1251/310/APPROVED'}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-emerald-700 font-semibold">
                    <ShieldCheck className="w-4 h-4" /> 100% Legal Clear Title
                  </div>

                  <div className="pt-4 border-t border-[#E2DBD0] space-y-2">
                    <button
                      onClick={() => onOpenSiteVisit(project.name)}
                      className="w-full bg-[#141311] text-[#D4B890] py-3 text-xs font-semibold tracking-widest uppercase hover:bg-[#2A2622]"
                    >
                      BOOK PRIVATE SITE VISIT
                    </button>
                    <button
                      onClick={() => onOpenEnquiry(project.name)}
                      className="w-full border border-[#141311] text-[#141311] py-3 text-xs font-semibold tracking-widest uppercase hover:bg-[#141311] hover:text-white"
                    >
                      REQUEST FULL BROCHURE
                    </button>
                  </div>
                </div>
              </div>

              {/* Specifications List */}
              {project.specs?.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-[#E2DBD0]">
                  <h3 className="font-serif text-2xl text-[#141311]">MATERIAL SPECIFICATIONS</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.specs.map((spec, i) => (
                      <div key={i} className="bg-white p-4 border border-[#E2DBD0]">
                        <span className="text-xs font-sans text-[#8A6F48] font-semibold uppercase tracking-wider block">
                          {spec.category}
                        </span>
                        <p className="text-xs text-[#524B43] mt-1 leading-relaxed font-sans">{spec.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: FLOOR PLANS */}
          {activeTab === 'FLOORPLANS' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between border-b border-[#E2DBD0] pb-4">
                <div>
                  <h3 className="font-serif text-2xl text-[#141311]">ARCHITECTURAL FLOOR PLANS</h3>
                  <p className="text-xs text-[#736A5E] font-sans">Precision interior geometry designed for light and ventilation.</p>
                </div>
              </div>

              {project.floorPlans?.length ? (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Selector Column */}
                  <div className="lg:col-span-4 space-y-3">
                    {project.floorPlans.map((fp) => (
                      <div
                        key={fp.id}
                        onClick={() => setSelectedFloorPlan(fp)}
                        className={`p-4 border cursor-pointer transition-all ${
                          selectedFloorPlan?.id === fp.id
                            ? 'bg-white border-[#8A6F48] shadow-md border-l-4 border-l-[#8A6F48]'
                            : 'bg-[#F2EEE7] border-[#E2DBD0] hover:bg-white'
                        }`}
                      >
                        <h4 className="font-serif text-lg text-[#141311] font-semibold">{fp.title}</h4>
                        <p className="text-xs text-[#8A6F48] font-sans font-medium">{fp.type} • {fp.sqft} Sq. Ft.</p>
                        {fp.priceEstimate && (
                          <p className="text-xs text-[#6B6256] mt-1 font-mono">{fp.priceEstimate}</p>
                        )}
                      </div>
                    ))}

                    <div className="bg-[#141311] text-white p-5 space-y-3 mt-6">
                      <h4 className="font-serif text-lg text-[#C5A880]">Need Custom Specs?</h4>
                      <p className="text-xs text-[#A89F91] font-sans leading-relaxed">
                        Request high-res vector floor plans with detailed room dimensions sent directly to your email or WhatsApp.
                      </p>
                      <button
                        onClick={() => onOpenEnquiry(`${project.name} - Floor Plan Request`)}
                        className="w-full bg-[#C5A880] text-[#141311] py-2.5 text-xs font-semibold uppercase tracking-widest hover:bg-[#D4B890]"
                      >
                        DOWNLOAD PDF PLANS
                      </button>
                    </div>
                  </div>

                  {/* Floor Plan Image & Specs Display */}
                  {selectedFloorPlan && (
                    <div className="lg:col-span-8 bg-white border border-[#E2DBD0] p-6 space-y-6">
                      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E2DBD0] pb-4">
                        <div>
                          <h4 className="font-serif text-2xl text-[#141311]">{selectedFloorPlan.title}</h4>
                          <span className="text-xs font-sans text-[#8A6F48] tracking-widest uppercase">
                            SUPER BUILT-UP AREA: {selectedFloorPlan.sqft} SQ. FT.
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-xs font-sans bg-[#F9F7F2] px-4 py-2 border border-[#E2DBD0]">
                          <div><strong className="text-[#141311]">{selectedFloorPlan.bedrooms}</strong> Beds</div>
                          <div><strong className="text-[#141311]">{selectedFloorPlan.bathrooms}</strong> Baths</div>
                          <div><strong className="text-[#141311]">{selectedFloorPlan.balconies}</strong> Balconies</div>
                        </div>
                      </div>

                      <div 
                        onClick={() => {
                          setCustomLightboxImages([selectedFloorPlan.image]);
                          setCustomLightboxIndex(0);
                        }}
                        className="aspect-[4/3] bg-[#F7F5EF] border border-[#E2DBD0] p-4 flex items-center justify-center overflow-hidden cursor-pointer group relative"
                        title="Click to view full image"
                      >
                        <img
                          src={selectedFloorPlan.image}
                          alt={selectedFloorPlan.title}
                          className="max-h-full max-w-full object-contain filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-bold uppercase tracking-widest">
                          <Maximize2 className="w-5 h-5 text-[#C5A880]" />
                          <span>VIEW FULL FLOOR PLAN</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h5 className="text-xs font-sans tracking-widest text-[#8A6F48] uppercase font-semibold">PLAN HIGHLIGHTS</h5>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#524B43] font-sans">
                          {selectedFloorPlan.features.map((feat, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#8A6F48]" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-sm text-[#736A5E] italic">Floor plan information is being updated. Contact our sales office for brochures.</p>
              )}
            </div>
          )}

          {/* TAB 3: AMENITIES */}
          {activeTab === 'AMENITIES' && (
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl text-[#141311]">AMENITIES & LIFESTYLE FEATURES</h3>
                <p className="text-xs text-[#736A5E] font-sans">Curated lifestyle spaces for wellness, recreation, and community living.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.amenities.map((amenity, i) => (
                  <div key={i} className="bg-white p-6 border border-[#E2DBD0] hover:border-[#8A6F48] transition-all space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-sans tracking-[0.2em] text-[#8A6F48] uppercase font-semibold">
                        {amenity.category}
                      </span>
                    </div>
                    <h4 className="font-serif text-xl text-[#141311] font-medium">{amenity.name}</h4>
                    {amenity.description && (
                      <p className="text-xs text-[#6B6256] font-sans leading-relaxed pt-1">{amenity.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: GALLERY */}
          {activeTab === 'GALLERY' && (
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl text-[#141311]">PROJECT VISUAL GALLERY</h3>
                <p className="text-xs text-[#736A5E] font-sans">Click any image to view in full resolution.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {project.gallery.map((imgUrl, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setCustomLightboxImages(project.gallery);
                      setCustomLightboxIndex(i);
                    }}
                    className="group relative aspect-[4/3] bg-black overflow-hidden border border-[#E2DBD0] cursor-pointer"
                  >
                    <img
                      src={imgUrl}
                      alt={`${project.name} photo ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Maximize2 className="w-6 h-6 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: LOCATION */}
          {activeTab === 'LOCATION' && (
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl text-[#141311]">CONNECTED TO WHAT MATTERS</h3>
                <p className="text-xs text-[#736A5E] font-sans">Verified proximities to major IT parks, schools, hospitals, and metro hubs.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7 space-y-4">
                  <div className="bg-white border border-[#E2DBD0] divide-y divide-[#E2DBD0]">
                    {project.locationHighlights.map((lh, i) => (
                      <div key={i} className="p-4 flex items-center justify-between gap-4">
                        <div>
                          <span className="text-[10px] text-[#8A6F48] uppercase tracking-wider block font-semibold">
                            {lh.category}
                          </span>
                          <span className="font-serif text-base text-[#141311]">{lh.placeName}</span>
                        </div>
                        <span className="text-xs font-mono font-bold bg-[#F2EEE7] px-3 py-1 text-[#141311]">
                          {lh.distance}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#141311] text-white p-6 space-y-4 flex flex-col justify-between border border-[#2E2A25]">
                  <div className="space-y-2">
                    <span className="text-[10px] font-sans tracking-[0.3em] text-[#C5A880] uppercase">
                      BENGALURU LOCATION
                    </span>
                    <h4 className="font-serif text-2xl text-white">{project.location}</h4>
                    <p className="text-xs text-[#A89F91] leading-relaxed">
                      {project.sublocation}
                    </p>
                  </div>

                  <div className="p-4 bg-[#24211D] border border-[#3A352F] space-y-2">
                    <div className="flex items-center gap-2 text-xs text-[#C5A880] font-semibold">
                      <Compass className="w-4 h-4" /> Vastu & Sun-Orientation Verified
                    </div>
                    <p className="text-[11px] text-[#9E9589]">
                      Designed with optimal cardinal direction alignments and ample green setback buffers.
                    </p>
                  </div>

                  <button
                    onClick={() => onOpenSiteVisit(project.name)}
                    className="w-full bg-[#C5A880] text-[#141311] py-3 text-xs font-semibold tracking-widest uppercase hover:bg-[#D4B890]"
                  >
                    SCHEDULE LOCATION TOUR
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Fixed CTA Bar */}
        <div className="bg-[#EFECE6] p-4 px-6 border-t border-[#1A1A1A]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-[#1A1A1A]/70">
            <span className="font-bold text-[#1A1A1A]">{project.name}</span> • <span className="font-serif italic font-bold text-[#C5A059]" style={{ fontFamily: "'Georgia', serif" }}>{project.priceRange}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onOpenSiteVisit(project.name)}
              className="flex-1 sm:flex-none bg-[#1A1A1A] text-white px-5 py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#C5A059] hover:text-[#1A1A1A] transition-all"
            >
              BOOK SITE VISIT
            </button>
            <button
              onClick={() => onOpenEnquiry(project.name)}
              className="flex-1 sm:flex-none bg-[#C5A059] text-[#1A1A1A] px-5 py-3 text-xs font-bold tracking-widest uppercase hover:bg-white transition-all border border-[#C5A059]"
            >
              ENQUIRE PRICING
            </button>
          </div>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {customLightboxImages && customLightboxImages.length > 0 && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setCustomLightboxImages(null)}
        >
          {/* Top Right Close Button (X) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCustomLightboxImages(null);
            }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[10000] p-3 rounded-full bg-black/70 hover:bg-black/95 text-white hover:text-[#C5A059] border border-white/20 transition-all shadow-2xl cursor-pointer"
            aria-label="Close full image view"
          >
            <X className="w-8 h-8" />
          </button>

          {customLightboxImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCustomLightboxIndex((prev) => (prev > 0 ? prev - 1 : customLightboxImages.length - 1));
                }}
                className="absolute left-4 sm:left-6 z-[10000] p-3 rounded-full bg-black/70 hover:bg-black/95 text-white hover:text-[#C5A059] border border-white/20 transition-all shadow-2xl cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCustomLightboxIndex((prev) => (prev < customLightboxImages.length - 1 ? prev + 1 : 0));
                }}
                className="absolute right-4 sm:right-6 z-[10000] p-3 rounded-full bg-black/70 hover:bg-black/95 text-white hover:text-[#C5A059] border border-white/20 transition-all shadow-2xl cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </>
          )}

          <img
            src={customLightboxImages[customLightboxIndex]}
            alt="Fullscreen view"
            className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl rounded-sm"
            onClick={(e) => e.stopPropagation()}
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </div>
  );
};
