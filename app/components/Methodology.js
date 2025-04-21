'use client';
import { motion } from 'framer-motion';

const Methodology = () => {
  const steps = [
    {
      id: '01',
      title: 'Research',
      description: 'I gather insights through interviews, surveys, and competitor analysis to deeply understand user needs, behaviors, and pain points.'
    },
    {
      id: '02',
      title: 'Define',
      description: 'I identify core problems and define clear goals based on user insights, creating personas and journey maps to guide direction.'
    },
    {
      id: '03',
      title: 'Ideate & Wireframe',
      description: 'I explore creative solutions through sketches and wireframes, prioritizing usability and intuitive structure.'
    },
    {
      id: '04',
      title: 'Prototype & Test',
      description: 'Interactive prototypes are created and tested with users to validate design decisions before full development.'
    },
    {
      id: '05',
      title: 'Design & Develop',
      description: 'I translate designs into high-fidelity UI and bring them to life with code, ensuring responsiveness, accessibility, and performance.'
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gray-500 mb-4"
          >
            MY PROCESS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[clamp(2.5rem,5vw,3.5rem)] leading-none text-white font-light"
          >
            How I Work
          </motion.h2>
        </div>

        {/* Methodology Cards */}
        <div className="relative">
          {/* Scrollable Container */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex space-x-6 pb-8 min-w-max">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative w-[320px] aspect-[3/4] bg-[#111] rounded-2xl p-8 flex flex-col justify-between overflow-hidden hover:bg-[#161616] transition-colors duration-300"
                >
                  {/* Number */}
                  <span className="text-2xl text-gray-700 font-light">
                    {step.id}
                  </span>

                  {/* Content */}
                  <div>
                    <h3 className="text-[2rem] text-[#F67011] font-light mb-4 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-white-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Methodology; 