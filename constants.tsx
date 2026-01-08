
import React from 'react';
import { ServiceItem, ProjectItem, ProcessStep } from './types';

export const SERVICES = [
  {
    title: "Branding & Identity",
    description: "Creating a foundation that works across all touchpoints.",
    items: ["Brand strategy", "Logo design", "Visual identity systems", "Rebranding", "Brand guidelines", "Naming & positioning"],
    impact: "Market Recognition",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" />
        <path d="M2 17L12 22L22 17" />
        <path d="M2 12L12 17L22 12" />
      </svg>
    )
  },
  {
    title: "Digital Design",
    description: "Interfaces built for people, not just for show.",
    items: ["UI design", "UX design", "Website design", "Web app design", "Mobile app interfaces", "Design systems"],
    impact: "User Retention",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21H16" />
        <path d="M12 17V21" />
      </svg>
    )
  },
  {
    title: "Product & Interface",
    description: "Solving complex problems with intuitive workflows.",
    items: ["Dashboard design", "SaaS interfaces", "Wireframes & user flows", "Prototyping"],
    impact: "Operational Efficiency",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <path d="M7 11l5 3 5-3" />
        <path d="M12 21v-7" />
      </svg>
    )
  },
  {
    title: "Print & Production",
    description: "Physical assets that represent your brand in the real world.",
    items: ["Packaging design", "Restaurant menus", "Corporate stationery", "Print-ready files"],
    impact: "Physical Presence",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 9V2h12v7" />
        <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
        <path d="M6 14h12v8H6z" />
      </svg>
    )
  },
  {
    title: "Visual Content",
    description: "Communicating your message with clarity and impact.",
    items: ["Social media visuals", "Brand content systems", "Creative direction", "Light motion design"],
    impact: "Audience Engagement",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    )
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "FleetStream Logistics",
    category: "Digital Design",
    imageUrl: "https://images.unsplash.com/photo-1512756783939-ad756f3f0a1d?q=80&w=1000&auto=format&fit=crop",
    description: "Real-time dashboard for local freight management focusing on operator efficiency.",
    highlights: [
      "Reduced dispatcher cognitive load by 40%",
      "Real-time GPS integration with low-latency updates",
      "Human-centered UI for high-stress environments",
      "Optimized for 24/7 service operations"
    ]
  },
  {
    id: 2,
    title: "The Urban Hearth",
    category: "Branding & Print",
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop",
    description: "Visual identity and menu design for a farm-to-table bistro in the industrial district.",
    highlights: [
      "Custom typography reflecting raw industrial heritage",
      "Sustainable print production using recycled stocks",
      "Dynamic digital menu board system",
      "30% increase in social media engagement post-launch"
    ]
  },
  {
    id: 3,
    title: "SolarGrid Home",
    category: "Mobile App",
    imageUrl: "https://images.unsplash.com/photo-1509391366360-fe09a92183c6?q=80&w=1000&auto=format&fit=crop",
    description: "User-friendly interface for managing household energy consumption and solar output.",
    highlights: [
      "Intuitive energy forecast visualizations",
      "One-tap battery management controls",
      "Gamified energy saving targets",
      "Accessibility-first color contrast ratios"
    ]
  },
  {
    id: 4,
    title: "Apex Manufacturing",
    category: "Rebranding",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
    description: "Total visual overhaul for a 30-year-old service company to compete in modern markets.",
    highlights: [
      "Unified global brand architecture",
      "Modernized legacy logo without losing equity",
      "Comprehensive digital asset management system",
      "Employer branding strategy for modern recruitment"
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Design",
    concept: "The visible outcome",
    description: "We focus on what the user sees and feels. Every element is tested for clarity and ease of use, ensuring the aesthetic serves the function."
  },
  {
    title: "Intention",
    concept: "The driving purpose",
    description: "Every pixel must have a reason to exist. We analyze the business goals and user needs before we even open a design tool."
  },
  {
    title: "Origine",
    concept: "The structural root",
    description: "We look at where you started and where you are going. Understanding the core of your business allows us to build designs that last."
  }
];

export const Icons = {
  ArrowRight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  ),
  Menu: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
  ),
  Close: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
};
