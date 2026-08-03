import React, { useEffect } from "react";
import {
  FaBook,
  FaChalkboardTeacher,
  FaClipboardCheck,
  FaLaptop,
  FaBalanceScale,
  FaTrophy,
  FaUsers,
  FaSeedling,
} from "react-icons/fa";

import img from "../../public/img2.jpg";

const AcademicsPage: React.FC = () => {
  useEffect(() => {
    document.title = "Academics | St. Michel's";
  }, []);

  const Section = ({
    icon: Icon,
    title,
    children,
  }: {
    icon: React.ElementType;
    title: string;
    children: React.ReactNode;
  }) => (
    <section className="bg-white border border-gray-200 shadow-sm rounded-xl p-6 md:p-10 my-8 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4 gap-3">
        <Icon className="text-primary-700 text-xl" />
        <h3 className="text-2xl font-semibold text-primary-900">{title}</h3>
      </div>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </section>
  );

  return (
    <div className="w-[110vw] md:w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-900">
        <div className="absolute inset-0 bg-primary-900 opacity-90"></div>
        <div className="container relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Academics
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover our rigorous curriculum and innovative approach to
            education
          </p>
        </div>
      </section>

      {/* Academics Overview */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Academic Life at St. Michel’s English School
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  At St. Michel's English School, academic life is designed to
                  nurture every student's intellectual, moral, and personal
                  development. We believe in a balanced and value-based
                  education that prepares students not only for exams but for
                  life.
                </p>
                <p>
                  Our academic program is built on a strong foundation in core
                  subjects including mathematics, science, language arts, social
                  studies, and foreign languages. We complement these with
                  enriching experiences in the arts, physical education, and
                  technology.
                </p>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <img
                src={img}
                alt="Students in classroom"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Sections */}
      <section className="bg-gray-50 py-16">
        <div className="container max-w-5xl">
          <Section icon={FaBook} title="Curriculum and Instruction">
            <p>
              Our academic program follows the Karnataka State Syllabus,
              enriched with activity-based learning and a student-centric
              approach. Each subject is taught with emphasis on conceptual
              clarity and real-life applications.
            </p>
            <ul className="list-disc list-inside mt-4">
              <li>Languages: English, Kannada, Hindi</li>
              <li>
                Core Subjects: Mathematics, Science, Social Science, Computer
                Science
              </li>
              <li>
                Value Education: Moral science and life skills are integrated
                across classes
              </li>
            </ul>
          </Section>

          <Section icon={FaClipboardCheck} title="Continuous Assessment">
            <p>
              We conduct Formative (FA) and Summative (SA) assessments to track
              student progress. Regular class tests, assignments, project work,
              and oral evaluations ensure a complete understanding of subjects.
            </p>
          </Section>

          <Section icon={FaChalkboardTeacher} title="Teaching Methodology">
            <ul className="list-disc list-inside">
              <li>Smart boards and digital aids</li>
              <li>Group discussions, role play, and presentations</li>
              <li>Field trips and experiments</li>
              <li>Remedial classes for slow learners</li>
              <li>Special coaching for board exams (Std. 10)</li>
            </ul>
          </Section>

          <Section icon={FaLaptop} title="Library and Resource Access">
            <p>
              The school library offers a rich collection of books, newspapers,
              and educational magazines. Students are encouraged to develop
              reading habits and research skills from a young age.
            </p>
          </Section>

          <Section icon={FaBalanceScale} title="Discipline and Ethics">
            <p>
              Academic life at St. Michel’s is rooted in discipline, respect,
              and responsibility. Regular diary checks, punctuality, neat
              uniforms, and polite behavior are all part of our academic
              culture.
            </p>
          </Section>

          <Section icon={FaTrophy} title="Extracurricular Support">
            <ul className="list-disc list-inside">
              <li>Science exhibitions</li>
              <li>Debate and elocution competitions</li>
              <li>Quiz programs</li>
              <li>Spelling bee and story writing contests</li>
            </ul>
          </Section>

          <Section icon={FaUsers} title="Parent-Teacher Interaction">
            <ul className="list-disc list-inside">
              <li>PTMs (Parent Teacher Meetings)</li>
              <li>Student diaries and app notifications</li>
              <li>Progress report discussions</li>
            </ul>
          </Section>

          <Section icon={FaSeedling} title="Holistic Development">
            <ul className="list-disc list-inside">
              <li>Critical thinking</li>
              <li>Creative expression</li>
              <li>Teamwork</li>
              <li>Respect for diversity</li>
            </ul>
          </Section>
        </div>
      </section>
    </div>
  );
};

export default AcademicsPage;
