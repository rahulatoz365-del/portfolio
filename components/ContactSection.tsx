'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import SocialLinks from '@/components/SocialLinks';
import { toast } from 'sonner';
import { Send, MapPin, Phone, Mail, Clock, Sparkles } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY',
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Message sent successfully! I\'ll get back to you within 24 hours.', {
          duration: 5000,
        });
        form.reset();
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again later.', {
        duration: 5000,
      });
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rahulrogerxd111@gmail.com',
      href: 'mailto:rahulrogerxd111@gmail.com',
      description: 'Send me an email',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8927072987',
      href: 'tel:+15551234567',
      description: 'Call me directly',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'West Bengal, India',
      href: '#',
      description: 'Based in West Bengal',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: 'Within 24 hours',
      href: '#',
      description: 'I respond quickly',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50/50 via-white to-pink-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-gray-900 mb-4">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to collaborate on your next project? I'd love to hear from you. 
            Send me a message and let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white border-gray-200 shadow-colorful-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
              <CardHeader className="pb-6">
                <CardTitle className="text-xl sm:text-2xl font-bold font-poppins text-gray-900 flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg">
                    <Send className="text-blue-600" size={20} />
                  </div>
                  <span className="gradient-text-blue">Send Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <input 
                      type="hidden" 
                      name="access_key" 
                      value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY'} 
                    />
                    <input 
                      type="hidden" 
                      name="redirect" 
                      value="https://web3forms.com/success" 
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-medium">Full Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your full name"
                                {...field}
                                className="border-gray-300 focus:border-purple-500 focus:ring-purple-500 h-11 sm:h-12 transition-all"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-medium">Email Address</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="your.email@example.com"
                                {...field}
                                className="border-gray-300 focus:border-purple-500 focus:ring-purple-500 h-11 sm:h-12 transition-all"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium">Subject</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="What's this about?"
                              {...field}
                              className="border-gray-300 focus:border-purple-500 focus:ring-purple-500 h-11 sm:h-12 transition-all"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about your project or just say hello!"
                              rows={5}
                              {...field}
                              className="border-gray-300 focus:border-purple-500 focus:ring-purple-500 resize-none transition-all"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-colorful"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send size={18} />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 lg:space-y-8">
            <Card className="bg-white border-gray-200 shadow-colorful relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-teal-500"></div>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg sm:text-xl font-bold font-poppins text-gray-900">
                  <span className="gradient-text-purple">Contact Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 lg:space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4 group">
                    <div className={`p-2 sm:p-3 bg-gradient-to-br ${info.gradient.replace('from-', 'from-').replace('to-', 'to-')}/10 rounded-lg group-hover:scale-110 transition-transform`}>
                      <info.icon className={`bg-gradient-to-r ${info.gradient} bg-clip-text text-transparent`} size={18} />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-500 text-sm font-medium">{info.label}</p>
                      {info.href !== '#' ? (
                        <a
                          href={info.href}
                          className="text-gray-900 font-semibold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all block text-sm sm:text-base"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 font-semibold text-sm sm:text-base">{info.value}</p>
                      )}
                      <p className="text-gray-500 text-xs sm:text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-colorful relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg sm:text-xl font-bold font-poppins text-gray-900">
                  <span className="gradient-text-pink">Let's Connect</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                  Follow me on social media for updates on my latest projects and insights 
                  into the world of web development.
                </p>
                <SocialLinks />
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-orange-500"></div>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                    <Sparkles className="text-white" size={20} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-poppins text-gray-900 mb-2">
                    <span className="gradient-text">Available for Work</span>
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    I'm currently open to new opportunities and exciting projects. 
                    Let's build something amazing together!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;