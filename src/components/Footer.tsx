import { Mail, Phone, MapPin, Download, Github, Linkedin, ArrowRight } from 'lucide-react';

interface FooterProps {
  downloadResume: () => void;
  scrollToSection: (sectionId: string) => void;
}

export default function Footer({ downloadResume, scrollToSection }: FooterProps) {
  return (
    <footer id="footer" className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-white py-12 relative transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Left: Contact Info */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-2xl font-bold mb-2">Sugan R</h3>
          <p className="mb-2 text-lg font-semibold">Mobile Application Developer</p>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Mail size={18} className="text-blue-500 dark:text-blue-400" />
              <a href="mailto:suganraghupathi8@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 font-medium">suganraghupathi8@gmail.com</a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={18} className="text-blue-500 dark:text-blue-400" />
              <a href="tel:+919677080928" className="hover:text-blue-600 dark:hover:text-blue-400 font-medium">+91 9677080928</a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={18} className="text-blue-500 dark:text-blue-400" />
              <span className="font-medium">Kattankulathur, Chennai</span>
            </div>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com/SuganRaghupathi" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-600 transition">
              <Github size={22} />
            </a>
            <a href="http://www.linkedin.com/in/sugan-r-553731363" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-600 transition">
              <Linkedin size={22} />
            </a>
          </div>
        </div>

        {/* Center: Navigation */}
        <div className="mb-8 md:mb-0">
          <h4 className="text-lg font-bold mb-3">Sections</h4>
          <div className="flex flex-col space-y-2">
            {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Education'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-left transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Resume & Scroll to Top */}
        <div className="flex flex-col items-center">
          <button
            onClick={downloadResume}
            className="group px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:text-white rounded-xl font-semibold transition-all duration-300 flex items-center mb-4"
          >
            <Download size={20} className="mr-2 group-hover:animate-bounce" />
            Download Resume
          </button>
          <button
            onClick={() => scrollToSection('home')}
            className="mt-2 p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition flex items-center"
            aria-label="Scroll to top"
          >
            <ArrowRight size={24} className="transform rotate-[-90deg] text-white" />
          </button>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-300 dark:border-gray-700 pt-6">
        <p className="text-gray-500 dark:text-gray-400 text-sm font-semibold">
          © 2024 Sugan R. All rights reserved. Built with React and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}