import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import vasantama from "/Home/headmistress.jpg";

const Welcome: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="relative flex justify-center">
              <img
                src={`${import.meta.env.BASE_URL}Home/hm.jpg`}
                alt="Principal of St. Michel's"
                className="rounded-lg shadow-xl max-w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="lg:pl-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Welcome from the Headmistress
              </h2>

              <div className="mb-6 md:text-base text-sm font-semibold text-gray-700 space-y-4">
                <p>
                  Welcome to St. Michel’s English School, a nurturing ground for
                  academic excellence, character development, and holistic
                  education. Established under the Devi Education Society® in
                  1981, our school has grown to become one of the most respected
                  institutions in Kanakapura, known for its strong values,
                  dedicated faculty, and vibrant learning environment.
                </p>
                <p>
                  At St. Michel’s, we believe in empowering every child with the
                  skills and confidence to thrive in a changing world. With a
                  focus on both curricular and co-curricular activities, we
                  ensure that our students are not just academically prepared,
                  but also socially responsible and emotionally strong
                  individuals.
                </p>
                <p>
                  We are proud of our committed team of over 40+ teaching and
                  30+non-teaching staff who work together to uphold the school's
                  mission of providing quality, inclusive, and value-based
                  education. I warmly invite you to be a part of our school
                  community where every child’s potential is nurtured and
                  celebrated.
                </p>
              </div>

              <div className="flex items-center mb-8">
                <div>
                  <h4 className="font-semibold text-lg">VASANTHAMMA K</h4>
                  <p className="text-gray-600">Headmistress, St. Michel's</p>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex text-lg md:text-xl items-center text-primary-700 font-medium  hover:text-accent transition-colors"
              >
                Learn more about our school
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
