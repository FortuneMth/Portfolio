'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-16 lg:px-24 py-20">
      {/* Optional heading animation block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        {/* You can add a title here if needed */}
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 text-[15px] md:text-base text-gray-300">
        {/* Bio & CV Download */}
        <div className="space-y-5 md:col-span-2">
          <h3 className="text-white font-semibold text-2xl">Fortune Mthembu</h3>
          <p className="text-gray-400 leading-relaxed">
            My approach is rooted in research, where I dig deep into user <br /> behaviors and feedback to inform clean, intuitive digital experiences.
          </p>
          <a
            href="https://drive.google.com/file/d/10dNV6VUYGeKy0I_2I8dGuy9ZAGJSbowt/view?usp=drive_link"
            download
            className="inline-block mt-4 bg-[#F67011] text-white px-5 py-2.5 font-medium rounded transition hover:bg-[#e65f00]"
          >
            Download CV
          </a>
        </div>

        {/* Page Links */}
        <div>
          <h4 className="text-white mb-3 font-semibold text-lg">Pages</h4>
          <ul className="space-y-2 text-[16px]">
            <li><Link href="/">Hero</Link></li>
            <li><Link href="#Services">Services</Link></li>
            <li><Link href="#projects">Projects</Link></li>
            <li><Link href="#Tools">Tools</Link></li>
            <li><Link href="/#Contact Me">Contact Me</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-white mb-3 font-semibold text-lg">Connect</h4>
          <div className="flex space-x-6 text-white text-2xl">
            <a href="https://www.instagram.com/fortunemthembu_/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/fortune-mthembu-b65794143" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:fortunemthembu3@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope />
            </a>
            <a href="https://github.com/FortuneMth" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-16 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Fortune Mthembu. All rights reserved.
      </div>
    </footer>
  );
}

