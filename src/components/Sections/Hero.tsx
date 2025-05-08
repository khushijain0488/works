import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = textRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-blue-300 dark:bg-blue-600 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-purple-300 dark:bg-purple-600 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center" ref={textRef}>
          <div className="mb-6 animate-on-scroll opacity-0 transition-all duration-1000 delay-100">
            <h2 className="text-lg md:text-xl font-medium text-blue-600 dark:text-blue-400">
              Hello, I'm
            </h2>
          </div>
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 delay-300">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
             Khushi Jain
            </h1>
          </div>
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 delay-500">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              <span className="typed-text">I create beautiful web experiences.</span>
            </p>
          </div>
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 delay-700 flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="btn-primary px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="btn-secondary px-8 py-3 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 animate-bounce"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;