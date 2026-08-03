import React, { useState, useEffect } from "react";
import { Calendar, ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { NewsItem, Event } from "../types";
import prize from "/Gallery/AcadAchiev.jpg";
import republic from "/news/republic.jpg";
import independence from "/news/independence.jpg";
import sports from "/news/sportsday.jpg";
import pta from "/news/pta.jpg";
import clean from "/news/cleandrive.jpg";

const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "St. Michel's Wins Best School Award in Academic Achievement",
    date: "November 27, 2024",
    excerpt: `We are incredibly proud to announce that St. Michel's English School has been awarded the "Best School Award in Academic Achievement" at the State FAP Awards 2024! This esteemed recognition, presented on November 27, 2024, is a testament to the hard work, dedication, and excellence of our students, teachers, and the entire school community. We extend our heartfelt gratitude to FAP for this honour.`,
    category: "Achievement",
    image: prize,
  },
  {
    id: "2",
    title: "Republic Day Celebration",
    date: "January 26, 2025",
    excerpt: `At St. Michel's English School, Republic Day is celebrated each year with great pride and enthusiasm on the school premises. The day begins with the flag hoisting ceremony, followed by the National Anthem and an address highlighting the importance of the Indian Constitution and our duties as citizens.

The celebration features vibrant cultural programs including patriotic songs, skits, and dance performances by students that reflect the spirit of unity and diversity. A special procession to the Town Field is organized, where our students actively participate and present a patriotic group dance in front of the community.

As part of the tradition, a wholesome breakfast is served to all students and staff. The program concludes with sweet distribution, symbolizing harmony and sharing.

The Republic Day celebration at our school instills national pride, encourages student participation, and reinforces the values of democracy, equality, and unity among young minds.`,
    category: "Events",
    image: republic,
  },
  {
    id: "3",
    title: "Annual Sports Day Celebration",
    date: "",
    excerpt: `At St. Michel’s English School, the Annual Sports Day is one of the most awaited and vibrant events of the academic year. It is celebrated with great energy and excitement, aiming to promote physical fitness, teamwork, and sportsmanship among students.

The event begins with the march-past by all houses, followed by the hoisting of the school flag and an inspiring opening address by the Chief Guest. The students participate enthusiastically in various track and field events, including sprints, relays, long jump, and more.

Fun games and team events are also organized for pre-primary students and staff, making the celebration inclusive and joyful. The entire playground comes alive with cheers, colorful house flags, and coordinated drills showcasing discipline and coordination.

Winners are awarded medals and certificates to encourage their dedication and sporting spirit. The day concludes with the National Anthem and a message of motivation and pride from the school management.

The Annual Sports Day not only fosters a spirit of healthy competition but also helps in building character, resilience, and leadership among students.
`,
    category: "Campus Life",
    image: sports,
  },
  {
    id: "4",
    title: "Independence Day Celebration",
    date: "August 15, 2024",
    excerpt: `The Independence Day celebration at St. Michel's English School was a proud and colorful event, filled with patriotism and unity. Held on the school campus, the event brought together students, staff, and management to honor the nation's freedom.

As seen in the photograph, the day began with the hoisting of the national flag, followed by the National Anthem and inspiring speeches about India’s journey toward independence. Students dressed in vibrant ethnic and patriotic attire, proudly waving the Tricolor, showcased their love for the country.

The celebration featured cultural performances, including dances, patriotic songs, and role plays representing national leaders and freedom fighters. The students' spirited presentation reflected the values of unity, sacrifice, and pride in our nation.

The management also recognized student participants with appreciation certificates. A refreshing breakfast and sweet distribution added warmth to the celebration, ensuring everyone felt included and honored.

This memorable day reminded every student of their responsibility as young citizens and inspired them to contribute positively to the future of our nation.
`,
    category: "Events",
    image: independence,
  },
  {
    id: "5",
    title: "Unique Child - Parent Awareness Program",
    date: "",
    excerpt: `At St. Michel's English School, we believe that every child is unique, and parental involvement plays a vital role in their holistic development. To strengthen this bond and enhance understanding, the school organized a “Unique Child” Parent Program, conducted by our school secretary, Mr. Bhaskar S.

The session witnessed enthusiastic participation from parents across all grades, as seen in the image. The program focused on:

Understanding the individual needs and learning styles of children

Encouraging positive parenting techniques

The importance of home-school partnership

Supporting children emotionally and academically in their growth journey

Mr. Bhaskar S. addressed the gathering with insightful guidance and practical tips, helping parents reflect on their roles in nurturing a balanced and confident child.

The interactive session created a strong sense of connection between the school and parents, reinforcing our shared commitment to every child's success.
`,
    category: "Events",
    image: pta,
  },
  {
    id: "6",
    title: "Environment Awareness Program - Clean Campus Drive",
    date: "",
    excerpt: `At St. Michel's English School, we believe in nurturing not just young minds, but also responsible citizens. As part of our Environment Awareness Program, students took part in a campus and surroundings clean-up drive to promote cleanliness and environmental care.

Wearing gloves and working in teams, our students enthusiastically cleaned dry leaves, litter, and waste from school premises and nearby areas. The activity instilled the importance of hygiene, sustainability, and teamwork.

“Clean surroundings reflect a clean mind. Let's begin with our school, our second home.”

This hands-on effort aimed to inspire students to value their environment and carry forward the habit of cleanliness into their homes and communities. The school regularly encourages such eco-conscious practices to help students grow into environmentally aware individuals.
`,
    category: "Campus Life",
    image: clean,
  },
];

const upcomingEvents: Event[] = [
  {
    id: "1",
    title: "School Level Prathiba Karanji",
    date: "July 28, 2025",
    time: "3:00 PM - 7:00 PM",
    location: "All Classrooms",
    description:
      "Schedule appointments to meet with your child's teachers and discuss academic progress.",
  },
  {
    id: "2",
    title: "78th Independence Day",
    date: "August 15, 2025",
    time: "7:00 PM",
    location: "Auditorium",
    description:
      "Join us for an evening of music featuring performances by our band, orchestra, and choir.",
  },
  {
    id: "3",
    title: "Educational Trip for all the classes",
    date: "November, 2025",
    time: "9:00 AM - 2:00 PM",
    location: "Gymnasium",
    description:
      "Students will present their research projects and scientific investigations.",
  },
  {
    id: "4",
    title: "Parents Sports",
    date: "November, 2025",
    time: "10:00 AM - 3:00 PM",
    location: "Sports Fields",
    description:
      "A day of athletic competitions and activities for all grade levels.",
  },
  {
    id: "5",
    title: "Annual Sports Day Celebration",
    date: "December, 2025",
    time: "5:00 PM",
    location: "Main Quad",
    description:
      "Celebrating our graduating seniors as they prepare for their next chapter.",
  },
  {
    id: "6",
    title: "45th Scoool Fest",
    date: "January, 2026",
    time: "5:00 PM",
    location: "Main Quad",
    description:
      "Celebrating our graduating seniors as they prepare for their next chapter.",
  },
];

const NewsEventsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"news" | "events">("news");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>([]);
  const itemsPerPage = 6;

  const categories = [
    "All",
    "Achievement",
    "Events",
    "Announcements",
    "Facilities",
    "Campus Life",
    "Arts",
  ];

  useEffect(() => {
    document.title = "News & Events | St. Michel's";
  }, []);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredNews(newsItems);
    } else {
      setFilteredNews(
        newsItems.filter((item) => item.category === activeCategory)
      );
    }
    setCurrentPage(1);
  }, [activeCategory]);

  const [expandedNews, setExpandedNews] = useState<string | null>(null);

  const toggleNews = (id: string) => {
    setExpandedNews(expandedNews === id ? null : id);
  };

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="w-[110vw] md:w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-900">
        <div className="absolute inset-0 bg-primary-900 opacity-90"></div>
        <div className="container relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            News & Events
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Stay updated with the latest news and upcoming events at St.
            Michel's
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="container">
          <div className="flex justify-center">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                onClick={() => setActiveTab("news")}
                className={`px-8 py-3 text-sm font-medium rounded-l-md ${
                  activeTab === "news"
                    ? "bg-primary-900 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                News & Announcements
              </button>
              <button
                onClick={() => setActiveTab("events")}
                className={`px-8 py-3 text-sm font-medium rounded-r-md ${
                  activeTab === "events"
                    ? "bg-primary-900 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                Upcoming Events
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* News Content */}
      {activeTab === "news" && (
        <section className="section bg-gray-50">
          <div className="container">
            <div className="flex flex-wrap justify-center mb-10 gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-primary-900 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {currentItems.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentItems.map((item, index) => (
                    <div
                      key={item.id}
                      id={item.id}
                      className="card group cursor-pointer animate-slide-up transition-shadow hover:shadow-lg h-fit"
                      onClick={() => toggleNews(item.id)}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="relative overflow-hidden h-48">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="bg-accent text-primary-900 text-xs font-bold px-3 py-1 rounded-full">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-5">
                        <div className="flex items-center text-gray-500 text-sm mb-2">
                          <Calendar size={14} className="mr-1" />
                          {item.date.length > 0 ? item.date : "N/A"}
                        </div>

                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-700 transition-colors">
                          {item.title}
                        </h3>

                        {/* Summary/excerpt */}
                        {/* Combined excerpt with hidden expandable text */}
                        <p className="text-gray-600 mb-2">
                          {item.excerpt.slice(0, 120)}
                          {item.excerpt.length > 120 && (
                            <>
                              {expandedNews !== item.id ? "..." : ""}
                              {expandedNews === item.id && (
                                <span className="inline">
                                  {item.excerpt.slice(120)}
                                </span>
                              )}
                            </>
                          )}
                        </p>

                        {/* Chevron */}
                        <div className="mt-2 text-primary-700 flex items-center font-medium transition-transform duration-300">
                          {expandedNews === item.id ? (
                            <span className="flex items-center">
                              Show less <ArrowLeft size={16} className="ml-1" />
                            </span>
                          ) : (
                            <span className="flex items-center">
                              Read more{" "}
                              <ArrowRight size={16} className="ml-1" />
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center mt-12">
                    <nav className="flex items-center space-x-2">
                      <button
                        onClick={() =>
                          paginate(currentPage > 1 ? currentPage - 1 : 1)
                        }
                        disabled={currentPage === 1}
                        className={`p-2 rounded-md ${
                          currentPage === 1
                            ? "text-gray-400 cursor-not-allowed"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                        aria-label="Previous page"
                      >
                        <ArrowLeft size={16} />
                      </button>

                      {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                          key={index}
                          onClick={() => paginate(index + 1)}
                          className={`w-10 h-10 rounded-md ${
                            currentPage === index + 1
                              ? "bg-primary-900 text-white"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {index + 1}
                        </button>
                      ))}

                      <button
                        onClick={() =>
                          paginate(
                            currentPage < totalPages
                              ? currentPage + 1
                              : totalPages
                          )
                        }
                        disabled={currentPage === totalPages}
                        className={`p-2 rounded-md ${
                          currentPage === totalPages
                            ? "text-gray-400 cursor-not-allowed"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                        aria-label="Next page"
                      >
                        <ArrowRight size={16} />
                      </button>
                    </nav>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">
                  No news found for this category.
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Events Content */}
      {activeTab === "events" && (
        <section className="section bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>

                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div
                      key={event.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      <div className="w-full text-left">
                        <div className="p-6 flex items-center justify-between">
                          <div>
                            <h3 className="text-xl font-bold">{event.title}</h3>
                            <div className="text-gray-600 mt-1">
                              {event.date}
                            </div>
                          </div>
                          {/* <ChevronDown
                            size={20}
                            className={`transform transition-transform duration-300 ${
                              expandedEvent === event.id ? "rotate-180" : ""
                            }`}
                          /> */}
                        </div>
                      </div>

                      {/* <div
                        className={`transition-all duration-300 ${
                          expandedEvent === event.id ? "max-h-96" : "max-h-0"
                        } overflow-hidden`}
                      >
                        <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <div className="text-sm font-medium text-gray-500">
                                Time
                              </div>
                              <div className="text-gray-900">{event.time}</div>
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-500">
                                Location
                              </div>
                              <div className="text-gray-900">
                                {event.location}
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-700">{event.description}</p>
                        </div>
                      </div> */}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
                  <div className="bg-primary-900 text-white p-4">
                    <h3 className="text-xl font-bold">Academic Calendar</h3>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold mb-4">
                      Upcoming Important Dates
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex">
                        <div className="bg-primary-100 text-primary-800 text-xs font-semibold px-2 py-1 rounded w-24 text-center mr-3 flex-shrink-0">
                          July 28
                        </div>
                        <div>
                          <p className="font-medium">
                            Parent-Teacher Conferences
                          </p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="bg-primary-100 text-primary-800 text-xs font-semibold px-2 py-1 rounded w-24 text-center mr-3 flex-shrink-0">
                          August 15
                        </div>
                        <div>
                          <p className="font-medium">Spring Concert</p>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <button className="w-full btn-outline">
                        <a href="/admissions#calendar">View Full Calendar</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default NewsEventsPage;
