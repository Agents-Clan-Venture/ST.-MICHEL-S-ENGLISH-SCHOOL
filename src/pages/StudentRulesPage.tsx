//
import React from "react";

const SchoolRulesPage = () => {
  const rules = [
    {
      number: 1,
      title: "Attendance and Punctuality",
      content: [
        "Students must attend school regularly and be punctual",
        "A minimum of 85% attendance is required to be eligible for examinations and promotions",
        "Leave must be informed in advance through a written application signed by parents/guardians",
      ],
    },
    {
      number: 2,
      title: "Uniform and Appearance",
      content: [
        "Students must wear the prescribed school uniform neatly and with pride",
        "ID cards must be worn at all times",
        "Hair must be neat; boys must maintain a proper haircut, and girls must tie hair as instructed",
      ],
    },
    {
      number: 3,
      title: "Conduct and Discipline",
      content: [
        "Students must maintain respectful behavior towards staff, peers, and school property",
        "Use of foul language, bullying, or any form of misconduct will lead to disciplinary action",
        "Mobile phones, gadgets, or valuables are strictly prohibited on campus",
      ],
    },
    {
      number: 4,
      title: "Academics",
      content: [
        "All students must complete classwork, homework, and project work on time",
        "Participation in exams, tests, and school activities is mandatory",
        "Copying or malpractice during exams will result in strict action",
      ],
    },
    {
      number: 5,
      title: "School Property",
      content: [
        "Students must respect and take care of school property. Any damage must be compensated",
        "Littering and defacing walls or desks are strictly prohibited",
      ],
    },
    {
      number: 6,
      title: "Communication",
      content: [
        "Parents are expected to attend all PTMs and maintain regular communication with teachers",
        "School notices sent through the diary/app must be read and acknowledged promptly",
      ],
    },
    {
      number: 7,
      title: "Health and Safety",
      content: [
        "Students must maintain personal hygiene and cleanliness",
        "Bringing sharp objects, firecrackers, or harmful items is strictly banned",
      ],
    },
    {
      number: 8,
      title: "Co-curricular Participation",
      content: [
        "Students are encouraged to actively take part in sports, cultural events, and club activities",
        "Participation in national, state, or interschool competitions must be done with prior approval",
      ],
    },
    {
      number: 9,
      title: "Library and Labs",
      content: [
        "Maintain silence and discipline in the library and laboratories",
        "Books and lab equipment must be handled with care and returned on time",
      ],
    },
    {
      number: 10,
      title: "School Timings",
      content: [
        "Students must report to school on time as per the schedule",
        "No student is allowed to leave the school premises without written permission during school hours",
      ],
    },
  ];

  const RuleCard = ({ rule, index }) => (
    <div
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-8 border border-gray-100 animate-fade-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-center mb-6">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold text-lg mr-4 flex-shrink-0">
          {rule.number}
        </div>
        <h3 className="text-blue-700 text-xl font-semibold leading-tight">
          {rule.title}
        </h3>
      </div>
      <div className="text-gray-600">
        <ul className="space-y-3">
          {rule.content.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-blue-600 font-bold text-lg mr-3 mt-0.5">
                •
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="w-[110vw] md:w-full min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-br from-blue-900 to-blue-900 text-white pb-12 text-center relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full opacity-40"></div>
          <div className="absolute top-80 right-80 w-2 h-2 bg-white rounded-full opacity-20"></div>
          <div className="absolute top-60 left-40 w-1 h-1 bg-white rounded-full opacity-30"></div>
          <div className="absolute bottom-40 right-20 w-2 h-2 bg-white rounded-full opacity-40"></div>
        </div>

        <section className="relative pt-32 pb-20 bg-transparent">
          <div className="absolute inset-0 bg-transparent opacity-90"></div>
          <div className="container relative text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Rules & Regulations
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We uphold a set of rules and regulations that ensure a safe,
              respectful, and productive learning environment for all students,
              staff, and parents.
            </p>
          </div>
        </section>
      </header>

      {/* Main Content */}
      <main className="relative z-20 -mt-16 pb-16">
        <div className="max-w-6xl mx-auto px-5">
          {/* Introduction Section */}
          <section className="bg-white rounded-xl shadow-lg p-10 mb-12 border border-gray-100">
            <h2 className="text-blue-700 text-3xl font-semibold mb-4">
              A Well-Rounded Experience
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At St. Michel's, we believe that education extends beyond the
              classroom. Our comprehensive rules and regulations ensure that all
              students, staff, and parents work together to create an
              environment that fosters academic excellence, character
              development, and mutual respect among all members of our school
              community.
            </p>
          </section>

          {/* Important Notice */}
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-amber-300 rounded-xl p-8 mb-12">
            <p className="text-amber-800 font-medium leading-relaxed">
              <span className="text-2xl mr-2">⚠️</span>
              <strong>Important:</strong> These guidelines ensure a harmonious
              educational environment that promotes learning, growth, and the
              development of responsible citizens.
            </p>
          </div>

          {/* Rules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {rules.map((rule, index) => (
              <RuleCard key={rule.number} rule={rule} index={index} />
            ))}
          </div>

          {/* Footer Section */}
          <section className="bg-white rounded-xl shadow-lg p-10 text-center border border-gray-100">
            <h3 className="text-blue-700 text-2xl font-semibold mb-4">
              St. Michel's English School
            </h3>
            <div className="text-blue-700 font-semibold mb-4">
              Building Bright Futures since 1981
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              These rules and regulations are designed to create an environment
              conducive to learning, growth, and character development. We
              appreciate your cooperation in maintaining the standards that make
              our school a place of excellence.
            </p>
            <div className="text-gray-500 italic text-sm">
              For queries, please contact the school administration
            </div>
          </section>
        </div>
      </main>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SchoolRulesPage;
