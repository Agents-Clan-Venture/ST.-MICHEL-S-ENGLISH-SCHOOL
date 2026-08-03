import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { Calendar, Users, Award, ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const activities = [
  {
    id: 1,
    title: "Debate Club",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description:
      "Develop public speaking and critical thinking skills through competitive debate.",
  },
  {
    id: 2,
    title: "Robotics Team",
    image:
      "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description:
      "Build and program robots for regional and national competitions.",
  },
  {
    id: 3,
    title: "Art Club",
    image:
      "https://images.pexels.com/photos/8363143/pexels-photo-8363143.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description:
      "Express creativity through various mediums and participate in art exhibitions.",
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: "Science Fair",
    date: "March 15, 2024",
    location: "School Auditorium",
  },
  {
    id: 2,
    title: "Drama Performance",
    date: "March 20, 2024",
    location: "Theater Hall",
  },
  {
    id: 3,
    title: "Sports Day",
    date: "March 25, 2024",
    location: "Sports Complex",
  },
];

const ExtracurricularPage: React.FC = () => {
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    document.title = "Extracurricular & Activities | St. Michel's";
  }, []);

  return (
    <div className="w-[110vw] md:w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-primary-900 to-primary-800">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container relative text-center">
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex justify-center space-x-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li className="text-gray-300">/</li>
              <li className="text-white">Extracurricular & Activities</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Extracurricular & Activities
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover opportunities to explore your passions and develop new
            skills
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Enriching Student Life</h2>
            <p className="text-gray-700 mb-8">
              At St. Michel's, we believe that education extends beyond the
              classroom. Our diverse range of extracurricular activities
              provides students with opportunities to discover their passions,
              develop leadership skills, and build lasting friendships.
            </p>
          </motion.div>

          {/* Stats */}
          <div
            ref={statsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          >
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Users size={40} className="mx-auto mb-4 text-accent" />
              {statsInView && (
                <CountUp
                  end={30}
                  duration={2.5}
                  className="text-4xl font-bold text-primary-900"
                  suffix="+"
                />
              )}
              <p className="text-gray-600 mt-2">Active Clubs</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Award size={40} className="mx-auto mb-4 text-accent" />
              {statsInView && (
                <CountUp
                  end={50}
                  duration={2.5}
                  className="text-4xl font-bold text-primary-900"
                  suffix="+"
                />
              )}
              <p className="text-gray-600 mt-2">Annual Events</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Calendar size={40} className="mx-auto mb-4 text-accent" />
              {statsInView && (
                <CountUp
                  end={85}
                  duration={2.5}
                  className="text-4xl font-bold text-primary-900"
                  suffix="%"
                />
              )}
              <p className="text-gray-600 mt-2">Student Participation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Activities
          </h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {activities.map((activity) => (
              <SwiperSlide key={activity.id}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                    <p className="text-gray-600 mb-4">{activity.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Two-Column Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Events Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Calendar size={16} className="mr-2" />
                      {event.date}
                    </div>
                    <p className="text-gray-600">{event.location}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-4">
                  <li>
                    <Link
                      to="/admissions#calendar"
                      className="flex items-center text-primary-700 hover:text-primary-900"
                    >
                      <ArrowRight size={16} className="mr-2" />
                      Academic Calendar
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admissions#apply"
                      className="flex items-center text-primary-700 hover:text-primary-900"
                    >
                      <ArrowRight size={16} className="mr-2" />
                      Admissions & Registration
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/rules&reg"
                      className="flex items-center text-primary-700 hover:text-primary-900"
                    >
                      <ArrowRight size={16} className="mr-2" />
                      Rules & Regulations
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="flex items-center text-primary-700 hover:text-primary-900"
                    >
                      <ArrowRight size={16} className="mr-2" />
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExtracurricularPage;
