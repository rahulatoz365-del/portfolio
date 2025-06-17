'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TechStackSection = () => {
  const techCategories = {
    'Frontend Development': {
      color: 'from-blue-500 to-purple-500',
      techs: [
        { name: 'React', color: 'bg-blue-500', textColor: 'text-white' },
        { name: 'Next.js', color: 'bg-gray-900', textColor: 'text-white' },
        { name: 'TypeScript', color: 'bg-blue-600', textColor: 'text-white' },
        { name: 'HTML5', color: 'bg-orange-500', textColor: 'text-white' },
        { name: 'CSS3', color: 'bg-blue-400', textColor: 'text-white' },
        { name: 'Tailwind CSS', color: 'bg-teal-500', textColor: 'text-white' },
      ]
    },
    'Backend Development': {
      color: 'from-green-500 to-teal-500',
      techs: [
        { name: 'Node.js', color: 'bg-green-600', textColor: 'text-white' },
        { name: 'Express.js', color: 'bg-gray-700', textColor: 'text-white' },
        { name: 'REST APIs', color: 'bg-blue-500', textColor: 'text-white' },
      ]
    },
    'Database & Storage': {
      color: 'from-purple-500 to-pink-500',
      techs: [
        { name: 'MongoDB', color: 'bg-green-500', textColor: 'text-white' },
        { name: 'PostgreSQL', color: 'bg-blue-700', textColor: 'text-white' },
        { name: 'MySQL', color: 'bg-orange-600', textColor: 'text-white' },
      ]
    },
    'DevOps & Tools': {
      color: 'from-orange-500 to-red-500',
      techs: [
        { name: 'Git', color: 'bg-orange-500', textColor: 'text-white' },
        { name: 'Vercel', color: 'bg-gray-900', textColor: 'text-white' },
        { name: 'Netlify', color: 'bg-teal-600', textColor: 'text-white' },
        { name: 'VS Code', color: 'bg-blue-600', textColor: 'text-white' },
      ]
    },
  };

  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins text-gray-900 mb-4">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life. Each technology 
            represents countless hours of learning and building amazing projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(techCategories).map(([category, data]) => (
            <Card 
              key={category} 
              className="bg-white border-gray-200 hover:shadow-colorful-lg transition-all duration-300 tech-card group"
            >
              <CardHeader className="pb-6">
                <CardTitle className="text-xl font-bold font-poppins text-gray-900 flex items-center">
                  <div className={`w-1 h-8 bg-gradient-to-b ${data.color} rounded-full mr-3 group-hover:h-10 transition-all`}></div>
                  <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                    {category}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {data.techs.map((tech, index) => (
                    <div
                      key={tech.name}
                      className="group/tech relative"
                    >
                      <Badge 
                        className={`${tech.color} ${tech.textColor} text-sm font-medium px-4 py-2 w-full justify-center hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl`}
                      >
                        {tech.name}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-colorful border border-gray-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-4">
              <span className="gradient-text">Always Learning</span>
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Technology evolves rapidly, and I'm committed to continuous learning. 
              Currently exploring AI/ML integration, Web3 technologies, and advanced cloud architectures.
            </p>
            <div className="flex justify-center mt-6 space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-200"></div>
              <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse delay-400"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;