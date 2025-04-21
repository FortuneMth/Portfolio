'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "UX Research",
      description: "As a UX researcher, I dive deep into understanding users' behaviors, needs, and motivations through a combination of qualitative and quantitative methods. I explore the why behind user actions to inform intuitive design decisions. My goal is to bridge the gap between user goals and business objectives by validating ideas early, identifying usability issues, and ensuring that every interaction feels intentional. I use real-world data and human insights to shape experiences that are not only functional but also genuinely resonate with users.",
      skills: [
        "User Interviews & Surveys",
        "Usability Testing",
        "A/B Testing",
        "User Persona",
        "Journey Mapping",
        "Heuristic Evaluation",
        "Competitive Analysis"
      ]
    },
    {
      title: "UI Design",
      description: "I design interfaces that speak without words. My approach to UI is intentional, aesthetic, and rooted in clarity. Every element—from typography to spacing—is designed to guide users seamlessly, while reflecting the brand's personality. I balance visual appeal with usability to craft digital experiences that feel both bold and intuitive. Whether it's mobile or web, I design clean, dark, and immersive interfaces that leave a lasting impression.",
      skills: [
        "High-Fidelity Prototyping",
        "Wireframing",
        "Responsive UI",
        "Component-Based Design Systems",
        "Typography",
        "Visual Hierarchy"
      ]
    },
    {
      title: "Web Development",
      description: "I bring designs to life with clean, maintainable code. My focus is on crafting fast, accessible, and responsive websites using modern web technologies. I build with performance in mind—every line of code serves a purpose. Whether it's smooth transitions, interactive UI elements, or optimized loading, I ensure users experience the design exactly as intended. I code experiences, not just websites.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Design"
      ]
    }
  ];

  const [activeService, setActiveService] = useState(0);

  return (
    <section className="min-h-screen bg-black py-20 px-4 md:px-8 lg:px-16">
      {/* Services Header */}
      <div className="max-w-[1400px] mx-auto mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-light text-white"
        >
          Services
        </motion.h2>
      </div>

      {/* Services Content */}
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Left side - Stacked text */}
        <div className="space-y-2">
          {services.map((service, index) => (
            <motion.h2 
              key={service.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`text-6xl md:text-7xl lg:text-8xl font-light transition-colors cursor-pointer ${
                activeService === index ? 'text-[#F67011]' : 'text-gray-700 hover:text-gray-500'
              }`}
              onClick={() => setActiveService(index)}
            >
              {service.title}
            </motion.h2>
          ))}
        </div>

        {/* Right side - Description and skills */}
        <div className="space-y-8">
          <motion.p 
            key={`desc-${activeService}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white-400 text-lg leading-relaxed"
          >
            {services[activeService].description}
          </motion.p>

          <motion.div 
            key={`skills-${activeService}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500"
          >
            {services[activeService].skills.map((skill, index) => (
              <>
                <span key={skill}>{skill}</span>
                {index < services[activeService].skills.length - 1 && <span>/</span>}
              </>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services; 