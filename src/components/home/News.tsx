import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { NewsItem } from '../../types';

const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Brighton Academy Wins National Science Competition',
    date: 'May 15, 2025',
    excerpt: 'Our students brought home the first place trophy in the National Science Olympiad, showcasing exceptional talent and dedication.',
    category: 'Achievement',
    image: 'https://images.pexels.com/photos/8197559/pexels-photo-8197559.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: '2',
    title: 'New Arts Center Opening This Fall',
    date: 'April 30, 2025',
    excerpt: 'We\'re excited to announce the opening of our state-of-the-art performing arts center, enhancing our vibrant arts program.',
    category: 'Facilities',
    image: 'https://images.pexels.com/photos/6147076/pexels-photo-6147076.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: '3',
    title: 'Annual Sports Day Scheduled for June',
    date: 'April 22, 2025',
    excerpt: 'Mark your calendars for our Annual Sports Day, featuring exciting competitions and activities for all grade levels.',
    category: 'Events',
    image: 'https://images.pexels.com/photos/8363104/pexels-photo-8363104.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: '4',
    title: 'Brighton Students Excel in Mathematics Competition',
    date: 'April 15, 2025',
    excerpt: 'Our mathematics team secured top positions in the Regional Mathematics Competition, demonstrating exceptional problem-solving skills.',
    category: 'Achievement',
    image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
];

const News: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'Achievement', 'Events', 'Facilities', 'Announcements'];
  
  const filteredNews = activeCategory === 'All' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="section-title">
          <h2>Latest News & Announcements</h2>
          <p>Stay up to date with the latest happenings at Brighton Academy</p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-primary-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredNews.map((item, index) => (
            <div 
              key={item.id} 
              className="card group animate-slide-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-accent text-primary-900 text-xs font-bold px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar size={14} className="mr-1" />
                  {item.date}
                </div>
                
                <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary-700 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                
                <Link 
                  to={`/news-events#${item.id}`}
                  className="inline-flex items-center text-primary-700 font-medium hover:text-primary-900 transition-colors"
                >
                  Read more
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/news-events" className="btn-outline">
            View All News & Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;