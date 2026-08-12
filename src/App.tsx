import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { ProjectShowcase } from './components/ProjectShowcase';
import { BengaluruStory } from './components/BengaluruStory';
import { DesignPhilosophy } from './components/DesignPhilosophy';
import { MortgageCalculator } from './components/MortgageCalculator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { MediaSection } from './components/MediaSection';
import { SiteVisitSection } from './components/SiteVisitSection';
import { FloatingCTABar } from './components/FloatingCTABar';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { EnquiryModal } from './components/EnquiryModal';
import { ConciergeDrawer } from './components/ConciergeDrawer';
import { ThreeDSection } from './components/ThreeDScroll';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState<boolean>(false);
  const [conciergeDrawerOpen, setConciergeDrawerOpen] = useState<boolean>(false);
  const [enquiryProjectName, setEnquiryProjectName] = useState<string | undefined>(undefined);
  const [siteVisitProjectName, setSiteVisitProjectName] = useState<string | undefined>(undefined);

  const handleOpenEnquiry = (projectName?: string) => {
    setEnquiryProjectName(projectName);
    setEnquiryModalOpen(true);
  };

  const handleOpenSiteVisitFromModal = (projectName: string) => {
    setSelectedProject(null);
    setSiteVisitProjectName(projectName);
    const siteVisitElem = document.getElementById('site-visit');
    if (siteVisitElem) {
      siteVisitElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenEnquiryFromModal = (projectName: string) => {
    setSelectedProject(null);
    handleOpenEnquiry(projectName);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1C1917] font-sans selection:bg-[#C5A059] selection:text-white overflow-x-hidden">
      {/* Navigation Bar */}
      <Navbar
        onOpenEnquiry={() => handleOpenEnquiry()}
        onOpenConcierge={() => setConciergeDrawerOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onExploreProjects={() => {
          const elem = document.getElementById('projects');
          elem?.scrollIntoView({ behavior: 'smooth' });
        }}
        onDiscoverBrand={() => {
          const elem = document.getElementById('about');
          elem?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Brand & Corporate Overview */}
      <ThreeDSection id="about" intensity="subtle">
        <BrandIntro />
      </ThreeDSection>

      {/* Projects Portfolio Grid */}
      <ThreeDSection id="projects" intensity="medium">
        <ProjectShowcase
          onSelectProject={(proj) => setSelectedProject(proj)}
          onOpenEnquiry={(pName) => handleOpenEnquiry(pName)}
        />
      </ThreeDSection>

      {/* Design Philosophy & 4 Principles */}
      <ThreeDSection id="philosophy" intensity="subtle">
        <DesignPhilosophy />
      </ThreeDSection>

      {/* Bengaluru Microclimate & Urban Context */}
      <ThreeDSection id="bengaluru" intensity="medium">
        <BengaluruStory />
      </ThreeDSection>

      {/* Interactive Mortgage & EMI Calculator */}
      <ThreeDSection id="calculator" intensity="subtle">
        <MortgageCalculator />
      </ThreeDSection>

      {/* Resident Testimonials */}
      <ThreeDSection id="testimonials" intensity="subtle">
        <TestimonialsSection />
      </ThreeDSection>

      {/* News & Insights */}
      <ThreeDSection id="media" intensity="medium">
        <MediaSection />
      </ThreeDSection>

      {/* Interactive Site Visit Booking Section */}
      <ThreeDSection id="site-visit" intensity="subtle">
        <SiteVisitSection preselectedProject={siteVisitProjectName} />
      </ThreeDSection>

      {/* Floating CTA Triggers */}
      <FloatingCTABar
        onOpenEnquiry={() => handleOpenEnquiry()}
        onOpenConcierge={() => setConciergeDrawerOpen(true)}
      />

      {/* Dark Luxury Footer */}
      <Footer onOpenEnquiry={(pName) => handleOpenEnquiry(pName)} />

      {/* Full Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenSiteVisit={handleOpenSiteVisitFromModal}
        onOpenEnquiry={handleOpenEnquiryFromModal}
      />

      {/* Quick Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        preselectedProject={enquiryProjectName}
      />

      {/* AI Concierge Chat Drawer */}
      <ConciergeDrawer
        isOpen={conciergeDrawerOpen}
        onClose={() => setConciergeDrawerOpen(false)}
        onOpenSiteVisit={(pName) => {
          setConciergeDrawerOpen(false);
          setSiteVisitProjectName(pName);
          const elem = document.getElementById('site-visit');
          elem?.scrollIntoView({ behavior: 'smooth' });
        }}
      />
    </div>
  );
}

