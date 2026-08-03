import React, { useEffect, useState } from "react";
import { Award, Users, Book, Clock } from "lucide-react";
import anu from "/about/anu.jpg";
import basrkar from "/about/bhaskar2.jpg";
import vasantama from "/about/vasantama.png";
import susheela from "/about/susheela.png";
import gundama from "/about/gundama.png";
import nalini from "/about/nalini.png";
import chaitra from "/about/chaitra.jpg";
import bharath from "/about/barath.jpg";
import veerana from "/about/veerana.5facec7a.png";
import gulnaz from "/about/gulnaz.png";
import lakshmi from "/about/lakshmi.png";
import madhu from "/about/madhu.png";
import mission from "/about/School 09.jpg";
import welcome from "/about/School 06.jpg";

// data var
const boardMembers = [
  {
    name: "Smt.Anusuyadevi R. Srinivas",
    imgPath: anu,
    desig: "President of Devi Education School",
  },
  {
    name: "Sri.Bhaskar S",
    imgPath: basrkar,
    desig: "Secretary & Treasurer",
  },
  {
    name: "Mr.G H Veeranna",
    imgPath: veerana,
    desig: "Member of Devi Education Society",
  },
  {
    name: "Mrs.Chaitra H V",
    imgPath: chaitra,
    desig: "Member of Devi Education Society",
  },
  {
    name: "Mr.Bharath H V",
    imgPath: bharath,
    desig: "Member of Devi Education Society",
  },
];
const boardMembersVision = [
  {
    name: "Smt. Anusuyadevi R. Srinivas",
    imgPath: anu,
    scale: 1,
    desig: "President of Devi Education School",
    quote:
      "See others as you see yourself, Differences arise to stimulate not to discourage. Education polishes good natures and correct bad ones.",
    message:
      "Greetings to all from Devi Education Society for the commencement of the new Academic year in our new school building. We provide all facilities to our students. I hope that no student shall find any difficulty to pursue the education in our school.Parents are required to take special care to send children in full Uniform everyday. All students must attend the morning prayer before the classes begin. Already we are well equipped with service oriented staff. Parents may approach them & solve all the matters at an earliest Parental care is needed regularly for the perfection ineducation. As home is the first school and mother the first teacher; I wish all mothers to help children learn the basic good qualities at home so that they obey the teacher in class. I WISH ALL OF YOU A VERY BRIGHT FUTURE.",
  },
  {
    name: "Sri Bhaskar.S",
    imgPath: basrkar,
    scale: 1,
    desig: "Secretary & Treasurer",
    quote:
      "An honest man is the noblest work Of God, Be swift to hear, slow to speak, slower to anger, When we educate ourselves we build the power to accomplish our goals. Knowledge has bitter roots But sweet fruits.",
    message:
      "It is an honor to be here at St. Michel 's English School of all the Arts, Thanks to the hard work of caring parents, innovative educators and very committed students.I am here not only to congratulate everyone but also to uphold this school and students. We are going ahead with new ideas and advanced methods based on education in order to give our students the best possible chance in life. Weare the nation that has always understood our future is inextricably linked to the education of our children. I believe it is time to lead a new era of mutual responsibility in education. So let us all come together for the sake Of our children's success; A new era where each of us does our part to make that success a reality: Parents and teachers.This starts with fixing the promises that no child left behind his/her goals. I believe that the goals of this law are the right ones. My aim is to educate every child with excellent coaching with an advanced way of teaching. Our school will work hard and create a history in fulfilling the needs of our students.",
  },
  {
    name: "Smt. Vasanthamma K.",
    imgPath: vasantama,
    scale: 1.6,
    desig: `Head Mistress 
Msc, B.Ed`,
    quote:
      "Knowledge is power. Information is liberating. Education is the premise of progress,in every society, in every family.",
    message:
      "At St.Michael's English School we are committed to create a caring and safe atmosphere which promotes emotional,social and academic development. We aim at nurturing our students into fine human beings by imparting quality education and inculcating human values.Our school motto 'Little deeds with great Love Guides our students to work in harmony with one another. We wish to instil them with a sense of social awareness and responsibility.Our effort is to teach them to take pride in their rich cultural heritage.We aspire to provide a creative environment,which is both stimulating and challenging.Children learn best through doing and we give ample opportunities to explore experiment and discover with hands on equipment and materials in an adult directed setting.The integrated curriculum we follow promote learning through music, art, dance, drama,activities, field trips and outdoor play. The Learning and development of the children is not confined to the classrooms but is extended to the external environment. This allows the children to explore their surroundings and exercise their imagination.",
  },
];
const seniorStaff = [
  {
    name: "Mrs. Susheela K.V",
    imgPath: susheela,
    desig: "PUC NTT, Senior Staff",
    message:
      "I am in service as a teacher in this school from 28 years. My desire has been always a deserving teacher for deserved students of a deserved institution. I most of the times on different situations. am identified as St Michaers School Teacher. I always deemed it as a matter Of pride for my, this idenbfication- I am honestly proud Of the three *Qs• Quality Education. Quaified teachers, and Quality infrastructure For providing these three Qs thousands of students are enjoying unÄustatuses in the they all feel proud for being taught in the STMICHAEL'SSCHOOL THE PRIDE OF KANAKAPURA.",
  },
  {
    name: "Mrs. Gundamma K.T",
    imgPath: gundama,
    desig: "PUC.Ded, Senior Staff",
    message:
      "I have been rendering service sincerely in this school from the last 33 years I have sought an inexpressible delight in serving the school in many capacities as teacher, under the able leadership of chief trustee mrs Anusuya Devi Srinivas and Secretary Mr Bhaskar who are potentially divine and humanitarian outlook with all those who are connected with the school namely students staff parents. I overwhelmingly appGed all the best I have in me the determination,dedication and hard work to the task at hand for the school, a unique in its own.",
  },
  {
    name: "Smt. Nalini",
    imgPath: nalini,
    desig: "PUC.Ded, Senior Staff",
    message:
      'It was my cherished desire to be a dedicated teacher in a reputed school soon after my education. Most fortunate I was for availing this opportunity in St Michaels English schoool. Myhappiness knew no bounds. The students and management were added feathers to the crown of my aspiration in teaching I did serve with zeal and best as teacher and also my happiness knows no bounds I believe, all believe in the eternal and universal dictum. "An able alone is chosen by an able management for anable job". I love to contribute in the mission of the management in creating a model school in kanakapaura.',
  },
];
const deptStaff = [
  {
    name: "Gundamma K.T",
    imgPath: gundama,
    dept: "Book Section",
    qualification: "P.U.C, D.Ed",
    exp: "36 years experience in Hindi",
  },
  {
    name: "Gulnaz.G",
    imgPath: gulnaz,
    dept: "Uniform Section",
    qualification: "M.A, B.Ed",
    exp: "21 years experience in English",
  },
  {
    name: "Lakshmi.K",
    imgPath: lakshmi,
    dept: "Admission Section",
    qualification: "B.A, D.Ed",
    exp: "16 years experience in Social Science",
  },
];

const AboutPage: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    document.title = "About Us | St. Michel's";
  }, []);

  return (
    <div className="w-[110vw] md:w-full overflow-x-hidden">
      <section className="relative pt-32 pb-20 bg-primary-900">
        <div className="absolute inset-0 bg-primary-900 opacity-90"></div>
        <div className="container relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About St. Michel's English School
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Learn about our history, mission, and the values that drive our
            educational excellence
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg animate-slide-up">
              <Clock size={40} className="mx-auto mb-4 text-accent" />
              <h3 className="text-3xl font-bold mb-2">45+</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div
              className="text-center p-6 bg-gray-50 rounded-lg animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <Users size={40} className="mx-auto mb-4 text-accent" />
              <h3 className="text-3xl font-bold mb-2">900+</h3>
              <p className="text-gray-600">Students</p>
            </div>
            <div
              className="text-center p-6 bg-gray-50 rounded-lg animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Book size={40} className="mx-auto mb-4 text-accent" />
              <h3 className="text-3xl font-bold mb-2">70+</h3>
              <p className="text-gray-600">Staffs</p>
            </div>
            <div
              className="text-center p-6 bg-gray-50 rounded-lg animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Award size={40} className="mx-auto mb-4 text-accent" />
              <h3 className="text-3xl font-bold mb-2">30+</h3>
              <p className="text-gray-600">Awards</p>
            </div>
          </div>
        </div>
      </section>

      <section id="history" className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-6">
                welcome to{" "}
                <span className="text-accent font-extrabold">St.Michel's</span>{" "}
                English School
              </h2>
              <div className="space-y-4 text-gray-700 text-xl">
                <p>
                  Welcome to our prestigious English school, where excellence
                  and individuality converge. With a commitment to academic
                  rigor and personalized attention, we foster an environment
                  where students can truly shine.
                </p>
                <p>
                  Our dedicated faculty, comprised of passionate educators,
                  guide and inspire each student to reach their highest
                  potential. Small class sizes ensure that every student
                  receives the attention and support they need to excel
                  academically and personally.
                </p>
                <p>
                  Our holistic approach to education extends beyond the
                  classroom, offering a wide range of extracurricular activities
                  and opportunities for personal growth. With a focus on
                  character development, critical thinking, and global
                  awareness, we prepare our students to become well-rounded,
                  confident individuals ready to make a positive impact in an
                  ever-changing world.
                </p>
              </div>
            </div>
            <div
              className="relative animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <img
                src={welcome}
                alt="welcome to St. Michel's"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute bottom-4 right-4 bg-white p-3 rounded shadow hover:bg-[#fbbf24] transition-colors duration-300 cursor-pointer">
                <p className="text-sm font-medium">Est. 1981</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="section bg-white">
        <div className="container">
          <div className="section-title text-right">
            <h2>Our Mission</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className="relative animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <img
                src={mission}
                alt="St. Michel's mission"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="animate-slide-up">
              <div className="space-y-4 text-gray-700 text-xl">
                <p className="text-gray-700 mb-6">
                  At our school, our mission is to empower students to become
                  lifelong learners, critical thinkers, and compassionate global
                  citizens. We strive to provide a nurturing and inclusive
                  environment where every student is valued and encouraged to
                  reach their full potential. Through rigorous academic
                  programs, innovative teaching methods, and a focus on
                  character development, we aim to cultivate a love for learning
                  and instill core values such as integrity, resilience, and
                  empathy. We believe in fostering a strong partnership between
                  educators, students, and parents to create a collaborative
                  learning community. By nurturing curiosity, fostering
                  creativity, and promoting active engagement, we are committed
                  to preparing our students for success in an ever-evolving
                  world. Together, we inspire growth, ignite passion, and shape
                  leaders of tomorrow.
                </p>
              </div>
            </div>
          </div>
          <div className="border-l-4 text-lg border-accent pl-4 italic text-gray-600">
            Welcome to our prestigious English school, where excellence and
            individuality converge. With a commitment to academic rigor and
            personalized attention, we foster an environment where students can
            truly shine.
          </div>
        </div>
      </section>

      <section id="board-members" className="section bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2>Our Board members</h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {boardMembers.map((member) => (
              <div
                key={member.name}
                className="shadow-md rounded-xl overflow-hidden bg-white flex flex-col items-center hover:shadow-lg transition duration-300 ease-in-out"
              >
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src={member.imgPath}
                    alt={member.name}
                    className="w-full h-full mt-5 object-contain object-top transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="p-6 text-center space-y-2">
                  <h3 className="text-2xl font-bold">{member.name}</h3>
                  <p className="text-lg font-medium">{member.desig}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Checkout our Board members Vision</h2>
          </div>

          <div className="hidden md:flex md:flex-col gap-12">
            {boardMembersVision.map((member, index) => (
              <div className="shadow-md p-6 mb-6 bg-white rounded-lg">
                <div className="relative space-y-4 animate-slide-up">
                  {/* Floating Image */}
                  <img
                    src={member.imgPath}
                    alt={member.name}
                    style={{
                      float: index % 2 == 0 ? "left" : "right",
                      shapeOutside: "margin-box",
                      width: `calc(0.25 * ${member.scale} * 100%)`,
                      height: "auto",
                      [index % 2 == 0 ? "marginRight" : "marginLeft"]: "2rem",
                      marginBottom: "1rem",
                      objectFit: "cover",
                    }}
                    className="rounded-lg animate-slide-up"
                  />

                  {/* Info Beside Image */}
                  <div className="overflow-hidden">
                    {" "}
                    {/* forces height to contain floated image */}
                    <h3 className="text-3xl font-bold text-primary">
                      {member.name}
                    </h3>
                    <pre className="text-black font-semibold text-lg">
                      {member.desig}
                    </pre>
                    <p className="text-lg border-l-4 border-accent pl-4 italic text-gray-600 my-2">
                      {member.quote}
                    </p>
                  </div>

                  {/* Wrapping Message */}
                  <p className="text-gray-700 text-xl">
                    {expandedIndex === index
                      ? member.message
                      : `${member.message.slice(0, 200)}...`}
                  </p>

                  <button
                    className="w-full mt-2 text-blue-600 hover:underline block"
                    onClick={() => toggleExpand(index)}
                  >
                    {expandedIndex === index ? "Read less" : "Read more"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View */}
          <div className="flex flex-col gap-12 md:hidden">
            {boardMembersVision.map((member, index) => (
              <div className="flex md:flex-row flex-col shadow-md">
                <div className="flex justify-center">
                  <img
                    src={member.imgPath}
                    alt={member.name}
                    className={`rounded-lg ${member.scale == 1 && "w-1/2"} h-[${
                      100 * member.scale
                    }%] animate-slide-up`}
                  />
                </div>

                <div className="flex gap-12 text-lg">
                  <div className="bg-white p-8 rounded-lganimate-slide-up space-y-4">
                    <div>
                      <h3>{member.name}</h3>
                      <pre className="text-black font-bold">{member.desig}</pre>
                    </div>
                    <div className="border-l-4 border-accent pl-4 italic text-gray-600">
                      {member.quote}
                    </div>
                    <div className="transition-all duration-300 ease-in-out">
                      <p className="text-gray-700 mb-2">
                        {expandedIndex === index
                          ? member.message
                          : `${member.message.substring(0, 100)}...`}
                      </p>
                      <button
                        onClick={() => toggleExpand(index)}
                        className="text-accent font-semibold hover:underline"
                      >
                        {expandedIndex === index ? "Show Less" : "Read More"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* This is a placeholder for the senior staff section */}
      <section id="staffs" className="section bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2>Our Senior Staffs</h2>
          </div>

          <div className="hidden md:flex md:flex-col gap-12">
            {seniorStaff.map((member, index) => (
              <div className="shadow-md p-6 mb-6 bg-white rounded-lg">
                <div className="relative space-y-4 animate-slide-up">
                  {/* Floating Image */}
                  <img
                    src={member.imgPath}
                    alt={member.name}
                    style={{
                      float: index % 2 == 0 ? "left" : "right",
                      shapeOutside: "margin-box",
                      width: "30%",
                      [index % 2 == 0 ? "marginRight" : "marginLeft"]: "2rem",
                      marginBottom: "1rem",
                      objectFit: "cover",
                    }}
                    className="rounded-lg animate-slide-up"
                  />

                  {/* Info Beside Image */}
                  <div className="overflow-hidden">
                    {" "}
                    {/* forces height to contain floated image */}
                    <h3 className="text-3xl font-bold text-primary">
                      {member.name}
                    </h3>
                    <pre className="text-black font-semibold text-lg">
                      {member.desig}
                    </pre>
                  </div>

                  {/* Wrapping Message */}
                  <p className="text-gray-700 text-xl">
                    {expandedIndex === index
                      ? member.message
                      : `${member.message.slice(0, 200)}...`}
                  </p>

                  <button
                    className="w-full mt-2 text-blue-600 hover:underline block"
                    onClick={() => toggleExpand(index)}
                  >
                    {expandedIndex === index ? "Read less" : "Read more"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View */}
          <div className="flex flex-col gap-12 md:hidden">
            {seniorStaff.map((member, index) => (
              <div className="flex md:flex-row flex-col shadow-md">
                <div className="flex justify-center">
                  <img
                    src={member.imgPath}
                    alt={member.name}
                    className={`rounded-lg w-[80%] animate-slide-up`}
                  />
                </div>

                <div className="flex gap-12 text-lg">
                  <div className="bg-white p-8 rounded-lganimate-slide-up space-y-4">
                    <div>
                      <h3>{member.name}</h3>
                      <pre className="text-black font-bold">{member.desig}</pre>
                    </div>
                    <div className="transition-all duration-300 ease-in-out">
                      <p className="text-gray-700 mb-2">
                        {expandedIndex === index
                          ? member.message
                          : `${member.message.substring(0, 100)}...`}
                      </p>
                      <button
                        onClick={() => toggleExpand(index)}
                        className="text-accent font-semibold hover:underline"
                      >
                        {expandedIndex === index ? "Show Less" : "Read More"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="facilities" className="section bg-gray-50">
        <div className="container">
          <div className="section-title">
            <h2>Our Department Staffs</h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {deptStaff.map((member) => (
              <div
                key={member.name}
                className="shadow-md rounded-xl overflow-hidden bg-white flex flex-col items-center hover:shadow-lg transition duration-300 ease-in-out"
              >
                {/* Image */}
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src={member.imgPath}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="p-6 text-center space-y-2">
                  <h4 className="text-primary text-lg font-medium uppercase tracking-wide">
                    {member.dept}
                  </h4>
                  <h3 className="text-2xl font-bold">{member.name}</h3>
                  <pre className="text-gray-700 font-extrabold text-xl">
                    {member.qualification}
                  </pre>
                  <p className="text-gray-600 font-semibold text-lg">
                    {member.exp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
