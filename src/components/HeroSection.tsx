import { useState, useEffect } from 'react';
import { Zap, ArrowRight, Download, Smartphone, Code, Github, Linkedin, Mail } from 'lucide-react';

interface HeroSectionProps {
  isLoaded: boolean;
  heroRef: React.RefObject<HTMLDivElement>;
  downloadResume: () => void;
  scrollToSection: (sectionId: string) => void;
}

export default function HeroSection({ isLoaded, heroRef, downloadResume, scrollToSection }: HeroSectionProps) {
  const [typedText, setTypedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    'Mobile App Developer',
    'Flutter Expert',
    'Android Developer',
    'Cross-Platform Specialist'
  ];

  useEffect(() => {
    const typeText = () => {
      const currentText = roles[currentRole];
      let index = 0;
      setTypedText('');
      
      const typeInterval = setInterval(() => {
        if (index < currentText.length) {
          setTypedText(currentText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }, 2000);
        }
      }, 100);
    };

    const timeout = setTimeout(typeText, 500);
    return () => clearTimeout(timeout);
  }, [currentRole]);

  return (
    <section id="home" ref={heroRef} className="relative pt-16 min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 ${isLoaded ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium animate-bounce-slow">
                <Zap size={16} className="mr-2" />
                Available for new opportunities
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                  Sugan R
                </span>
              </h1>
              
              <div className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 h-12 flex items-center">
                <span className="mr-2">I'm a</span>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                Passionate Flutter and Android developer with 2.5+ years of experience building innovative cross-platform mobile applications. 
                Specialized in creating cutting-edge solutions for field sales, CRM systems, and payment management platforms.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
              >
                <span>View My Work</span>
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={downloadResume}
                className="group px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Download size={20} className="mr-2 group-hover:animate-bounce" />
                <span>Download Resume</span>
              </button>
            </div>

            <div className="flex space-x-6">
              {[
                { icon: Github, href: 'https://github.com/SuganRaghupathi', label: 'GitHub' },
                { icon: Linkedin, href: 'http://www.linkedin.com/in/sugan-r-553731363', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:suganraghupathi8@gmail.com', label: 'Email' }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Phone Mockup */}
          <div className={`relative ${isLoaded ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative mx-auto w-64 h-[500px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
              <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-[2.5rem] p-4 relative overflow-hidden">
                {/* Phone Screen Content */}
                <div className="w-full h-full bg-white dark:bg-gray-900 rounded-[2rem] p-4 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Code size={24} className="text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-800 dark:text-white">Flutter Dev</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Mobile Apps</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 flex-1">
                    {['Vizibee', 'ABS HRMS', 'Faceviz', 'InfoNet Comm'].map((app, index) => (
                      <div key={app} className={`flex items-center space-x-3 p-2 rounded-lg bg-gray-50 dark:bg-gray-800 animate-slide-in-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                          <Smartphone size={16} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-800 dark:text-white">{app}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Flutter App</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
            
            {/* Floating Tech Icons */}
            <div className="absolute -top-8 -left-8 animate-float-1">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <Smartphone size={32} className="text-white" />
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 animate-float-2">
              <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                <Code size={32} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}