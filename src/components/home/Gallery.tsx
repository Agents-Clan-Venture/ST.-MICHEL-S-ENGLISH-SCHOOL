import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { GalleryItem } from '../../types';
import h1 from "/Home/Gallery/hg1.png"
import h2 from "/Home/Gallery/hg2.png"
import h3 from "/Home/Gallery/hg3.png"
import h4 from "/Home/Gallery/hg4.png"
import h5 from "/Home/Gallery/hg5.png"
import h6 from "/Home/Gallery/hg6.png"

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    image: h1,
    category: '',
    title: '',
  },
  {
    id: '2',
    image: h2,
    category: '',
    title: '',
  },
  {
    id: '3',
    image: h3,
    category: '',
    title: '',
  },
  {
    id: '4',
    image: h4,
    category: '',
    title: '',
  },
  {
    id: '5',
    image: h5,
    category: '',
    title: '',
  },
  {
    id: '6',
    image: h6,
    category: '',
    title: '',
  },
];

const Gallery: React.FC = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="section-title">
          <h2>Our School Gallery</h2>
          <p>Take a visual journey through life at St. Michel's</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id} 
              className="relative group overflow-hidden rounded-lg shadow-md animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/50 to-transparent opacity-0  transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs font-medium text-accent uppercase tracking-wider">{item.category}</span>
                <h3 className="text-xl font-semibold text-white mt-1">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/gallery" className="btn-outline inline-flex items-center">
            View Full Gallery
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;