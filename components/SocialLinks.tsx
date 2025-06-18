import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/rahulatoz365-del',
      label: 'GitHub',
      color: 'hover:text-gray-700 hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-200',
      gradient: 'from-gray-600 to-gray-800',
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/risxhu._._?igsh=MXZxY3M1MWRkemwyMg==&utm_source=ig_contact_invite',
      label: 'Instagram',
      color: 'hover:text-pink-600 hover:bg-gradient-to-br hover:from-pink-50 hover:to-pink-100',
      gradient: 'from-pink-500 to-pink-700',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/rahulsinghrishu/',
      label: 'LinkedIn',
      color: 'hover:text-blue-700 hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100',
      gradient: 'from-blue-600 to-blue-800',
    },
    {
      icon: Mail,
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=rahulrogerxd111@gmail.com',
      label: 'Email',
      color: 'hover:text-red-600 hover:bg-gradient-to-br hover:from-red-50 hover:to-red-100',
      gradient: 'from-red-500 to-red-700',
    },
  ];

  return (
    <div className="flex justify-center space-x-4">
      {socialLinks.map((link) => (
        <Button
          key={link.label}
          variant="ghost"
          size="lg"
          asChild
          className={`text-gray-600 ${link.color} transition-all duration-300 transform hover:scale-110 p-3 rounded-full shadow-professional hover:shadow-colorful group`}
        >
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="relative"
          >
            <link.icon size={24} className={`group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${link.gradient} transition-all`} />
          </a>
        </Button>
      ))}
    </div>
  );
};

export default SocialLinks;