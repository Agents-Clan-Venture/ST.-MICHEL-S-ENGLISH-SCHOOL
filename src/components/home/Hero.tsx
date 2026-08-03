import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  cta?: {
    text: string;
    link: string;
  };
}

const slides: HeroSlide[] = [
  {
    id: 1,
    image: `${import.meta.env.BASE_URL}Home/Hero1.jpg`,
    title: "Welcome to St. Michel's",
    subtitle: "Where Knowledge Meets Excellence",
    cta: {
      text: "Apply Now",
      link: "/admissions#apply",
    },
  },
  {
    id: 2,
    image: `${import.meta.env.BASE_URL}Home/slide.jpg`,
    title: "Discover Our Programs",
    subtitle: "Comprehensive Education for Tomorrow's Leaders",
    cta: {
      text: "View Facilities",
      link: "/facilities",
    },
  },
  {
    id: 3,
    image: `${import.meta.env.BASE_URL}Home/af44.jpg`,
    title: "Join Our Community",
    subtitle: "A Supportive Environment for Every Student",
    cta: {
      text: "View Academics",
      link: "/academics",
    },
  },
  {
    id: 4,
    image: `${import.meta.env.BASE_URL}Home/aerial2.jpg`,
    title: "Know More About Us",
    subtitle: "A Warm & Welcoming Environment for Every Student",
    cta: {
      text: "Learn About Us",
      link: "/about",
    },
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-primary-900/40" />

          <div className="relative h-full container flex flex-col justify-center">
            <div className="max-w-3xl text-white animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100">
                {slide.subtitle}
              </p>
              {slide.cta && (
                <Link
                  to={slide.cta.link}
                  className="btn-accent inline-flex items-center"
                >
                  {slide.cta.text}
                  <ChevronRight size={18} className="ml-2" />
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-accent w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
