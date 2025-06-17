'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, GraduationCap, Award, MapPin } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      type: 'degree',
      title: 'Bachelor of Technology in Computer Science',
      institution: 'Asansol Engineering College',
      location: 'Asansol,West Bengal, India',
      year: '2022-2026',
      gpa: '7/10',
      description: 'Specialized in core CS fundamentals with hands-on expertise in Data Structures & Algorithms, DBMS, SQL, and Full-Stack Web Development. Built multiple projects implementing modern web technologies while maintaining academic performance.',
      highlights: ['Software Engineering', 'Data Structures & Algorithms', 'Web Development', 'Database Systems', 'Computer Networks'],
      featured: true,
    },
     {
      type: 'degree',
      title: 'Higher Secondary Education',
      institution: 'India International School',
      location: 'Asansol,West Bengal, India',
      year: '2019-2021',
      gpa: '8/10',
      description: 'Focused on Science and Mathematics with a strong emphasis on analytical thinking and problem-solving. Participated in various coding competitions and workshops to enhance programming skills and knowledge of computer science fundamentals.',
      highlights: [ 'Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
      featured: true,
    },
    {
      type: 'degree',
      title: 'Secondary Education',
      institution: 'India International School',
      location: 'Asansol,West Bengal, India',
      year: '2017-2019',
      gpa: '9/10',
      description: 'Completed secondary education with a strong foundation in Mathematics, Science, and English. Developed analytical skills and a passion for technology through various projects and extracurricular activities.',
      highlights: [ 'Mathematics', 'Science', 'English', 'Computer Science', 'Extracurricular Activities'],
      featured: true,
    },
  ];

  return (
    <div>
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .shadow-colorful {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 
                      0 10px 10px -5px rgba(0, 0, 0, 0.04),
                      0 0 0 1px rgba(139, 92, 246, 0.05);
        }
        
        .milestone-line {
          position: relative;
        }
        
        .milestone-line::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #ddd6fe, #e879f9, #fbbf24);
          transform: translateX(-50%);
        }
        
        .milestone-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          border: 4px solid white;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          position: relative;
          z-index: 10;
        }
        
        .milestone-dot-large {
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        }
      `}</style>
      
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50/50 via-white to-blue-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Education & <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My academic milestones and professional certifications that have shaped 
              my expertise in software development and technology.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line - vertical line connecting all items */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200"></div>
            
            <div className="space-y-12">
              {education.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center gap-8">
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 relative z-10 flex justify-center">
                      <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg ${
                        item.featured 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-6 h-6' 
                          : 'bg-gradient-to-r from-purple-400 to-pink-400'
                      }`}></div>
                    </div>

                    {/* Content card */}
                    <div className="flex-1">
                      <Card className={`bg-white border-gray-200 hover:shadow-colorful transition-all duration-300 group max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl ${
                        // Alternating layout for all screen sizes
                        index % 2 === 0 
                          ? 'mr-auto ml-8' 
                          : 'ml-auto mr-8'
                      }`}>
                        <CardHeader className="pb-4">
                          <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-xl group-hover:scale-110 transition-transform ${
                              item.type === 'degree' 
                                ? 'bg-gradient-to-br from-blue-100 to-purple-100' 
                                : 'bg-gradient-to-br from-purple-100 to-pink-100'
                            }`}>
                              {item.type === 'degree' ? (
                                <GraduationCap className={`${
                                  item.type === 'degree' ? 'text-blue-600' : 'text-purple-600'
                                }`} size={28} />
                              ) : (
                                <Award className="text-purple-600" size={28} />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col gap-2 mb-3">
                                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                                  {item.title}
                                </CardTitle>
                                <div className="flex flex-wrap items-center gap-4 text-gray-500">
                                  <div className="flex items-center gap-1">
                                    <Calendar size={16} />
                                    <span className="text-sm font-medium">{item.year}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MapPin size={16} />
                                    <span className="text-sm">{item.location}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                                <p className="text-purple-600 font-semibold text-lg">{item.institution}</p>
                                <div className="flex flex-wrap gap-2">
                                  {item.gpa && (
                                    <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200 w-fit">
                                      GPA: {item.gpa}
                                    </Badge>
                                  )}
                                  {item.featured && (
                                    <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200 w-fit">
                                      Featured
                                    </Badge>
                                  )}
                                </div>
                              </div>
                              <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2">
                            {item.highlights.map((highlight, idx) => (
                              <Badge 
                                key={highlight} 
                                variant="outline" 
                                className={`border-gray-300 text-gray-700 hover:bg-gradient-to-r transition-all ${
                                  idx % 3 === 0 ? 'hover:from-blue-50 hover:to-purple-50 hover:border-blue-300' :
                                  idx % 3 === 1 ? 'hover:from-purple-50 hover:to-pink-50 hover:border-purple-300' :
                                  'hover:from-pink-50 hover:to-blue-50 hover:border-pink-300'
                                }`}
                              >
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationSection;