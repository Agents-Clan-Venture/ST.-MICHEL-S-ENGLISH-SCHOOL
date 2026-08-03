import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState(new Set());
  const [activeCategory, setActiveCategory] = useState('admissions');

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqData = {
    admissions: [
      {
        question: "When should we apply?",
        answer: "We recommend applying as early as possible as seats in some grades fill up quickly. Our primary admission period for the upcoming academic year runs from November to March. However, we accept applications throughout the year based on the availability of space."
      },
      {
        question: "What is the admission process?",
        answer: "The admission process at St. Michel's English School is designed to be straightforward. It begins with submitting a completed application form, available from the school office or our website. This is followed by an interaction with the student and parents. An assessment may be required for admission to Grade 1 and above to understand the student's academic standing."
      },
      {
        question: "What are the age criteria for admission?",
        answer: "For admission to Nursery, a child should be 3 years old by March 31st of the academic year. The age for subsequent classes follows a similar progression. Please contact the admissions office for specific details regarding the grade you are applying for."
      },
      {
        question: "What documents are required for admission?",
        answer: `You will need to submit the following documents along with the application form:
- Copy of the student's birth certificate
- Recent passport-sized photographs of the student and parents/guardians
- Copy of the student's Aadhar card (or passport for foreign nationals)
- Previous year's academic records/report card (for Grade 1 and above)
- Transfer Certificate (TC) from the previous school (if applicable)`
      },
      {
        question: "Do you have a waitlist?",
        answer: "Yes, when a grade level reaches capacity, qualified applicants may be placed on a waitlist. If a space becomes available, we will contact waitlisted families in the order determined by the admissions committee."
      }
    ],
    fees: [
      {
        question: "Is there an application fee?",
        answer: "Yes, there is a nominal, non-refundable application processing fee that must be submitted along with the application form. Please refer to the fee schedule for the exact amount."
      },
      {
        question: "Do you offer financial aid or scholarships?",
        answer: "St. Michel's English School applies Caste based scholarships to students who demonstrate exceptional academic performance."
      },
      {
        question: "What is the fee structure?",
        answer: "The detailed fee structure, including tuition fees and other charges, is available @School office. You can also obtain a copy from the school office."
      }
    ],
    academics: [
      {
        question: "What curriculum do you follow?",
        answer: "St. Michel's English School is affiliated with the State Board, Karnataka. Our curriculum is designed to be comprehensive, fostering both academic excellence and holistic development."
      },
      {
        question: "What are the class sizes?",
        answer: "We believe in providing individual attention to our students. To facilitate this, we maintain a healthy teacher-student ratio with an average class size of approximately 25-30 students."
      },
      {
        question: "How do you make admissions decisions?",
        answer: "Our admissions decisions are based on a holistic review of the application. We consider the student's age, academic record (for higher grades), the outcome of the interaction/assessment, and the availability of seats in the respective grade. Our aim is to ensure a good fit between the student and the school's educational environment."
      },
      {
        question: "What extracurricular activities do you offer?",
        answer: "We offer a wide range of extracurricular activities to encourage the all-round development of our students. These include sports like football, basketball, and athletics, as well as clubs for debate, quizzing, art, music, karate and dance."
      },
      {
        question: "How do you support students with different learning needs?",
        answer: "Our teachers are trained to identify and support students with diverse learning styles and needs. We also have a dedicated school counsellor who works with students, teachers, and parents to provide additional academic and emotional support when required."
      }
    ],
    facilities: [
      {
        question: "What are the school timings?",
        answer: "The school operates from Monday to Friday.\n• Pre-Primary (Nursery, LKG, UKG): 9:30 AM - 3:30 PM\nSaturday 9:30 AM - 1:00 PM\n• Primary & Secondary (Grade 1 - 10): 9:30 AM - 4:00 PM\nSaturday 9:30 AM - 1:20 PM"
      },
      {
        question: "Do you provide transportation?",
        answer: "Yes, the school has a fleet of buses that cover various routes across the city and around. The safety of our students is our top priority, and all our buses are equipped with GPS tracking and have a trained attendant on board."
      },
      {
        question: "How can parents communicate with teachers?",
        answer: "We encourage open communication between parents and teachers. Parents can schedule appointments to meet with teachers through the school office. Additionally, we conduct regular Parent-Teacher Meetings (PTMs) to discuss the student's progress. The school also maintains a parent portal for regular updates."
      }
    ]
  };

  const categories = [
    { id: 'admissions', label: 'Admissions' },
    { id: 'fees', label: 'Fees & Financials' },
    { id: 'academics', label: 'Academics & School Life' },
    { id: 'facilities', label: 'Facilities & Communication' }
  ];

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setOpenItems(new Set()); // Close all open items when switching categories
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">
            Find answers to common questions about our school
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Category Toggle Buttons */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'bg-blue-800 text-white'
                    : 'bg-white text-blue-800 border border-blue-200 hover:bg-blue-50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData[activeCategory].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.has(index) ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}