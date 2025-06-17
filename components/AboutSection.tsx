'use client';
import Profile from '@/public/photo.jpg'; // Adjust the path as necessary
import React, { useState , useEffect} from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, User} from 'lucide-react';
import SocialLinks from './SocialLinks';
// Typing animation component props
interface TypeAnimationProps {
  sequence: (string | number)[];
  className?: string;
}

// Typing animation component - replace with react-type-animation if you have it installed
const TypeAnimation: React.FC<TypeAnimationProps> = ({ sequence, className = '' }) => {
  const [currentText, setCurrentText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);

  useEffect(() => {
    if (sequence.length === 0) return;

    const currentSequenceItem = sequence[currentIndex];
    
    if (typeof currentSequenceItem === 'string') {
      const targetText = currentSequenceItem;
      
      if (isTyping) {
        // Typing effect
        if (currentText.length < targetText.length) {
          const timeout = setTimeout(() => {
            setCurrentText(targetText.slice(0, currentText.length + 1));
          }, 100); // Typing speed
          return () => clearTimeout(timeout);
        } else {
          // Finished typing, wait for delay
          setIsTyping(false);
        }
      } else {
        // Wait for the delay period
        const delay = sequence[currentIndex + 1] as number || 1000;
        const timeout = setTimeout(() => {
          // Start erasing
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            // Move to next item in sequence
            setCurrentIndex((prev) => (prev + 2) % sequence.length);
            setIsTyping(true);
          }
        }, currentText.length === targetText.length ? delay : 50); // Erasing speed
        return () => clearTimeout(timeout);
      }
    }
  }, [currentText, currentIndex, isTyping, sequence]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const AboutSection: React.FC = () => {
  const [imageError, setImageError] = useState<boolean>(false);
  
  // Your profile image path - replace with your actual image path
  // Make sure this file exists in your public folder: public/images/profile.jpg
  const profileImagePath = Profile; // Adjust the import path as necessary

  // Handle image error
  const handleImageError = (): void => {
    setImageError(true);
  };

  // Handle smooth scrolling
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/Rahul_CV.pdf';
  link.download = 'My_Resume.pdf'; // Custom filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <div>
      <style jsx>{`
        .profile-image {
          position: relative;
          box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.7);
          transform: scale(1);
          animation: pulse-glow 2s infinite;
        }
        
        @keyframes pulse-glow {
          0% {
            transform: scale(0.98);
            box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 15px rgba(99, 102, 241, 0);
          }
          100% {
            transform: scale(0.98);
            box-shadow: 0 0 0 0 rgba(99, 102, 241, 0);
          }
        }
        
        .gradient-text {
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .shadow-colorful {
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
        }
        
        .shadow-professional {
          box-shadow: 0 4px 15px rgba(139, 92, 246, 0.2);
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up.delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .animate-fade-in-up.delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
        
        .animate-fade-in-up.delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animate-fade-in-up.delay-500 {
          animation-delay: 0.5s;
          opacity: 0;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .profile-placeholder {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
      `}</style>
      
      <section id="about" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-100/30 to-blue-100/30 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-float"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image Section */}
            <div className="flex justify-center lg:justify-end order-2 lg:order-1">
              <div className="relative">
                <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl relative profile-image">
                  {/* Image Display using Next.js Image component */}
                  {!imageError ? (
                    <Image
                      src={profileImagePath}
                      alt="Developer Profile"
                      width={384}
                      height={384}
                      className="w-full h-full object-cover rounded-full"
                      onError={() => handleImageError()}
                      priority
                      quality={90}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bbbv3oo="
                    />
                  ) : (
                    /* Fallback/Placeholder */
                    <div className="w-full h-full profile-placeholder flex items-center justify-center">
                      <User size={120} className="text-white/80" />
                    </div>
                  )}
                </div>
                
                {/* Floating elements around profile */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full animate-float"></div>
                <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-float delay-500"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full animate-float delay-1000"></div>
              </div>
            </div>

            {/* Content Section */}
            <div className="text-center lg:text-left order-1 lg:order-2">
              <div className="mb-8 animate-fade-in-up">
                <p className="text-lg text-gray-600 mb-4 font-medium">Hello, I'm</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Rahul  <span className="gradient-text">Singh</span>
                </h1>
                <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 h-16 flex items-center justify-center lg:justify-start">
                  <TypeAnimation
                    sequence={[
                      'Full Stack Developer',
                      2000,
                      'React Enthusiast',
                      2000,
                      'Node.js Developer',
                      2000,
                      'Problem Solver',
                      2000,
                    ]}
                    className="gradient-text"
                  />
                </div>
              </div>

              <div className="max-w-2xl mx-auto lg:mx-0 mb-12 animate-fade-in-up delay-200">
                <p className="text-lg text-gray-600 leading-relaxed">
                  I am a passionate Full Stack Developer with a knack for creating dynamic and responsive web applications. 
                  With expertise in both front-end and back-end technologies, I thrive on turning ideas into reality through code. 
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-8 animate-fade-in-up delay-300">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-colorful"
                  onClick={() => scrollToSection('contact')}
                >
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  size="lg" 
                  className="border-2 border-purple-600 text-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-transparent px-8 py-4 text-lg font-semibold transition-all duration-300 shadow-professional"
                  onClick={handleDownload}
                >
                  <Download className="mr-2" size={20} />
                  Download CV
                </Button>
              </div>

              {/* Social Links */}
              <div className="animate-fade-in-up delay-400">
                <p className="text-gray-600 mb-6 text-center lg:text-left">
                  Connect with me on social media to see my latest projects and updates!
                </p>
                <SocialLinks />
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="text-gray-400" size={24} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;