'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="bg-[#111] text-gray-300 py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl mb-6 font-light uppercase"
        >
          About Me
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-400 leading-loose"
        >
          I'm a digital designer and frontend dev who blends clean visuals with interactive experiences. 
          I focus on minimal UI, purposeful motion, and creative storytelling.
        </motion.p>
      </div>
    </section>
  );
} 