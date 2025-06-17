import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
import TechStackSection from '@/components/TechStackSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navbar />
      <AboutSection />
      <ProjectsSection />
      <EducationSection />
      <TechStackSection />
      <ContactSection />
    </main>
  );
}