'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'JiveJunction',
      description: 'Mobile App',
      image: '/images/jive.png',
      link: 'https://www.figma.com/proto/U9QV2YSjxyOhDYEIJTOqHh/UI-Fundamentals?page-id=109%3A11511&node-id=448-2769'
    },
    {
      id: 2,
      title: 'Nexus Financial Consortium',
      description: 'Intranet',
      image: '/images/nex.png',
      link: 'https://www.figma.com/proto/xLsCkwCWlfVPmklmLZV2Yj/Portfolio?page-id=79%3A28&node-id=99-12087'
    },
    {
      id: 3,
      title: 'Aegis',
      description: 'Landing Page',
      image: '/images/Aegis.png',
      link: 'https://www.figma.com/proto/KPfJoXIm1LUuk3RjAcQULx/AI-Fraud-Detection?page-id=0%3A1&node-id=1-2'
    },
    {
      id: 4,
      title: 'Voyage Finance',
      description: 'Hackathon',
      image: '/images/Investec.png',
      link: 'https://www.figma.com/proto/Vb3LMM8p5Ou565uOCJ1Dky/Hackteam7?page-id=129%3A1362&node-id=154-1638'
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
            SELECTED WORK
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[clamp(2.5rem,5vw,3.5rem)] leading-none text-white font-light"
          >
            Latest Projects
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-[#111] rounded-2xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-transparent" />
              </div>

              {/* Project Info */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-white text-2xl font-light mb-2 transform transition-transform duration-300 group-hover:translate-x-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 transform transition-transform duration-300 group-hover:translate-x-2">
                  {project.description}
                </p>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0"
                  whileHover={{ x: 5 }}
                >
                  <span className="mr-2">Visit Website</span>
                  <span>→</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;