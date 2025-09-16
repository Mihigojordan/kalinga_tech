import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Collapse } from "bootstrap";
import Header from "../components/Header";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Where can I buy a computer in Rwanda?",
      answer:
        "Kalinga Tech sells laptops, desktops, and gaming PCs with warranty and after-sales support. You can visit our store or order online.",
    },
    {
      question: "Do you sell original PlayStation consoles?",
      answer:
        "Yes. We sell authentic PlayStation 4 and PlayStation 5 consoles with official accessories and a guarantee of authenticity.",
    },
    {
      question: "Do your laptops and computers come with warranty?",
      answer:
        "Yes. All our laptops and desktops include a manufacturer warranty, plus free technical assistance from our team in Rwanda.",
    },
    {
      question: "Can I pay in installments?",
      answer:
        "We provide flexible payment plans to make it easier for students, families, and businesses to afford high-quality computers and PlayStations.",
    },
    {
      question: "Do you deliver outside Kigali?",
      answer:
        "Yes. We deliver to all districts in Rwanda using reliable courier partners, ensuring safe and timely delivery.",
    },
    {
      question: "Do you also sell gaming accessories?",
      answer:
        "Absolutely. We stock PlayStation controllers, headsets, charging docks, and games, as well as computer accessories like keyboards, mice, and monitors.",
    },
    {
      question: "Can I trade in my old laptop or PlayStation?",
      answer:
        "Yes. Kalinga Tech accepts trade-ins where you can exchange your old device for a discount on a new one, subject to evaluation.",
    },
    {
      question: "Do you provide after-sales support?",
      answer:
        "Yes. Our technicians help with software setup, troubleshooting, upgrades, and maintenance to keep your device running smoothly.",
    },
    {
      question: "Do you install software on new computers?",
      answer:
        "Yes. We provide installation of essential software like Microsoft Office, antivirus, and other tools at your request.",
    },
    {
      question: "Which brands of computers do you sell?",
      answer:
        "We sell trusted brands such as HP, Dell, Lenovo, Asus, and Apple, ensuring you get genuine products at the best prices.",
    },
  ];

  const handleToggle = (index) => {
    const element = document.getElementById(`faq-answer-${index}`);
    const bsCollapse = new Collapse(element, { toggle: true });
    bsCollapse.toggle();

    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    document.documentElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  }, []);

  return (
    <div className="relative z-10 px-8 py-12">
      <Header title="FAQ" />
      <h1 className="text-5xl font-bold mb-6 text-center p-4 ">
        Frequently Asked Questions
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="relative bg-gray-100 text-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-start"
          >
            <div className="flex justify-between items-center w-full">
              <h2 className="text-md font-semibold mr-4">{faq.question}</h2>
              <button
                className="text-gray-700 hover:text-gray-900 focus:outline-none text-xl"
                onClick={() => handleToggle(index)}
              >
                {openIndex === index ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div id={`faq-answer-${index}`} className="collapse">
              <p className="mt-2 text-sm leading-5 text-gray-900 rounded p-3 w-full bg-white shadow-inner">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
