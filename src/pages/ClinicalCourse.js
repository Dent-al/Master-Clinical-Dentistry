import React from "react";
import logo from "../assets/Logo.png";

const ClinicalCourse = ({ courseName, courseDescription, courseFeatures, courseBenefits, duration, level }) => {
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
          <h1 className="text-4xl font-bold text-blue-900 mb-4">{courseName}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {courseDescription || `Advanced clinical training in ${courseName} with hands-on experience and expert guidance.`}
          </p>
          <div className="flex justify-center space-x-8 mt-6">
            {duration && (
              <div className="text-center">
                <span className="text-sm text-gray-500 block">Duration</span>
                <span className="text-lg font-semibold text-blue-800">{duration}</span>
              </div>
            )}
            {level && (
              <div className="text-center">
                <span className="text-sm text-gray-500 block">Level</span>
                <span className="text-lg font-semibold text-blue-800">{level}</span>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">Course Features</h2>
            <ul className="space-y-3">
              {courseFeatures ? courseFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              )) : (
                <>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span className="text-gray-700">Hands-on clinical training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span className="text-gray-700">Expert faculty guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span className="text-gray-700">State-of-the-art equipment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span className="text-gray-700">Case-based learning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span className="text-gray-700">Certification upon completion</span>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div className="bg-blue-600 text-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Course Benefits</h2>
            <ul className="space-y-3">
              {courseBenefits ? courseBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-200 mr-3">★</span>
                  <span>{benefit}</span>
                </li>
              )) : (
                <>
                  <li className="flex items-start">
                    <span className="text-blue-200 mr-3">★</span>
                    <span>Enhanced clinical skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-200 mr-3">★</span>
                    <span>Career advancement opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-200 mr-3">★</span>
                    <span>Professional networking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-200 mr-3">★</span>
                    <span>Industry recognition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-200 mr-3">★</span>
                    <span>Continuing education credits</span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Ready to Advance Your Skills?</h2>
          <p className="text-gray-600 mb-6">Join our comprehensive clinical training program and take your dental practice to the next level.</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
            Enroll Now
          </button>
        </div>
      </main>
    </div>
  );
};

export default ClinicalCourse;
