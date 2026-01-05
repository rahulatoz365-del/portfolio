import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Star } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    /*{
      title: 'Social Network',
      description: 'A social networking app that lets users connect, share thoughts, and discover new friends. Inspired by Twitter, it includes features like posting short updates ("tweets"), following others, and sending friend requests.It also supports friend suggestions based on mutual connections and interests.',
      techStack: ['Next js', 'Tailwind CSS', 'TypeScript', 'Prisma', 'PostgreSQL','Graph (DSA)', 'Vercel'],
      liveDemo: 'https://social-network-psi-pearl.vercel.app/',
      github: 'https://github.com/rahulatoz365-del/social-network',
      featured: true,
      gradient: 'from-blue-500 to-purple-500',
    },*/
    {
      title: 'WireFrame to Code',
      description: 'Codrr a tool that converts wireframes into production-ready code, streamlining the design-to-development process. It supports multiple frameworks and includes features like responsive design and code optimization.',
      techStack: ['Next js', 'Tailwind CSS', 'TypeScript', 'OpenAI API', 'Vercel', 'Prisma','PostgreSQL'],
      liveDemo: 'https://ai-code-evqo.onrender.com/',
      github: 'https://github.com/rahulatoz365-del/AI-Code',
      featured: true,
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with React frontend, Node.js backend, and Payment Gateway integration. Features include user authentication, product management, shopping cart, and order processing.It also includes a responsive design and admin dashboard for managing products and orders.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Paypal', 'Tailwind CSS'],
      liveDemo: 'https://e-commerce-1-yiy2.onrender.com/',
      github: 'https://github.com/rahulatoz365-del/E-commerce',
      featured: false,
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      title: 'Weather Dashboard',
      description: 'A comprehensive weather dashboard displaying current conditions and forecasts. Features location-based weather data and responsive design.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'OpenWeather API', 'Vercel'],
      liveDemo: 'https://rahulatoz365-del.github.io/Weather-app/',
      github: 'https://github.com/rahulatoz365-del/Weather-app',
      featured: false,
      gradient: 'from-green-500 to-teal-500',
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with Next.js featuring smooth animations, contact forms, and optimized performance. Showcases modern web development practices.',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      liveDemo: 'https://portfolio-psi-umber-vvdplw9vga.vercel.app/',
      github: 'https://github.com/rahulatoz365-del/portfolio',
      featured: false,
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-gray-900 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work and projects that demonstrate my skills 
            in full-stack development, UI/UX design, and problem-solving.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {projects.filter(project => project.featured).map((project, index) => (
            <Card 
              key={index} 
              className="bg-white border-gray-200 hover:shadow-colorful-lg transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient}`}></div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg sm:text-xl font-bold font-poppins text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Star className="text-yellow-500 fill-current" size={16} />
                    <Badge className="bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 border-yellow-200 font-medium text-xs">
                      Featured
                    </Badge>
                  </div>
                </div>
                <CardDescription className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className={`border-gray-300 text-gray-700 hover:bg-gradient-to-r transition-all text-xs ${
                        techIndex % 3 === 0 ? 'hover:from-blue-50 hover:to-purple-50 hover:border-blue-300' :
                        techIndex % 3 === 1 ? 'hover:from-purple-50 hover:to-pink-50 hover:border-purple-300' :
                        'hover:from-pink-50 hover:to-blue-50 hover:border-pink-300'
                      }`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    size="sm" 
                    className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white flex-1 shadow-colorful text-sm`}
                    asChild
                  >
                    <a 
                      href={project.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 justify-center"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-gray-300 text-gray-700 hover:bg-gray-100 flex-1 text-sm"
                    asChild
                  >
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 justify-center"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {projects.filter(project => !project.featured).map((project, index) => (
            <Card 
              key={index} 
              className="bg-white border-gray-200 hover:shadow-colorful transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient}`}></div>
              <CardHeader className="pb-3">
                <CardTitle className="text-base sm:text-lg font-semibold font-poppins text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="border-gray-300 text-gray-700 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.techStack.length > 3 && (
                    <Badge variant="outline" className="border-gray-300 text-gray-700 text-xs">
                      +{project.techStack.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button 
                    size="sm" 
                    className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white flex-1 text-xs`}
                    asChild
                  >
                    <a 
                      href={project.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 justify-center"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-gray-300 text-gray-700 hover:bg-gray-100 flex-1 text-xs"
                    asChild
                  >
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 justify-center"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;