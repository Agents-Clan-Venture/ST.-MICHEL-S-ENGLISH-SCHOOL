import React from "react";
import assistantHeadmaster from "/Home/ahm1.png"; // Update this path to your actual image
import ahm2 from "/Home/ahm2.png"

const AssistantHeadmasterViews: React.FC = () => {
  return (
    <>
      <section className="section bg-gray-50 -mr-6">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="animate-slide-up">
            <div className="lg:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Assistant Headmaster Views
              </h2>

              <div className="mb-6 md:text-base text-sm font-semibold text-gray-700 space-y-4">
                <p>
                  As Assistant Headmaster of St. Michel's English School, I am
                  pleased to provide an insightful review of our institution for
                  inclusion in our prospectus. At St. Michel's English School, we
                  are dedicated to fostering academic excellence, holistic
                  development, and a nurturing environment for our students.
                </p>
                <p>
                  Our school prides itself on maintaining high academic
                  standards. We offer a comprehensive curriculum that is
                  designed to challenge and inspire students at every level. Our
                  team of experienced educators is committed to providing
                  engaging lessons, personalized support, and opportunities for
                  academic enrichment. Through innovative teaching methods
                  and state-of-the-art facilities, we empower our students to
                  excel academically and reach their full potential.
                </p>
                <p>
                  At St. Michel's English School, we understand the importance of
                  nurturing the whole child. In addition to academic pursuits, we
                  offer a wide range of extracurricular activities, including sports,
                  arts, music, and community service. These activities are
                  designed to cultivate leadership skills, creativity, teamwork, and
                  a sense of social responsibility. We believe that a well-rounded
                  education is essential for preparing students to succeed in an
                  ever-changing world.
                </p>
              </div>

              <div className="flex items-center mb-8">
                <div>
                  <h4 className="font-semibold text-lg">SRI MADHU KUMAR B V</h4>
                  <p className="text-gray-600">B.A., B.Ed (English)</p>
                  <p className="text-gray-600">Assistant Headmaster</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative max-w-md mx-auto">
              <img
                src={assistantHeadmaster}
                alt="Assistant Headmaster of St. Michel's"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section bg-gray-50 -mt-16 -ml-7">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="animate-slide-up">
            <div className="relative max-w-md mx-auto">
              <img
                src={ahm2}
                alt="Assistant Headmaster of St. Michel's"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
             
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="lg:pl-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Assistant Headmistress Views
              </h2>

              <div className="mb-6 md:text-base text-sm font-semibold text-gray-700 space-y-4">
                <p>
                  As a Assistant Headmistress of St. Michel's English School, I am
                  honored to share my perspective on our institution on our institution.
                  At our schoool, we prioritize student growth and well-being above
                  all else.
                </p>
                <p>
                  With a dynamic cirriculum , dedicated staff, and a nurturing
                  environment, we create an atmosphere where students are inspired
                  to learn, explore, and achieve their full potential. Join us at St.
                  Michel's English School and be a part of a vibrant community dedicated
                  to shaping future leaders and lifelong learners.
                </p>
                <p>
                  Moreover, our school prides itself on fostering a sense of community
                  and belonging. We celebrate diverisity, promote inclusivity, and
                  uphold values of respect, empathy, and integrity. Through our strong
                  bonds with students, staff, families, and the wider community, we
                  create a supportive network that nurtures growth and well-being.
                </p>
              </div>

              <div className="flex items-center mb-8">
                <div>
                  <h4 className="font-semibold text-lg">SMT GEETHA S M</h4>
                  <p className="text-gray-600">M.A., M.Ed (Kannada)</p>
                  <p className="text-gray-600">Assistant Headmistress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default AssistantHeadmasterViews;