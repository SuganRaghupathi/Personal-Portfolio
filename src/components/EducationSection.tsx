import { CheckCircle } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl p-8 border-l-4 border-blue-600 transform hover:scale-105 transition-all duration-300 border border-blue-100 dark:border-blue-700">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Bachelor of Engineering in Mechanical Engineering
                </h3>
              </div>
              <span className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium shadow-sm border border-gray-200 dark:border-gray-600">
                Aug 2018 - May 2022
              </span>
            </div>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>Gained foundational and applied knowledge in engineering mechanics, thermodynamics, fluid mechanics, machine design, and manufacturing processes.</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>Exposure to CAD tools, mechanical system design, and concepts in industrial automation, with basic understanding of control systems and engineering materials.</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-8 border-l-4 border-purple-600 transform hover:scale-105 transition-all duration-300 border border-purple-100 dark:border-purple-700">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  XII - Jaigopal Garodia National Higher Secondary School
                </h3>
              </div>
              <span className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium shadow-sm border border-gray-200 dark:border-gray-600">
                Jun 2016 - Apr 2018
              </span>
            </div>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>Studied core subjects including Mathematics, Biology, Physics, and Chemistry.</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-500" />
                <span>Built a strong foundation in logical reasoning, problem-solving, and scientific analysis, along with exposure to basic programming concepts.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}