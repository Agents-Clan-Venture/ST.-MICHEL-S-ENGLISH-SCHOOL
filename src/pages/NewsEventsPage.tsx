import React, { useState, useEffect } from "react";
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import { NewsItem } from "../types";
import prize from "/Gallery/AcadAchiev.jpg";
import pta from "/news/pta.jpg";
import clean from "/news/cleandrive.jpg";
import independence from "/news/independence-2026.jpg";
import republic from "/news/republic-2026.jpg";
import sports from "/news/sportsday-2026.jpg";
import mentalHealth from "/news/mental-health.jpg";
import careerGuidance from "/news/career-guidance.jpg";
import environmentDay from "/news/environment-day.jpg";

const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "80th Independence Day Celebrations at St. Michel's English School",
    date: "August 15, 2026",
    excerpt: `St. Michel's English School celebrated the 80th Independence Day of India with great pride, patriotism, and enthusiasm. The celebration brought together the school management, teachers, and students to honour the nation and remember the sacrifices of the freedom fighters who contributed to India's independence.

The programme was graced by Sri. R. Rameshiah, Inspector, Border Security Force, as the Chief Guest. Sri. Bhaskar S., School Secretary; Smt. Vasantamma K., Head Teacher; Sri. Mahalinga K. M., Vice President of the Parent-Teacher Association; and Sri. Mahadev, Joint Secretary, were also present on the occasion.

The celebration commenced with the hoisting of the National Flag, followed by the National Anthem. The Chief Guest addressed the students and shared inspiring thoughts on patriotism, discipline, national unity, and the responsibilities of young citizens.

The school celebrated the occasion with a vibrant array of cultural programmes. Students enthusiastically participated in various performances, showcasing their creativity, confidence, and love for the country. Continuing the school's tradition, the students also participated in a mass dance performance at the Taluk Stadium as part of the 80th Independence Day celebrations.

The celebration concluded on a joyful and memorable note with the distribution of breakfast and sweets to all the children. The occasion inspired students to understand their role as responsible citizens and to uphold the values of unity, integrity, and service to the nation.`,
    category: "Events",
    image: independence,
  },
  {
    id: "2",
    title: "World Environment Day - Learning from Nature",
    date: "June 5, 2026",
    excerpt: `St. Michel's English School observed World Environment Day on 5th June 2026 with a meaningful educational visit for the primary section students. As part of the celebration, the young learners visited a plantation near Kodihalli, giving them an opportunity to step beyond the classroom and experience the beauty and importance of nature firsthand.

Surrounded by lush greenery and a variety of plants and trees, the students explored the plantation with great curiosity and enthusiasm. The visit helped them understand the importance of trees, plants, clean air, biodiversity, and protecting our natural environment.

The students also learned how plantations contribute to maintaining ecological balance and why caring for trees and the environment is an important responsibility for everyone. The experience encouraged them to develop a greater appreciation for nature and adopt environmentally responsible habits in their everyday lives.

The visit reinforced the message that protecting nature today helps create a healthier and greener tomorrow. At St. Michel's English School, initiatives such as these encourage children to learn through experience, connect with nature, and grow into responsible young guardians of the environment.`,
    category: "Campus Life",
    image: environmentDay,
  },
  {
    id: "3",
    title: "Republic Day Celebrations at St. Michel's English School",
    date: "January 26, 2026",
    excerpt: `St. Michel's English School celebrated Republic Day with great pride, patriotism, and enthusiasm, bringing together students, teachers, and the school management to commemorate the adoption of the Constitution of India and celebrate the values that shape our democratic nation.

The celebration commenced with the hoisting of the National Flag, followed by the National Anthem. An inspiring address highlighted the significance of Republic Day and reminded students of the importance of understanding the Constitution, democracy, equality, freedom, and civic responsibility.

The celebration was enriched by a variety of colourful cultural programmes presented by the students. Patriotic songs, dances, speeches, skits, and other performances reflected the rich cultural heritage of India and beautifully conveyed the message of unity in diversity.

Continuing the school's tradition of community participation, students also took part in a patriotic group dance at the Town Field, proudly representing St. Michel's English School and spreading the message of national unity and pride among the community.

The celebrations concluded on a warm and joyful note with the distribution of breakfast and sweets to the students and staff, nurturing national pride, unity, discipline, and a sense of responsibility among young minds.`,
    category: "Events",
    image: republic,
  },
  {
    id: "4",
    title: "Annual Sports Day Celebrations 2025-26",
    date: "",
    excerpt: `The Annual Sports Day at St. Michel's English School was celebrated with great enthusiasm, energy, and sporting spirit. One of the most eagerly awaited events of the academic year, the celebration provided students with an opportunity to showcase their athletic abilities while developing the values of teamwork, discipline, perseverance, and sportsmanship.

The programme commenced with a grand march-past by the school houses, reflecting discipline, unity, and team spirit. Students enthusiastically took part in a variety of track and field events, displaying speed, strength, agility, and determination. Individual races, relays, jumps, and other sporting events provided opportunities for students of different age groups and abilities to participate and give their best.

The playground came alive with cheers, house flags, enthusiastic supporters, and the spirited participation of students. Every event reflected the importance of fair play, healthy competition, cooperation, and respect for fellow participants.

The outstanding performances of the winners were recognised through the distribution of medals, certificates, and appreciation, encouraging students to continue pursuing excellence in sports and other areas of life.

The event reinforced the belief that sports play an important role in building confidence, resilience, leadership, discipline, and character among young learners. At St. Michel's English School, Annual Sports Day continues to be a celebration of fitness, friendship, teamwork, and the joy of sporting excellence.`,
    category: "Campus Life",
    image: sports,
  },
  {
    id: "5",
    title: "Mental Health Awareness Programme - Nurturing Healthy Minds",
    date: "",
    excerpt: `St. Michel's English School organised a Mental Health Awareness Programme to create awareness among students about the importance of emotional well-being, positive thinking, and maintaining a healthy mind. The programme was conducted in association with the Rotary Club of Kanakapura Milk City, under the Rotary-sponsored Interact initiative.

The session provided students with an opportunity to understand the importance of mental health, emotional balance, self-confidence, and healthy communication. Through an engaging and informative interaction, students were encouraged to recognise their emotions, express their feelings openly, manage everyday challenges, and seek support whenever needed.

The programme emphasised that mental well-being is an essential part of a healthy and successful life. Students were encouraged to develop positive habits, build supportive relationships, show empathy towards others, and approach challenges with confidence and resilience.

The initiative reflected the school's commitment to the holistic development of students, focusing not only on academic excellence but also on their emotional and social well-being. St. Michel's English School sincerely appreciates the Rotary Club of Kanakapura Milk City for supporting this meaningful initiative.

"A healthy mind is the foundation of a happy, confident and successful life."`,
    category: "Events",
    image: mentalHealth,
  },
  {
    id: "6",
    title: "Career Guidance Programme - Empowering Students for a Brighter Future",
    date: "",
    excerpt: `St. Michel's English School, Kanakapura, hosted an insightful Career Guidance Programme for the students of Classes 9 and 10, aimed at helping young learners understand the importance of informed career choices and future planning.

The programme was jointly organised by Rotary Bengaluru Kanakapura Road and Rotary Kanakapura Milk City, in association with MARGHAM - Career Guidance Initiative. The session was attended by around 180 students from Classes 9 and 10, who actively participated with great interest and enthusiasm.

The guidance session focused on helping students gain a better understanding of the wide range of career opportunities available to them, while encouraging them to identify their interests, strengths, abilities, and aspirations. Students were guided on the importance of making thoughtful academic and career decisions rather than following choices based solely on external influences.

The interactive nature of the programme encouraged students to ask questions, explore different possibilities, and think confidently about their future.

St. Michel's English School sincerely appreciates Rotary Bengaluru Kanakapura Road, Rotary Kanakapura Milk City, and MARGHAM - Career Guidance Initiative for their valuable support, inspiring students to dream ambitiously, make informed choices, and take confident steps towards building a successful and fulfilling future.`,
    category: "Events",
    image: careerGuidance,
  },
  {
    id: "7",
    title: "St. Michel's Wins Best School Award in Academic Achievement",
    date: "November 27, 2024",
    excerpt: `We are incredibly proud to announce that St. Michel's English School has been awarded the "Best School Award in Academic Achievement" at the State FAP Awards 2024! This esteemed recognition, presented on November 27, 2024, is a testament to the hard work, dedication, and excellence of our students, teachers, and the entire school community. We extend our heartfelt gratitude to FAP for this honour.`,
    category: "Achievement",
    image: prize,
  },
  {
    id: "8",
    title: "Unique Child - Parent Awareness Program",
    date: "",
    excerpt: `At St. Michel's English School, we believe that every child is unique, and parental involvement plays a vital role in their holistic development. To strengthen this bond and enhance understanding, the school organized a "Unique Child" Parent Program, conducted by our school secretary, Mr. Bhaskar S.

The session witnessed enthusiastic participation from parents across all grades. The program focused on understanding the individual needs and learning styles of children, encouraging positive parenting techniques, the importance of home-school partnership, and supporting children emotionally and academically in their growth journey.

Mr. Bhaskar S. addressed the gathering with insightful guidance and practical tips, helping parents reflect on their roles in nurturing a balanced and confident child. The interactive session created a strong sense of connection between the school and parents, reinforcing our shared commitment to every child's success.`,
    category: "Events",
    image: pta,
  },
  {
    id: "9",
    title: "Environment Awareness Program - Clean Campus Drive",
    date: "",
    excerpt: `At St. Michel's English School, we believe in nurturing not just young minds, but also responsible citizens. As part of our Environment Awareness Program, students took part in a campus and surroundings clean-up drive to promote cleanliness and environmental care.

Wearing gloves and working in teams, our students enthusiastically cleaned dry leaves, litter, and waste from school premises and nearby areas. The activity instilled the importance of hygiene, sustainability, and teamwork.

"Clean surroundings reflect a clean mind. Let's begin with our school, our second home."

This hands-on effort aimed to inspire students to value their environment and carry forward the habit of cleanliness into their homes and communities.`,
    category: "Campus Life",
    image: clean,
  },
];

/**
 * Events are read from the academic calendar (public/calendarData.csv,
 * May 2026 - Apr 2027) and filtered to dates from today onwards, so this
 * page stays current automatically as the year progresses.
 */
type CalendarEvent = { date: Date; note: string; isHoliday: boolean };

const parseCalendarEvents = (csv: string): CalendarEvent[] => {
  const events: CalendarEvent[] = [];
  // Academic year starts May 2026; a day number lower than the previous
  // row's marks the start of the next month.
  let month = 4;
  let year = 2026;
  let prevDay = 0;
  for (const line of csv.trim().split("\n").slice(1)) {
    const [dateStr, , ...rest] = line.split(",");
    const day = parseInt(dateStr, 10);
    if (isNaN(day)) continue;
    if (day < prevDay) {
      month++;
      if (month > 11) {
        month = 0;
        year++;
      }
    }
    prevDay = day;
    const note = rest
      .join(",")
      .trim()
      .replace(/^"|"$/g, "")
      .replace(/,{2,}\s*/g, ": ")
      .trim();
    // Skip empty days and plain Sunday holidays
    if (!note || note.toLowerCase() === "holiday") continue;
    events.push({
      date: new Date(year, month, day),
      note,
      isHoliday: note.toLowerCase().includes("holiday"),
    });
  }
  return events;
};

const formatEventDate = (d: Date) =>
  d.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const formatShortDate = (d: Date) =>
  d.toLocaleDateString("en-IN", { day: "numeric", month: "short" });

const NewsEventsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"news" | "events">("news");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>([]);
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([]);
  const itemsPerPage = 6;

  useEffect(() => {
    fetch("/calendarData.csv")
      .then((r) => r.text())
      .then((csv) => setCalendarEvents(parseCalendarEvents(csv)))
      .catch((err) => console.error("Failed to load calendar events:", err));
  }, []);

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const upcomingEvents = calendarEvents.filter((e) => e.date >= today);

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
                        <img loading="lazy" decoding="async"
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
                  {upcomingEvents.slice(0, 12).map((event) => (
                    <div
                      key={event.date.toISOString() + event.note}
                      className="bg-white rounded-lg shadow-md overflow-hidden flex"
                    >
                      <div
                        className={`w-20 flex-shrink-0 flex flex-col items-center justify-center text-white ${
                          event.isHoliday ? "bg-red-500" : "bg-primary-900"
                        }`}
                      >
                        <span className="text-2xl font-bold leading-none">
                          {event.date.getDate()}
                        </span>
                        <span className="text-xs uppercase tracking-wide mt-1">
                          {event.date.toLocaleDateString("en-IN", {
                            month: "short",
                          })}
                        </span>
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg md:text-xl font-bold">
                          {event.note}
                        </h3>
                        <div className="text-gray-600 mt-1 text-sm flex items-center">
                          <Calendar size={14} className="mr-1.5" />
                          {formatEventDate(event.date)}
                          {event.isHoliday && (
                            <span className="ml-3 bg-red-100 text-red-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                              Holiday
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  {calendarEvents.length > 0 && upcomingEvents.length === 0 && (
                    <p className="text-gray-500 bg-white rounded-lg shadow-md p-6">
                      The current academic year has ended. The new calendar
                      will be published soon.
                    </p>
                  )}
                  {calendarEvents.length === 0 && (
                    <p className="text-gray-500 bg-white rounded-lg shadow-md p-6">
                      Loading events...
                    </p>
                  )}
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
                      {upcomingEvents.slice(0, 6).map((event) => (
                        <li
                          key={event.date.toISOString() + event.note}
                          className="flex"
                        >
                          <div className="bg-primary-100 text-primary-800 text-xs font-semibold px-2 py-1 rounded w-20 text-center mr-3 flex-shrink-0 self-start">
                            {formatShortDate(event.date)}
                          </div>
                          <div>
                            <p className="font-medium">{event.note}</p>
                          </div>
                        </li>
                      ))}
                      {upcomingEvents.length === 0 && (
                        <li className="text-gray-500 text-sm">
                          No upcoming dates.
                        </li>
                      )}
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
