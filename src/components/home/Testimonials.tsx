import React, { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import { Testimonial } from "../../types";
import neha from "/Home/testimonials/neha.jpg";
import jeevan from "/Home/testimonials/JEEVAN H.jpeg";
import preetham from "/Home/testimonials/PREETHAM M.jpeg";
import mithun from "/Home/testimonials/mitun.jpg";
import gowda from "/about/gowda.jpg";

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Preetham M",
    role: "Alumni",
    content:
      "I studied in st Michel's English school. According to me School Life is the best time of my life as I got  new friends. School time is the only time which I  enjoy most, and when I enter college, I  always miss my school life. School life teaches us lots of new things and prepares us to face all the challenges of life.",
    avatar: preetham,
  },
  {
    id: "2",
    name: "Jeevan H",
    role: "Alumni",
    content:
      "I think whoever joins this school may not be passed out as a Rank student, but one will be well disciplined and empathize. It's been a 13 years of bonding with prestigious school. Got to learn enough behavioural skills through which lead me to continuously acquire knowledge.",
    avatar: jeevan,
  },
  {
    id: "3",
    name: "Mithun",
    role: "Alumni",
    content:
      "I have studied 11 years in St Michael's English school from 2008-2019.I passed out in 2019.I spend 1 decade in this school.Many of my friends changed 1-2 schools to complete their schooling.but I haven't, because that atmosphere our school gave for me.",
    avatar: mithun,
  },
  {
    id: "4",
    name: "Neha R Gowda",
    role: "Alumni",
    content:
      "The individual attention and care by the faculty in SMES to each student is highly Commendable I attended this school nearly a decade ago and have only great things to say about my experience. The teachers are amazing, the curriculum is second to none and each child is treated with care.",
    avatar: neha,
  },
  {
    id: "5",
    name: "Vishruth Gowda R",
    role: "Parent",
    content:
      "Your commitment to our child's development is invaluable.  We are very happy that our child feels safe and supported at this school.",
    avatar: gowda,
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute w-64 h-64 rounded-full bg-accent/5 -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 rounded-full bg-primary-100/10 -bottom-40 -right-40"></div>
      </div>

      <div className="container relative">
        <div className="section-title">
          <h2>What People Say About Us</h2>
          <p>Hear from our community of students, parents, and alumni</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative py-10">
            <Quote
              size={60}
              className="absolute text-accent/20 top-0 left-0 transform -translate-x-1/4 -translate-y-1/4"
            />

            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-opacity duration-700 ${
                  index === activeIndex
                    ? "opacity-100"
                    : "opacity-0 absolute top-0 left-0"
                }`}
              >
                <div className="text-center">
                  <p className="text-xl text-gray-700 italic mb-8 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  <div className="flex flex-col items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full object-cover mb-3"
                    />
                    <div>
                      <h4 className="font-semibold text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex
                    ? "bg-accent w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
