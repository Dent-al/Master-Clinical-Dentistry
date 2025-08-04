import React from "react";
import logo from "../assets/Logo.png";

const ExamPreparation = ({ examName, examDescription, examFeatures, examBenefits }) => {
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

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">{examName} Preparation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {examDescription || `Comprehensive preparation program for ${examName} with expert guidance and proven strategies.`}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">Course Features</h2>
            <ul className="space-y-3">
              {examFeatures ? examFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              )) : (
                <>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span className="text-gray-700">Comprehensive study materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span className="text-gray-700">Practice questions and mock exams</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span className="text-gray-700">Expert faculty guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span className="text-gray-700">Flexible online learning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span className="text-gray-700">Performance tracking and analytics</span>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div className="bg-blue-600 text-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Why Choose Our Program?</h2>
            <ul className="space-y-3">
              {examBenefits ? examBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-200 mr-3">★</span>
                  <span>{benefit}</span>
                </li>
              )) : (
                <>
                  <li className="flex items-start">
                    <span className="text-blue-200 mr-3">★</span>
                    <span>High success rate among students</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-200 mr-3">★</span>
                    <span>Updated curriculum matching latest exam patterns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-200 mr-3">★</span>
                    <span>24/7 doubt resolution support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-200 mr-3">★</span>
                    <span>Industry-recognized certification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-200 mr-3">★</span>
                    <span>Career guidance and placement assistance</span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-600 mb-6">Join thousands of successful dental professionals who achieved their goals with our program.</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
            Enroll Now
          </button>
        </div>
      </main>
    </div>
  );
};

export default ExamPreparation;
