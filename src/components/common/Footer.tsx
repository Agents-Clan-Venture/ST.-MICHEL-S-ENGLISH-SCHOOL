import React from "react";
import { Link } from "react-router-dom";
import logo from "/logo.png";
import {
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "+919902699638"; // Replace with your actual WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="w-[110vw] md:w-full bg-primary-900 text-white pt-16 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src={logo} className="w-12" alt="logo-footer" />
              <div>
                <h3 className="text-xl font-bold text-accent">
                  St. Michel's English School
                </h3>
                <p className="text-xs text-gray-300">Excellence in Education</p>
              </div>
            </Link>
            <p className="text-gray-300 mb-6">
              St. Michel's is committed to providing quality education and
              fostering academic excellence in a supportive environment.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1EUKC8yArG/"
                className="text-gray-300 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://youtube.com/@st.michelsenglishschoolkan7277?feature=shared"
                className="text-gray-300 hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.instagram.com/st.michels.kanakapura?igsh=MW9uMDFhNnV2dDYycA=="
                className="text-gray-300 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>

              <a
                href={whatsappLink}
                className="text-gray-300 hover:text-accent transition-colors"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-accent transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/admissions"
                  className="text-gray-300 hover:text-accent transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  to="/academics"
                  className="text-gray-300 hover:text-accent transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  to="/rules&reg"
                  className="text-gray-300 hover:text-accent transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Rules & Regulations
                </Link>
              </li>
              <li>
                <Link
                  to="/news-events"
                  className="text-gray-300 hover:text-accent transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  News & Events
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-300 hover:text-accent transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin
                  size={18}
                  className="text-accent mr-3 mt-1 flex-shrink-0"
                />
                <span className="text-gray-300">
                  Mysuru Main Road, Kanakapura , Bengaluru South District - 562
                  117
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-accent mr-3 flex-shrink-0" />
                <a
                  href="tel:+919902699638"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  +91 99026 99638
                </a>
              </li>
              {/* <li className="flex items-center">
                <Mail size={18} className="text-accent mr-3 flex-shrink-0" />
                <a href="mailto:info@brightonacademy.edu" className="text-gray-300 hover:text-accent transition-colors">
                  info@brightonacademy.edu
                </a>
              </li> */}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Newsletter
            </h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter to receive school updates and
              announcements.
            </p>
            <form className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full px-4 py-2 rounded-md bg-primary-800 text-white border border-primary-700 focus:outline-none focus:ring-2 focus:ring-accent placeholder-gray-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-dark text-primary-900 font-medium py-2 px-4 rounded-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="border-primary-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {currentYear} St. Michel's. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/rules&reg"
              className="hover:text-accent transition-colors"
            >
              Rules & Regulations
            </Link>
            <a
              href="/contact#map-frame"
              className="hover:text-accent transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
