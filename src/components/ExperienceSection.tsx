import { CheckCircle } from 'lucide-react';

export default function ExperienceSection() {
  const experience = {
    company: 'Datamoo AI',
    position: 'Application Developer',
    period: 'Feb 2023 - Present',
    responsibilities: [
      'Developed cross-platform mobile applications using Flutter, with additional experience in native Android development using Java.',
      'Collaborated on projects involving frontend-backend integration, utilizing tools like FastAPI and databases like PostgreSQL.',
      'Proactively contributed to Change Requests (enhancements and defect fixes), while working closely with cross-functional teams and adapting quickly to end-to-end development workflows.'
    ]
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 ml-16 transform hover:scale-105 transition-all duration-300">
              {/* Timeline Dot */}
              <div className="absolute -left-20 top-8 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900"></div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                    {experience.position}
                  </h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400 mb-2">{experience.company}</p>
                </div>
                <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                  {experience.period}
                </span>
              </div>

              <div className="space-y-4">
                {experience.responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <CheckCircle size={20} className="text-green-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{responsibility}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}