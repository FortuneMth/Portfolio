'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero3D = () => {
  return (
    <section className="relative h-screen w-full bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />

      {/* Main content */}
      <div className="relative z-20 h-full flex flex-col justify-between pt-32 pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto w-full">
          {/* Established date */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white-500 mb-8"
          >
            DESIGNER EST. 2025
          </motion.p>

          {/* Main content grid with 3 columns */}
          <div className="grid grid-cols-3 gap-4 items-center">
            {/* Left column: Main heading */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="col-span-3 md:col-span-1"
            >
              <h1 className="text-[clamp(3rem,8vw,6rem)] leading-none tracking-tight text-white-200">
                DESIGN
                <br />
                THE DREAM
              </h1>
            </motion.div>
            
            {/* Middle column: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="col-span-3 md:col-span-1 h-[400px] md:h-[400px] relative"
            >
              <Image
                src="/Portfolio/Man2.png" // Replace with your actual image path
                alt="Design concept visualization"
                fill
                className="object-cover object-center"
                priority
              />
            </motion.div>
            
            {/* Right column: Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="col-span-3 md:col-span-1"
            >
              <p className="text-white-400 text-sm tracking-wider max-w-xs text-right md:ml-auto">
                DESIGNER WITH A PASSION
                <br />
                FOR CREATING INTUITIVE
                <br />
                DIGITAL EXPERIENCES
              </p>
            </motion.div>
          </div>
        </div>

        {/* Categories */}
        <div className="max-w-[1400px] mx-auto w-full mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-8"
          >
            <div className="text-center">
              <p className="text-white text-lg font-light tracking-wide">[ UX Design ]</p>
            </div>
            <div className="text-center">
              <p className="text-white text-lg font-light tracking-wide">[ UI Design ]</p>
            </div>
            <div className="text-center">
              <p className="text-white text-lg font-light tracking-wide">[ Web Development ]</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;