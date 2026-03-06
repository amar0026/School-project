import { useState } from "react";

const faqs = [
  {
    question: "When Can parents apply",
    answer: "Any time in academic year. Also at the admission fair which is held during December.",
  },
  {
    question: "Where can i get an application from",
    answer: "Please collect an application from our school.",
  },
  {
    question: "What are the documents required for admission",
    answer: [
      "Student's birth certificates copy",
      "AADHAR CARD copy of STUDENT and PARENT / GUARDIAN",
      "Present address proof document",
      "You also have to provide originals of all documents",
    ],
  },
  {
    question: "What is the admission fees",
    answer:
      "Our goal is to provide quality education to the maximum numbers of students with a fee structure that suits your budget",
  },
];

const extraFaqs = [
  {
    question: "How long does the admission process take?",
    answer: "The admission process typically takes 1–2 weeks after submitting all required documents.",
  },
  {
    question: "Is there an entrance exam?",
    answer: "Depending on the grade, a simple assessment may be conducted to understand the child's learning level.",
  },
];

const allFaqs = [...faqs, ...extraFaqs];

export default function FAQs() {
  // ✅ Type fix
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);

  // ✅ Type fix
  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const visibleFaqs = showAll ? allFaqs : faqs;
  const remaining = allFaqs.length - faqs.length;

  return (
    <div
      className="min-h-screen bg-gray-50 flex items-start justify-center px-6 py-16"
      style={{ fontFamily: "'Georgia', serif" }}
    >
      <div className="w-full max-w-3xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-3">
            Frequently Asked Questions
            <span className="block w-24 h-1 bg-red-700 mt-1 rounded-full"></span>
          </h1>
          <p className="text-gray-500 text-base">
            Fast answers to the questions parents and students typically ask.
          </p>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-gray-200 border-t border-gray-200">
          {visibleFaqs.map((faq, i: number) => (
            <div key={i}>
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center py-5 text-left focus:outline-none group"
              >
                <span className="text-gray-900 font-semibold text-base pr-4 group-hover:text-gray-600 transition-colors">
                  {faq.question}
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 text-gray-500 transition-transform duration-300"
                  style={{
                    transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {/* Answer */}
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: openIndex === i ? "400px" : "0px" }}
              >
                <div className="pb-5 text-gray-500 text-sm leading-relaxed">
                  {Array.isArray(faq.answer) ? (
                    <ul className="space-y-1">
                      {faq.answer.map((line, j: number) => (
                        <li key={j}>• {line}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{faq.answer}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More */}
        {!showAll && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="text-gray-600 text-sm font-medium flex items-center gap-1 hover:text-gray-900 transition-colors"
            >
              See more ({remaining} more questions)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}