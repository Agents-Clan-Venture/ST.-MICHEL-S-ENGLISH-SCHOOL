import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, Users, Lightbulb } from 'lucide-react';
import Students from "/Home/Home_JOC.png"

interface Program {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const programs: Program[] = [
  {
    icon: <BookOpen size={32} className="text-accent" />,
    title: 'Academic Excellence',
    description: 'Our rigorous curriculum prepares students for college and beyond, with advanced placement courses and personalized learning paths.',
    link: '/academics',
  },
  {
    icon: <Award size={32} className="text-accent" />,
    title: 'Arts & Creativity',
    description: 'From visual arts to performing arts, students can explore their creative talents through diverse programs and showcases.',
    link: '/extracurricular',
  },
  {
    icon: <Users size={32} className="text-accent" />,
    title: 'Athletic Development',
    description: 'Our comprehensive sports program promotes teamwork, discipline, and physical fitness through various competitive and recreational activities.',
    link: '/extracurricular',
  },
  {
    icon: <Lightbulb size={32} className="text-accent" />,
    title: 'Innovation & Technology',
    description: 'Students engage with cutting-edge technology and develop critical thinking skills through STEM projects and digital literacy initiatives.',
    link: '/academics#innovation',
  },
];

const Programs: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="section-title">
          <h2>Our Educational Programs</h2>
          <p>Discover the diverse learning opportunities available at St. Michel's</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div 
              key={program.title} 
              className="bg-gray-50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <Link 
                to={program.link} 
                className="text-primary-700 font-medium hover:text-primary-900 transition-colors"
              >
                Learn more
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-primary-900 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Join Our Community?</h3>
              <p className="text-gray-300 mb-6">
                St. Michel's is now accepting applications for the upcoming academic year. 
                Start your journey with us and discover the difference a quality education can make.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/admissions" className="btn-accent">
                  Admissions Info
                </Link>
                <Link to="/contact" className="btn bg-white text-primary-900 hover:bg-gray-100">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img 
                src={Students}
                alt="Students walking on campus" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;