import React from "react";

const EndodonticsCourse = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-4 text-center">Endodontic Course</h1>
      <img src="/assets/Endodontic Course.png" alt="Endodontic Course" className="w-48 h-48 object-contain mb-6" />
      <p className="text-lg text-gray-700 max-w-2xl text-center mb-8">
        Master the art and science of root canal therapy, diagnosis, and advanced endodontic procedures. This course is designed for dental professionals seeking to enhance their skills in endodontics with hands-on training and expert guidance.
      </p>
      <ul className="list-disc text-left text-gray-600 max-w-xl mb-8 pl-6">
        <li>Comprehensive root canal techniques</li>
        <li>Diagnosis and management of endodontic cases</li>
        <li>Use of modern endodontic instruments</li>
        <li>Hands-on clinical sessions</li>
        <li>Case discussions and troubleshooting</li>
      </ul>
      <a href="/" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow">Back to Home</a>
    </div>
  );
};

export default EndodonticsCourse;
