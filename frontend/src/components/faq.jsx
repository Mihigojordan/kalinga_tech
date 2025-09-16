import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Faq = () => {
  const [visibleAnswers, setVisibleAnswers] = useState(
    Array(8).fill(false) // match number of FAQs
  );

  const toggleAnswerVisibility = (index) => {
    setVisibleAnswers((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  // Updated FAQs for Rwanda computer & PlayStation buyers
  const faqs = [
    {
      question: "Where can I buy a reliable computer in Rwanda?",
      answer:
        "At Kalinga Tech, we provide brand new and high-quality laptops and desktops with warranty and after-sales support.",
    },
    {
      question: "Do you sell genuine PlayStation devices?",
      answer:
        "Yes, we sell authentic PlayStation 4 and PlayStation 5 consoles with original accessories and guarantee on all products.",
    },
    {
      question: "Can I pay in installments?",
      answer:
        "We provide flexible payment options and financing plans for students, businesses, and families in Rwanda.",
    },
    {
      question: "Do your computers come with warranty?",
      answer:
        "All computers and laptops come with a manufacturer warranty and local support from our technical team.",
    },
    {
      question: "Do you deliver outside Kigali?",
      answer:
        "Yes, we deliver across Rwanda through reliable courier services, ensuring your device reaches safely and quickly.",
    },
    {
      question: "What accessories do you sell?",
      answer:
        "We sell computer accessories such as keyboards, mice, headsets, monitors, as well as PlayStation controllers and games.",
    },
    {
      question: "Do you provide technical support after purchase?",
      answer:
        "Yes, our support team assists with software installation, troubleshooting, and upgrades for both computers and PlayStations.",
    },
    {
      question: "Can I trade in my old laptop or PlayStation?",
      answer:
        "We offer trade-in options where you can exchange your old device for a discount on a new one, subject to evaluation.",
    },
  ];

  return (
    <>
      <div className="relative z-10 px-8 py-12">
        <div className="flex justify-center mb-6">
          <p className="text-1xl text-center p-2 w-fit bg-slate-100 rounded-lg shadow-md">
            SOME Q&A
          </p>
        </div>

        <h1 className="text-5xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="relative bg-gray-100 text-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-start"
            >
              <div className="flex justify-between items-center w-full">
                <h2 className="text-lg font-semibold mr-4">{faq.question}</h2>
                <button
                  onClick={() => toggleAnswerVisibility(index)}
                  className="text-gray-700 hover:text-gray-900 focus:outline-none text-xl"
                >
                  {visibleAnswers[index] ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {visibleAnswers[index] && (
                <p className="mt-4 text-sm leading-5 text-gray-900 rounded p-4 w-full bg-white shadow-inner">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;
