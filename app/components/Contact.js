'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // The handleSubmit function goes here
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form with data:', formData);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log('Server response:', data);

      if (res.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Error sending message:', err);
      alert('Failed to send message.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        <style jsx global>{`
          /* Override autofill styles */
          input:-webkit-autofill,
          input:-webkit-autofill:hover, 
          input:-webkit-autofill:focus,
          input:-webkit-autofill:active,
          textarea:-webkit-autofill,
          textarea:-webkit-autofill:hover,
          textarea:-webkit-autofill:focus,
          textarea:-webkit-autofill:active {
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: white !important;
            transition: background-color 5000s ease-in-out 0s;
            box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 1) !important;
          }
        `}</style>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left side - Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-full min-h-[400px] bg-[#111] rounded-2xl overflow-hidden"
          >
            {/* Background shapes */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10">
            </div>

            {/* Main text */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white space-y-4">
              <h2 className="text-5xl font-bold">I'd love to hear from you</h2>
              <p className="text-lg">Feel free to reach out with any questions or messages!</p>
            </div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <h2 className="text-4xl font-light text-[#F67011] mb-4">Let's get in touch.</h2>
            <p className="text-gray-400 mb-8">Fill out my form below and send me an email.</p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-700 py-4 text-white transition-colors outline-none"
                  placeholder="Name *"
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-700 py-4 text-white transition-colors outline-none"
                  placeholder="E-Mail *"
                />
              </div>

              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-700 py-4 text-white focus:border-white transition-colors outline-none"
                  placeholder="Phone"
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-gray-700 py-4 text-white focus:border-white transition-colors outline-none resize-none"
                  placeholder="Message *"
                />
              </div>

              <div className="flex items-center justify-between">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center space-x-2 text-white"
                >
                  <span className="text-lg">Send</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </motion.button>
                <span className="text-sm text-gray-500">* Marked fields are required to fill.</span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
