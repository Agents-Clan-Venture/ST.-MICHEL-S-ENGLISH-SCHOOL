import React, { useState, useEffect } from "react";
import { GalleryItem } from "../types";
import g1 from "/Gallery/g1.png";
import g2 from "/Gallery/g2.png";
import g3 from "/Gallery/g3.png";
import g4 from "/Gallery/g4.png";
import g5 from "/Gallery/g5.png";
import g6 from "/Gallery/g6.png";
import g7 from "/Gallery/g7.png";
import g8 from "/Gallery/g8.png";
import g9 from "/Gallery/g9.png";
import g10 from "/Gallery/g10.png";
import g11 from "/Gallery/Physical.png";
import g12 from "/Gallery/Focus.png";
import g13 from "/Gallery/Kids_Play_Area.jpg";
import g14 from "/Gallery/InterClass_Comp.jpg";
import g15 from "/Gallery/ScienceLab.jpg";
import g16 from "/Gallery/AcadAchiev.jpg";
import g17 from "/Gallery/AnnualDay.jpg";
import g18 from "/Gallery/Celeb.jpg";
import g19 from "/Gallery/KidsActivity.jpg";
import g20 from "/Gallery/g20.png";
import g21 from "/Gallery/g21.png";

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    image: g1,
    category: "Events",
    title: "Prize Distribution",
    description:
      "Students receiving awards for their academic and extra-curricular achievements.",
  },
  {
    id: "2",
    image: g2,
    category: "Academics",
    title: "Computer Science Laboratory",
    description:
      "Students engaged in hands-on learning in the computer science lab.",
  },
  {
    id: "3",
    image: g3,
    category: "Campus Life",
    title: "Indoor Play Area",
    description:
      "Students enjoying various activities in the indoor play area.",
  },
  {
    id: "4",
    image: g4,
    category: "Events",
    title: "Teacher's Day Celebration",
    description:
      "Students celebrating Teacher's Day with various activities and performances.",
  },
  {
    id: "5",
    image: g5,
    category: "Arts",
    title: "Creative Expression",
    description:
      "Students showcasing their artistic talents through various forms of creative expression.",
  },
  {
    id: "6",
    image: g6,
    category: "Campus Life",
    title: "Graduation Ceremony",
    description:
      "Celebrating the achievements of our graduating students with a memorable ceremony.",
  },
  {
    id: "7",
    image: g7,
    category: "Campus Life",
    title: "Morning Assembly",
    description:
      "Students participating in the morning assembly, fostering a sense of community and school spirit.",
  },
  {
    id: "8",
    image: g8,
    category: "Academics",
    title: "Outdoor Learning",
    description:
      "Students enjoying our beautiful campus during outdoor learning activities.",
  },
  {
    id: "9",
    image: g9,
    category: "Events",
    title: "Independence Day Celebration",
    description:
      "Students celebrating Independence Day with various activities and performances.",
  },
  {
    id: "10",
    image: g10,
    category: "Campus Life",
    title: "Extracurricular Activities",
    description:
      "Students participating in various extracurricular activities.",
  },
  {
    id: "11",
    image: g11,
    category: "Sports",
    title: "Physical Education",
    description: "Students participating in physical education activities.",
  },
  {
    id: "12",
    image: g12,
    category: "Academics",
    title: "Attention Focus",
    description: "Students focused on their academic pursuits.",
  },
  {
    id: "13",
    image: g13,
    category: "Campus Life",
    title: "Kids Play Area",
    description: "",
  },
  {
    id: "14",
    image: g14,
    category: "Arts",
    title: "Inter Class Competition",
    description: "",
  },
  {
    id: "15",
    image: g15,
    category: "Academics",
    title: "Science Lab",
    description: "",
  },
  {
    id: "16",
    image: g16,
    category: "Academics",
    title: "Best School Award in Academics",
    description: "",
  },
  {
    id: "17",
    image: g17,
    category: "Events",
    title: "Annual Day Celebration",
    description: "",
  },
  {
    id: "18",
    image: g18,
    category: "Campus Life",
    title: "St. Michel's Celebrations",
    description: "",
  },
  {
    id: "19",
    image: g19,
    category: "Sports",
    title: "Fun and Interactive Kids Activity",
    description: "",
  },
];

const GalleryPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [filteredItems, setFilteredItems] =
    useState<GalleryItem[]>(galleryItems);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = [
    "All",
    "Campus Life",
    "Academics",
    "Sports",
    "Arts",
    "Events",
  ];

  useEffect(() => {
    document.title = "Gallery | St. Michel's";
  }, []);

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(
        galleryItems.filter((item) => item.category === activeFilter)
      );
    }
  }, [activeFilter]);

  return (
    <div className="w-[110vw] md:w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-900">
        <div className="absolute inset-0 bg-primary-900 opacity-90"></div>
        <div className="container relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Photo Gallery
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            A visual journey through life at St. Michel's
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section bg-white">
        <div className="container">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === category
                    ? "bg-primary-900 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group cursor-pointer relative overflow-hidden rounded-lg shadow-md animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedItem(item)}
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mt-1">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">
                No images found for this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-screen"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="relative">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full max-h-[70vh] object-contain"
                />
                <button
                  className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center text-gray-800 hover:text-primary-900 transition-colors"
                  onClick={() => setSelectedItem(null)}
                  aria-label="Close modal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-primary-900">
                    {selectedItem.title}
                  </h3>
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                    {selectedItem.category}
                  </span>
                </div>
                <p className="text-gray-700">{selectedItem.description}</p>
              </div>

              <div className="bg-gray-50 px-6 py-4 flex justify-between">
                <button
                  className="text-gray-600 hover:text-primary-900 transition-colors"
                  onClick={() => {
                    const currentIndex = filteredItems.findIndex(
                      (item) => item.id === selectedItem.id
                    );
                    const prevIndex =
                      (currentIndex - 1 + filteredItems.length) %
                      filteredItems.length;
                    setSelectedItem(filteredItems[prevIndex]);
                  }}
                  aria-label="Previous image"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <span className="text-sm text-gray-500">
                  {filteredItems.findIndex(
                    (item) => item.id === selectedItem.id
                  ) + 1}{" "}
                  of {filteredItems.length}
                </span>

                <button
                  className="text-gray-600 hover:text-primary-900 transition-colors"
                  onClick={() => {
                    const currentIndex = filteredItems.findIndex(
                      (item) => item.id === selectedItem.id
                    );
                    const nextIndex = (currentIndex + 1) % filteredItems.length;
                    setSelectedItem(filteredItems[nextIndex]);
                  }}
                  aria-label="Next image"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
