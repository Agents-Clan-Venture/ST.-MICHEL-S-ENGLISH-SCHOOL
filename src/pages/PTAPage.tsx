import React, { useEffect } from "react";
import {
  Users,
  MessageSquare,
  HeartHandshake,
  ShieldCheck,
  UserCheck,
  GraduationCap,
} from "lucide-react";
import ptaImg from "/about/pta.png";

const highlights = [
  {
    icon: MessageSquare,
    title: "Open Communication",
    text: "A direct bridge between parents and teachers, keeping every family informed and heard.",
  },
  {
    icon: HeartHandshake,
    title: "Active Involvement",
    text: "Parents participate meaningfully in school events, initiatives, and decision-making.",
  },
  {
    icon: GraduationCap,
    title: "Student Development",
    text: "Focused support for students' academic, social, and personal growth at every stage.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Environment",
    text: "Working together to keep our school a positive, safe, and nurturing place to learn.",
  },
];

const committee = [
  {
    icon: UserCheck,
    role: "Vice President",
    text: "Leads the PTA and represents the parent community in school matters.",
  },
  {
    icon: Users,
    role: "Joint Secretary",
    text: "Coordinates meetings, communication, and PTA activities throughout the year.",
  },
  {
    icon: GraduationCap,
    role: "Class Representatives",
    text: "One representative from each class (Nursery to Grade 10), so every class has a voice in supporting the school's growth and student welfare.",
  },
];

const PTAPage: React.FC = () => {
  useEffect(() => {
    document.title = "Parent Teacher Association | St. Michel's";
  }, []);

  return (
    <div className="w-[110vw] md:w-full overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary-900">
        <div className="absolute inset-0 bg-primary-900 opacity-90"></div>
        <div className="container relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Parent Teacher Association (PTA)
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Parents and teachers working hand in hand for every child's success
          </p>
        </div>
      </section>

      {/* About the PTA */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-6">
                A Partnership Built on{" "}
                <span className="text-accent font-extrabold">Trust</span>
              </h2>
              <div className="space-y-4 text-gray-700 text-xl">
                <p>
                  The Parent Teacher Association (PTA) at St. Michel's English
                  School is a collaborative platform that strengthens the
                  partnership between parents, teachers, and the school.
                </p>
                <p>
                  The PTA promotes open communication, active parent
                  involvement, and meaningful support for students' academic,
                  social, and personal development, helping create a positive,
                  safe, and nurturing learning environment.
                </p>
              </div>
            </div>
            <div
              className="relative animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <img
                src={ptaImg}
                alt="Parent Teacher Association at St. Michel's"
                className="rounded-lg shadow-xl w-full object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-white p-3 rounded shadow hover:bg-[#fbbf24] transition-colors duration-300 cursor-pointer">
                <p className="text-sm font-medium">Together for our children</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What the PTA stands for */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2>What the PTA Stands For</h2>
            <p>
              Four pillars that guide everything our Parent Teacher Association
              does.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon size={40} className="mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Committee */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-title">
            <h2>The PTA Committee</h2>
            <p>
              The PTA Committee ensures that every class, from Nursery to Grade
              10, has a voice in supporting the school's growth and student
              welfare.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {committee.map((member, index) => (
              <div
                key={member.role}
                className="shadow-md rounded-xl bg-gray-50 p-8 text-center space-y-4 hover:shadow-lg transition duration-300 ease-in-out animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-primary-900 flex items-center justify-center">
                  <member.icon size={28} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold">{member.role}</h3>
                <p className="text-gray-600 text-lg">{member.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 border-l-4 text-lg border-accent pl-4 italic text-gray-600 max-w-4xl mx-auto">
            When parents and teachers work together, every child wins. The PTA
            is our promise that home and school move forward as one.
          </div>
        </div>
      </section>
    </div>
  );
};

export default PTAPage;
