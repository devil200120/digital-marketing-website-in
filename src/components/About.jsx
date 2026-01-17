import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const About = ({ onHover, onLeave }) => {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState("mission");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const tabs = [
    { id: "mission", label: "Our Mission" },
    { id: "vision", label: "Our Vision" },
    { id: "values", label: "Our Values" },
  ];

  const tabContent = {
    mission: {
      title: "Empowering Digital Success",
      description:
        "At Infotattva Business Solutions, our mission is to empower businesses with innovative digital marketing strategies that drive measurable growth. We believe in creating lasting partnerships built on transparency, expertise, and exceptional results.",
      highlights: [
        "Deliver ROI-focused marketing solutions",
        "Build long-term client relationships",
        "Stay ahead of digital trends",
        "Provide transparent reporting & analytics",
      ],
    },
    vision: {
      title: "Leading Digital Transformation",
      description:
        "We envision becoming the most trusted digital marketing partner for businesses across India and beyond. Our goal is to set new standards in digital excellence while helping our clients achieve unprecedented growth.",
      highlights: [
        "Become India's top digital agency",
        "Pioneer innovative marketing techniques",
        "Create global digital success stories",
        "Shape the future of digital marketing",
      ],
    },
    values: {
      title: "Principles That Guide Us",
      description:
        "Our core values define who we are and how we work. They are the foundation of our company culture and guide every decision we make for our clients and team.",
      highlights: [
        "Integrity in every interaction",
        "Innovation that drives results",
        "Excellence as our standard",
        "Client success is our success",
      ],
    },
  };

  const stats = [
    {
      number: "5+",
      label: "Years of Excellence",
      color: "from-neon-green to-neon-blue",
    },
    {
      number: "200+",
      label: "Projects Delivered",
      color: "from-neon-blue to-neon-purple",
    },
    {
      number: "150+",
      label: "Happy Clients",
      color: "from-neon-purple to-neon-pink",
    },
    {
      number: "50+",
      label: "Expert Team",
      color: "from-neon-pink to-neon-green",
    },
  ];

  const expertise = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
      title: "SEO Excellence",
      description: "Dominate search rankings with data-driven SEO strategies",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
          />
        </svg>
      ),
      title: "Performance Marketing",
      description: "Maximize ROI with targeted ad campaigns across platforms",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2"
          />
        </svg>
      ),
      title: "Social Media",
      description: "Build engaged communities and amplify brand presence",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Web Development",
      description: "Create stunning, high-converting digital experiences",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Content Marketing",
      description: "Engage audiences with compelling content strategies",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Analytics & Insights",
      description: "Make informed decisions with comprehensive data analysis",
    },
  ];

  const certifications = [
    { name: "Google Partner", icon: "🏆" },
    { name: "Meta Business Partner", icon: "📱" },
    { name: "HubSpot Certified", icon: "🎯" },
    { name: "SEMrush Certified", icon: "📊" },
  ];

  return (
    <section
      id="about"
      className="relative py-20 lg:py-28 overflow-hidden"
      ref={containerRef}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-neon-purple/5 blur-3xl"
          style={{ y: imageY }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full bg-neon-green/5 blur-3xl"
          style={{ y: textY }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-950/50 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full glass text-neon-green text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            About Infotattva
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="text-white">Your Trusted Partner for</span>
            <br />
            <span className="gradient-text">Digital Excellence</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed px-2">
            Infotattva Business Solutions is a full-service digital marketing
            agency dedicated to helping businesses thrive in the digital
            landscape. We combine innovation, expertise, and passion to deliver
            exceptional results.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12 lg:mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="relative group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
            >
              <div
                className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                }}
              />
              <div className="relative glass rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:border-white/20 transition-all duration-300">
                <div
                  className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 sm:mb-2`}
                >
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission/Vision/Values Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 lg:mb-16"
        >
          <div className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12">
            {/* Tab Buttons */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-10">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-neon-green to-neon-blue text-dark-950"
                      : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={onHover}
                  onMouseLeave={onLeave}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-2 gap-10 items-center"
              >
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {tabContent[activeTab].title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {tabContent[activeTab].description}
                  </p>
                  <ul className="space-y-3">
                    {tabContent[activeTab].highlights.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-neon-green to-neon-blue" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-green/20 via-neon-blue/20 to-neon-purple/20 rounded-2xl blur-2xl" />
                  <div className="relative bg-white/5 rounded-2xl p-8 border border-white/10">
                    <div className="grid grid-cols-2 gap-4">
                      {certifications.map((cert, index) => (
                        <motion.div
                          key={cert.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                          className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                          onMouseEnter={onHover}
                          onMouseLeave={onLeave}
                        >
                          <span className="text-2xl">{cert.icon}</span>
                          <span className="text-sm text-gray-300">
                            {cert.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Our Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Our <span className="gradient-text">Expertise</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer comprehensive digital marketing solutions tailored to
              your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group glass rounded-2xl p-6 hover:border-neon-green/30 transition-all duration-300"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-neon-green/20 to-neon-blue/20 flex items-center justify-center text-neon-green mb-4 group-hover:from-neon-green group-hover:to-neon-blue group-hover:text-dark-950 transition-all duration-300">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 lg:mt-16"
        >
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple opacity-90" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
            <div className="relative px-4 py-8 sm:px-8 sm:py-12 lg:px-16 lg:py-16 text-center">
              <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-dark-950 mb-3 sm:mb-4">
                Ready to Transform Your Digital Presence?
              </h3>
              <p className="text-dark-950/80 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-6 sm:mb-8">
                Let's discuss how Infotattva can help you achieve your business
                goals with our proven digital marketing strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl bg-dark-950 text-white text-sm sm:text-base font-semibold hover:bg-dark-900 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={onHover}
                  onMouseLeave={onLeave}
                >
                  Get Free Consultation
                </motion.a>
                <motion.a
                  href="#portfolio"
                  className="px-8 py-4 rounded-xl bg-white/20 text-dark-950 font-semibold hover:bg-white/30 transition-colors border border-dark-950/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={onHover}
                  onMouseLeave={onLeave}
                >
                  View Our Work
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
