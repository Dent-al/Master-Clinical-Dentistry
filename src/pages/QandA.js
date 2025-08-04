import React, { useState } from "react";
import logo from "../assets/Logo.png";

const QandA = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What are the admission requirements for MClinDent programs?",
      answer: "Admission requirements include a dental degree from a recognized institution, relevant clinical experience, English language proficiency, and completion of our application process including interviews and portfolio submission."
    },
    {
      question: "How long do the programs typically take to complete?",
      answer: "Program duration varies by specialization. Most clinical courses range from 3-12 months, while exam preparation courses are typically 2-6 months. Full MClinDent programs can take 1-3 years depending on the specialization."
    },
    {
      question: "Are the programs available online or in-person?",
      answer: "We offer both online and in-person options. Some courses are fully online, others require clinical attendance, and many offer hybrid formats combining online theory with hands-on practical sessions."
    },
    {
      question: "What kind of certification will I receive upon completion?",
      answer: "Upon successful completion, you will receive internationally recognized certificates and diplomas. MClinDent graduates receive a Master of Clinical Dentistry degree recognized by dental boards worldwide."
    },
    {
      question: "Do you provide career placement assistance?",
      answer: "Yes, we offer comprehensive career support including job placement assistance, career counseling, resume preparation, interview coaching, and access to our global network of dental practices and institutions."
    },
    {
      question: "What is the cost of the programs?",
      answer: "Program costs vary by course type and duration. We offer flexible payment plans, scholarships for qualified candidates, and early bird discounts. Contact our admissions team for detailed pricing information."
    },
    {
      question: "Can I transfer credits from other institutions?",
      answer: "We evaluate transfer credits on a case-by-case basis. Credits from accredited institutions may be considered for transfer, subject to our academic committee's approval and alignment with our curriculum."
    },
    {
      question: "What support is available for international students?",
      answer: "We provide comprehensive support for international students including visa assistance, accommodation guidance, orientation programs, English language support, and cultural integration activities."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={logo} alt="Master Clinical Dentistry Logo" className="w-12 h-12" />
              <h1 className="text-2xl font-bold text-blue-900">Master Clinical Dentistry</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our programs and services.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-semibold text-blue-800">{faq.question}</span>
                <span className="text-blue-600 text-xl">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-600 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
          <p className="mb-6">Can't find the answer you're looking for? Our admissions team is here to help.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200">
            Contact Us
          </button>
        </div>
      </main>
    </div>
  );
};

export default QandA;
