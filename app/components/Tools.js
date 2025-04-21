'use client';
import { motion } from 'framer-motion';

const Tools = () => {
  const tools = [
    'Figma',
    'VsCode',
    'Git',
    'GitHub',
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Slack',
  ];

  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gray-500 mb-4"
          >
            TECH STACK
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[clamp(2.5rem,5vw,3.5rem)] leading-none text-white font-light"
          >
            Tools & Technologies
          </motion.h2>
        </div>

        {/* Word Carousel */}
        <div className="relative w-full h-[60px] mt-20">
        <motion.div
  animate={{ x: [0, -1500] }} // adjust this to your content width
  transition={{
    x: {
      repeat: Infinity,
      repeatType: 'loop',
      duration: 40,
      ease: 'linear',
    },
  }}
  className="absolute flex min-w-[3000px] space-x-10 items-center text-white text-xl md:text-2xl font-medium"
>
  {Array(5).fill(tools).flat().map((tool, index) => (
    <div key={`${tool}-${index}`} className="flex items-center space-x-4">
      <span>{tool}</span>
      <span
        className="text-[#F67011] text-2xl"
        style={{
          background: 'linear-gradient(90deg, #F67011, #FF8F00)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        •
      </span>
    </div>
  ))}
</motion.div>


          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-[15%] h-full bg-gradient-to-r from-black/80 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-[15%] h-full bg-gradient-to-l from-black/80 to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export default Tools;
