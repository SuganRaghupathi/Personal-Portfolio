import { Smartphone, Code, Database, GitBranch, Figma } from 'lucide-react';

export default function SkillsSection() {
  const skills = [
    { name: 'Flutter (Dart)', icon: Smartphone, level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'Android (Java)', icon: Code, level: 85, color: 'from-green-500 to-emerald-500' },
    { name: 'RESTful APIs', icon: Database, level: 80, color: 'from-purple-500 to-pink-500' },
    { name: 'Git & GitHub', icon: GitBranch, level: 85, color: 'from-orange-500 to-red-500' },
    { name: 'UI/UX Design', icon: Figma, level: 75, color: 'from-indigo-500 to-purple-500' },
    { name: 'PostgreSQL', icon: Database, level: 70, color: 'from-teal-500 to-blue-500' }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-300 dark:border-gray-600"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 bg-gradient-to-r ${skill.color} rounded-xl mr-4 group-hover:scale-110 transition-transform`}>
                  <skill.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{skill.name}</h3>
              </div>
              
              <div className="relative">
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3 mb-2">
                  <div
                    className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700 dark:text-gray-200 font-medium">Proficiency</span>
                  <span className="text-gray-900 dark:text-white font-bold">{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap gap-3 justify-center">
            {['MVC / MVVM Architecture', 'Postman (API testing)', 'App Signing & Release Builds'].map((additional, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-blue-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full text-sm font-bold hover:scale-105 transition-transform cursor-default border-2 border-blue-300 dark:border-blue-400 shadow-md hover:shadow-lg"
              >
                {additional}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}