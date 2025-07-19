import { CheckCircle, Star, Zap, Layers } from 'lucide-react';

interface AboutSectionProps {
  isLoaded: boolean;
}

export default function AboutSection({ }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Mobile Developer & Problem Solver
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Mobile Application Developer with over 2.5 years of experience in building cross-platform applications using Flutter and Java. 
              Currently working as a Junior Software Developer at Datamoo.AI since March 2023.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Experienced in handling Change Requests, including enhancements and bug fixes, with strong attention to impact analysis. 
              A proactive team member eager to quickly understand project workflows and contribute effectively to full-cycle development.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: 'Projects Completed', value: '5+', icon: CheckCircle },
                { label: 'Years Experience', value: '2.5+', icon: Star },
                { label: 'Technologies', value: '10+', icon: Layers },
                { label: 'Happy Clients', value: '100%', icon: Zap }
              ].map(({ label, value, icon: Icon }) => (
                <div key={label} className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
                  <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white transform rotate-3 hover:rotate-0 transition-all duration-500">
              <h4 className="text-xl font-semibold mb-4">Current Focus</h4>
              <ul className="space-y-3">
                {[
                  'Cross-platform mobile development',
                  'Backend integration with FastAPI',
                  'Database management with PostgreSQL',
                  'UI/UX design optimization'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-green-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}