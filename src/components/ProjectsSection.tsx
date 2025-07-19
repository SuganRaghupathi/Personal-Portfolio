import { ExternalLink } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Vizibee',
      subtitle: 'Field Sales Application',
      period: 'Feb 2023 - Apr 2023',
      description: 'Application works based on survey form and the field sales with geo fencing and the expense tracking.',
      tech: ['Flutter', 'PHP'],
      icon: '📱',
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      title: 'ABS HRMS',
      subtitle: 'CRM Application',
      period: 'May 2023 - Jul 2023',
      description: 'This App Works as CRM System and Payroll Application.',
      tech: ['Flutter', 'Django'],
      icon: '💼',
      gradient: 'from-green-600 to-blue-600'
    },
    {
      title: 'Faceviz',
      subtitle: 'Facial Recognition Application',
      period: 'Aug 2023 - Nov 2023',
      description: 'This is an Application of Emotion Detection AI, Field sales, CRM, and offers precise attendance and event logs and reports.',
      tech: ['Flutter', 'Django'],
      icon: '🤖',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      title: 'InfoNet Comm',
      subtitle: 'Data Plan & Payment Management App',
      period: 'Dec 2023 - Jan 2024',
      description: 'Mobile app for manage data plan details, customer billing, and payment tracking, enhancing user accessibility and operational efficiency.',
      tech: ['Flutter', 'FastAPI'],
      icon: '💳',
      gradient: 'from-orange-600 to-red-600'
    },
    {
      title: 'BluechipEasysell',
      subtitle: 'Investment Application',
      period: 'Feb 2024 - Present',
      description: 'A mobile platform under development for managing insurance plans, tracking user investments, and streamlining policy operations.',
      tech: ['Flutter', '.NET'],
      icon: '📈',
      gradient: 'from-indigo-600 to-purple-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            A showcase of mobile applications I've developed at Datamoo AI, ranging from field sales solutions to investment platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-200 dark:border-gray-600"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{project.icon}</div>
                  <ExternalLink size={20} className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{project.subtitle}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{project.period}</p>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-800/40 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}