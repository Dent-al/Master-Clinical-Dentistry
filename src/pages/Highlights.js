import React from "react";
import logo from "../assets/Logo.png";

const Highlights = () => {
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
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Program Highlights</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes Master Clinical Dentistry the premier choice for dental education and professional development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="text-blue-600 text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">World-Class Faculty</h3>
            <p className="text-gray-600">Learn from internationally recognized experts and experienced practitioners in the field of dentistry.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="text-blue-600 text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Advanced Technology</h3>
            <p className="text-gray-600">Access to cutting-edge dental equipment and digital technologies for comprehensive learning.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="text-blue-600 text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Global Recognition</h3>
            <p className="text-gray-600">Internationally accredited programs recognized by dental boards worldwide.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="text-blue-600 text-4xl mb-4">👥</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Hands-On Training</h3>
            <p className="text-gray-600">Extensive clinical practice with real patients under expert supervision.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="text-blue-600 text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Comprehensive Curriculum</h3>
            <p className="text-gray-600">Evidence-based learning with up-to-date clinical protocols and research.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="text-blue-600 text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Career Support</h3>
            <p className="text-gray-600">Dedicated career guidance and placement assistance for professional growth.</p>
          </div>
        </div>

        <div className="bg-blue-600 text-white rounded-lg shadow-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Master Clinical Dentistry?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-xl font-semibold mb-4">Academic Excellence</h3>
              <ul className="space-y-2">
                <li>• Rigorous academic standards</li>
                <li>• Research-driven curriculum</li>
                <li>• Continuous assessment methods</li>
                <li>• Industry-relevant skills development</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Professional Development</h3>
              <ul className="space-y-2">
                <li>• Networking opportunities</li>
                <li>• Continuing education programs</li>
                <li>• Professional certification</li>
                <li>• Alumni support network</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Highlights;
