import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-2/5 animate-on-scroll opacity-0 transition-all duration-1000">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/5583358/pexels-photo-5583358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Professional portrait"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 dark:bg-blue-900 rounded-lg -z-10"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-100 dark:bg-purple-900 rounded-lg -z-10"></div>
            </div>
          </div>

          <div className="w-full md:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 animate-on-scroll opacity-0 transition-all duration-1000">
              About Me
            </h2>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300 animate-on-scroll opacity-0 transition-all duration-1000 delay-200">
              <p>
                Hi there! I'm a passionate web developer with a keen eye for design and a commitment to creating engaging digital experiences. With several years of experience in the tech industry, I've had the opportunity to work on a variety of projects, from small business websites to complex web applications.
              </p>
              <p>
                My journey in web development began with a fascination for how things work on the internet, which led me to pursue formal education in Computer Science. Since then, I've been continuously learning and staying up-to-date with the latest technologies and best practices in the field.
              </p>
              <p>
                When I'm not coding, you can find me exploring new hiking trails, experimenting with photography, or catching up on the latest tech trends. I believe in the power of technology to solve problems and make lives better, and I'm excited to bring my skills and passion to your next project.
              </p>
            </div>

            <div className="mt-8 animate-on-scroll opacity-0 transition-all duration-1000 delay-400">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg inline-block"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;