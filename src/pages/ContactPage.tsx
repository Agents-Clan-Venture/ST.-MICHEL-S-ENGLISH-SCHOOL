import React, { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    document.title = "Contact Us | St. Michel's";
    // Initialize EmailJS
    emailjs.init("YOUR_PUBLIC_KEY");
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.subject ||
      !formData.message
    ) {
      setFormError("Please fill in all fields");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setFormError("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setFormError(null);

    try {
      await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_email: "workp1407@gmail.com",
      });

      setFormSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setFormError("Failed to send message. Please try again later.");
      console.error("EmailJS Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-[110vw] md:w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-900">
        <div className="absolute inset-0 bg-primary-900 opacity-90"></div>
        <div className="container relative text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            We're here to answer your questions and help you connect with our
            community
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section bg-white" ref={ref}>
        <div className="container">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div
              variants={fadeIn}
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} className="text-primary-900" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Our Location</h3>
              <p className="text-gray-700">
                Mysuru Main Road, Kanakapura, Bengaluru South District - 562 117
                <br />
                India
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={24} className="text-primary-900" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone Numbers</h3>
              <p className="text-gray-700 mb-2">
                <span className="block font-medium">Primary:</span>
                <a href="tel:+919606769953" className="hover:text-primary-900">
                  +91 9606-769953
                </a>
              </p>
              <p className="text-gray-700">
                <span className="block font-medium">Secondary:</span>
                <a href="tel:+918197292244" className="hover:text-primary-900">
                  +91 8197-292244
                </a>
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={24} className="text-primary-900" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Addresses</h3>

              <p className="text-gray-700 mb-2 break-words">
                <span className="block font-medium">General Inquiries:</span>
                <a
                  href="mailto:info@stmichels.edu"
                  className="hover:text-accent text-primary-800 break-words"
                >
                  stmichelsurveyforms@gmail.com
                </a>
              </p>

              <p className="text-gray-700 break-words">
                <span className="block text-center font-medium">
                  Admissions:
                </span>
                <a
                  href="mailto:admissions@stmichels.edu"
                  className="hover:text-accent text-primary-800 break-words"
                >
                  st.michelsenglishschool@gmail.com
                </a>
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={24} className="text-primary-900" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
              <p className="text-gray-700 mb-2">
                <span className="block font-medium">Monday - Friday:</span>
                9:30 AM - 4:30 PM
              </p>
              <p className="text-gray-700 mb-2">
                <span className="block font-medium">Saturday:</span>
                9:30 AM to 1:30 PM
              </p>
              <p className="text-gray-700">
                <span className="block font-medium">Sunday:</span>
                Closed
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-700 mb-8">
                Whether you have a question about our programs, admissions
                process, or anything else, we're here to help. Fill out the form
                below and we'll get back to you as soon as possible.
              </p>

              {formSubmitted ? (
                <div className="bg-green-50 text-green-800 p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-semibold mb-2">Thank You!</h3>
                  <p>
                    Your message has been sent successfully. We'll get back to
                    you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formError && (
                    <div className="bg-red-50 text-red-800 p-4 rounded-lg">
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Student Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Enter student name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Enter your mobile number"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Class
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      >
                        <option value="">Select Class</option>
                        <option value="Baby Day Care">Baby Day Care</option>
                        <option value="Baby Class">Baby Class</option>
                        <option value="L.K.G">L.K.G</option>
                        <option value="U.K.G">U.K.G</option>
                        <option value="Class 1">Class 1</option>
                        <option value="Class 2">Class 2</option>
                        <option value="Class 3">Class 3</option>
                        <option value="Class 4">Class 4</option>
                        <option value="Class 5">Class 5</option>
                        <option value="Class 6">Class 6</option>
                        <option value="Class 7">Class 7</option>
                        <option value="Class 8">Class 8</option>
                        <option value="Class 9">Class 9</option>
                        <option value="Class 10">Class 10</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Place
                    </label>
                    <input
                      type="text"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Enter your place"
                      required
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`btn-primary hover:scale-105 transition-transform duration-300 ${
                        isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Find Us</h2>
              <div id="map-frame" className="bg-white p-4 rounded-lg shadow-md">
                <div className="aspect-w-16 aspect-h-9">
                  <div className="mt-8 rounded-lg overflow-hidden h-[450px] shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.6176444494595!2d77.4179625!3d12.541469999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae5850a8044921%3A0x50a6630d74280f58!2sSt.%20Michel's%20English%20School%2C%20Kanakapura!5e0!3m2!1sen!2sin!4v1687078702811!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Directions</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <span className="font-medium">From Bangalore City:</span>{" "}
                    Take Mysore Road (NH275) towards Kanakapura. St. Michel's
                    English School will be on your right side in Kanakapura
                    town.
                  </p>
                  <p>
                    <span className="font-medium">Public Transportation:</span>{" "}
                    Take KSRTC buses from Bangalore to Kanakapura. The school is
                    easily accessible from the main bus stand.
                  </p>
                  <p>
                    <span className="font-medium">Parking:</span> Visitor
                    parking is available on campus premises. Please check in at
                    the main gate upon arrival.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-accent p-6 rounded-lg text-primary-900">
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <p className="mb-4">
                  Have a quick question? Reach out to us on WhatsApp!
                </p>
                <a
                  href="https://wa.me/919606769953"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors hover:scale-105  duration-300"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
