// import React, { useState, useEffect } from 'react';

// const DepartmentsPage: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<'extracurricular' | 'school'>('extracurricular');

//   useEffect(() => {
//     document.title = 'Departments | ST. MICHEL’S ENGLISH SCHOOL';
//   }, []);

//   const extracurricularActivities = [
//     {
//       title: "Karate & Dance Classes",
//       description: " For physical fitness and creative expression.",
//       image: "https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=1600",
//       features: ["Self-Defense Skills", "Discipline", "Confidence Building"]
//     },
//     {
//       title: "Bandset Classes",
//       description: " Enhancing rhythm, discipline, and team spirit.",
//       image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1600",
//       features: ["Instrument Proficiency", "Music Theory", "Performance Skills"]
//     },
//     {
//       title: "Scouts and Guides",
//       description: "Instilling responsibility, leadership, and service values.",
//       image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1600",
//       features: ["Outdoor Skills", "Community Service", "Leadership Training"]
//     },
//     {
//       title: "Music Ensemble",
//       description: "Various musical groups including choir, band, and orchestra for different skill levels.",
//       image: "https://images.pexels.com/photos/164743/pexels-photo-164743.jpeg?auto=compress&cs=tinysrgb&w=1600",
//       features: ["Concert Performances", "Music Theory", "Individual Coaching"]

//     },
//     {
//       title: "Cultural Activity Clubs",
//       description: "Promoting talent in music, drama, drawing, and more.",
//       image: "https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=1600",
//       features: ["Leadership Development", "Event Planning", "Community Service"]
//     },
//     {
//       title: "Huge Play Area ",
//       description: "For physical development and recreational activities.",
//       image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=1600",
//       features: ["Sports Activities", "Team Building", "Physical Fitness"]
//     }
//   ];

//   const schoolActivities = [
//     {
//       title: "Science Lab",
//       description: "Hands-on learning and experimentation.",
//       image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1600",
//       features: ["Peer Tutoring", "Study Groups", "Academic Counseling"]
//     },
//     {
//       title: "Library",
//       description: "A rich collection of books and resources for all age groups.",
//       image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1600",
//       features: ["Quiet Study Areas", "Research Assistance", "Reading Programs"]
//     },
//     {
//       title: "3D Smart Classrooms",
//       description: "Interactive learning using advanced technology.",
//       image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1600",
//       features: ["Research Databases", "Study Spaces", "Technology Access"]
//     },
//     {
//       title: "Auditorium",
//       description: "For school events, seminars, and celebration.",
//       image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1600",
//       features: ["Event Hosting", "Performance Space", "Community Engagement"]
//     },
//     {
//       title: "Digital Learning App",
//       description: " Supporting home learning and academic revision.",
//       image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1600",
//       features: ["Digital Classrooms", "Coding Programs", "Tech Support"]
//     },
//     {
//       title: "Student Communication App",
//       description: "Updates, notices, homework, and attendance.",
//       image: "https://images.pexels.com/photos/8471822/pexels-photo-8471822.jpeg?auto=compress&cs=tinysrgb&w=1600",
//       features: ["IEP Support", "Learning Accommodations", "Specialized Instruction"]
//     }
//   ];

//   const currentActivities = activeTab === 'extracurricular' ? extracurricularActivities : schoolActivities;

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 bg-primary-900">
//         <div className="absolute inset-0 bg-primary-900 opacity-90"></div>
//         <div className="container relative text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Facilities</h1>
//           <p className="text-xl text-gray-200 max-w-3xl mx-auto">
//             Discover our rigorous curriculum and innovative approach to education
//           </p>
//         </div>
//       </section>

//       {/* Toggle Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center max-w-3xl mx-auto mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
//               Academic Excellence Through Specialized Programs
//             </h2>
//             <p className="text-gray-700 text-lg leading-relaxed">
//               ST. Michel's offers comprehensive programs designed to nurture student growth both inside and outside the classroom.
//               Explore our extracurricular activities and essential school services.
//             </p>
//           </div>

//           {/* Tab Navigation */}
//           <div className="flex justify-center mb-12">
//             <div className="bg-gray-100 p-1 rounded-lg inline-flex">
//               <button
//                 onClick={() => setActiveTab('extracurricular')}
//                 className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
//                   activeTab === 'extracurricular'
//                     ? 'bg-blue-600 text-white shadow-md'
//                     : 'text-gray-600 hover:text-gray-900'
//                 }`}
//               >
//                 Extracurricular Activities
//               </button>
//               <button
//                 onClick={() => setActiveTab('school')}
//                 className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
//                   activeTab === 'school'
//                     ? 'bg-blue-600 text-white shadow-md'
//                     : 'text-gray-600 hover:text-gray-900'
//                 }`}
//               >
//                 School Activities
//               </button>
//             </div>
//           </div>

//           {/* Activities Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {currentActivities.map((activity, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
//               >
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={activity.image}
//                     alt={activity.title}
//                     className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
//                     {activity.title}
//                   </h3>
//                   <p className="text-gray-600 mb-4 leading-relaxed">
//                     {activity.description}
//                   </p>
//                   <div className="space-y-2">
//                     <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Features:</h4>
//                     {activity.features.map((feature, featureIndex) => (
//                       <div key={featureIndex} className="flex items-center text-sm text-gray-600">
//                         <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0" />
//                         {feature}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Call to Action */}
//           <div className="text-center mt-16">
//             <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 max-w-4xl mx-auto">
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                 Ready to Get Involved?
//               </h3>
//               <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
//                 Join our vibrant community and discover opportunities to grow, learn, and make lasting connections.
//                 Contact our team to learn more about enrollment and participation.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg">
//                   Contact Admissions
//                 </button>
//                 <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-300">
//                   Schedule Tour
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default DepartmentsPage;

import React, { useState, useEffect } from "react";
import f1 from "/Facilities/Karate.png";
import f2 from "/Facilities/band.jpg";
import f3 from "/Facilities/Scouts.png";
import f4 from "/Facilities/Cultural.png";
import f5 from "/Facilities/playg.jpg";
import f6 from "/Facilities/Science_Lab.jpg";
import f7 from "/Facilities/Library.png";
import f8 from "/Facilities/Classroom.png";
import f9 from "/Facilities/Auditorium.jpg";
import f10 from "/Facilities/Digital.jpg";
import f11 from "/Facilities/Student_Comm.jpg";
import f12 from "/Facilities/Security.png";
import f13 from "/Facilities/Bus.png";
import f14 from "/Facilities/BusTracking.png";
import f15 from "/Facilities/Staff.jpg";



const DepartmentsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "extracurricular" | "school" | "safety"
  >("extracurricular");

  useEffect(() => {
    document.title = "Departments | ST. MICHEL'S ENGLISH SCHOOL";
  }, []);

  const extracurricularActivities = [
    {
      title: "Karate & Dance Classes",
      description: " For physical fitness and creative expression.",
      image: f1,
      features: ["Self-Defense Skills", "Discipline", "Confidence Building"],
    },
    {
      title: "Bandset Classes",
      description: " Enhancing rhythm, discipline, and team spirit.",
      image: f2,
      features: [
        "Instrument Proficiency",
        "Music Theory",
        "Performance Skills",
      ],
    },
    {
      title: "Scouts and Guides",
      description: "Instilling responsibility, leadership, and service values.",
      image: f3,
      features: ["Outdoor Skills", "Community Service", "Leadership Training"],
    },
    {
      title: "Cultural Activity Clubs",
      description: "Promoting talent in music, drama, drawing, and more.",
      image: f4,
      features: [
        "Leadership Development",
        "Event Planning",
        "Community Service",
      ],
    },
    {
      title: "Huge Play Area ",
      description: "For physical development and recreational activities.",
      image: f5,
      features: ["Sports Activities", "Team Building", "Physical Fitness"],
    },
  ];

  const schoolActivities = [
    {
      title: "Science Lab",
      description: "Hands-on learning and experimentation.",
      image: f6,
      features: ["Peer Tutoring", "Study Groups", "Academic Counseling"],
    },
    {
      title: "Library",
      description:
        "A rich collection of books and resources for all age groups.",
      image: f7,
      features: [
        "Quiet Study Areas",
        "Research Assistance",
        "Reading Programs",
      ],
    },
    {
      title: "3D Smart Classrooms",
      description: "Interactive learning using advanced technology.",
      image: f8,
      features: ["Research Databases", "Study Spaces", "Technology Access"],
    },
    {
      title: "Auditorium",
      description: "For school events, seminars, and celebration.",
      image: f9,
      features: ["Event Hosting", "Performance Space", "Community Engagement"],
    },
    {
      title: "Digital Learning App",
      description: " Supporting home learning and academic revision.",
      image: f10,
      features: ["Digital Classrooms", "Coding Programs", "Tech Support"],
    },
    {
      title: "Student Communication App",
      description: "Updates, notices, homework, and attendance.",
      image: f11,
      features: [
        "IEP Support",
        "Learning Accommodations",
        "Specialized Instruction",
      ],
    },
  ];

  const safetyActivities = [
    {
      title: "CCTV Surveillance",
      description: "24/7 monitoring across the campus for complete security.",
      image: f12,
      features: [
        "24/7 Monitoring",
        "Campus-wide Coverage",
        "Security Personnel",
      ],
    },
    {
      title: "School Transportation",
      description: "Safe and reliable bus services across routes.",
      image: f13,
      features: ["Trained Drivers", "Regular Maintenance", "Multiple Routes"],
    },
    {
      title: "School Bus Tracking System",
      description: "Real-time location updates for parents.",
      image: f14,
      features: ["GPS Tracking", "Parent Notifications", "Real-time Updates"],
    },
    {
      title: "Dedicated Staff",
      description:
        "40+ Teaching Staff and 30+ Non-Teaching Staff ensuring quality education and care.",
      image: f15,
      features: ["Trained Personnel", "Experienced Teachers", "Caring Staff"],
    },
  ];

  const getCurrentActivities = () => {
    switch (activeTab) {
      case "extracurricular":
        return extracurricularActivities;
      case "school":
        return schoolActivities;
      case "safety":
        return safetyActivities;
      default:
        return extracurricularActivities;
    }
  };

  const currentActivities = getCurrentActivities();

  return (
    <div
      id="facilities"
      className="w-[110vw] md:w-full min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-900">
        <div className="absolute inset-0 bg-primary-900 opacity-90"></div>
        <div className="container relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Facilities
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover our rigorous curriculum and innovative approach to
            education
          </p>
        </div>
      </section>

      {/* Toggle Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Academic Excellence Through Specialized Programs
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              ST. Michel's offers comprehensive programs designed to nurture
              student growth both inside and outside the classroom. Explore our
              extracurricular activities and essential school services.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-lg inline-flex">
              <button
                onClick={() => setActiveTab("extracurricular")}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === "extracurricular"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Extracurricular Activities
              </button>
              <button
                onClick={() => setActiveTab("school")}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === "school"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                School Activities
              </button>
              <button
                onClick={() => setActiveTab("safety")}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === "safety"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Safety & Security
              </button>
            </div>
          </div>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentActivities.map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {activity.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">
                      Key Features:
                    </h4>
                    {activity.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Get Involved?
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Join our vibrant community and discover opportunities to grow,
                learn, and make lasting connections. Contact our team to learn
                more about enrollment and participation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="admissions"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg cursor-pointer"
                >
                  Contact Admissions
                </a>
                <a
                  href="contact"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  Schedule Tour
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DepartmentsPage;
