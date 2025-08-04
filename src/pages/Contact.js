import React, { useState } from "react";
import logo from "../assets/Logo.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
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

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Get in touch with us for more information about our programs and services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="program-inquiry">Program Inquiry</option>
                  <option value="admission">Admission Information</option>
                  <option value="exam-preparation">Exam Preparation</option>
                  <option value="clinical-courses">Clinical Courses</option>
                  <option value="career-guidance">Career Guidance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-blue-800 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 mt-1">📍</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">123 Dental Education Center<br />Medical District, City 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 mt-1">📞</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 mt-1">✉️</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">info@masterclinicaldentistry.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 mt-1">🕒</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Office Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 text-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">Connect With Us</h2>
              <p className="mb-6">Follow us on social media for updates and dental education content.</p>
              <div className="flex space-x-4">
                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-200">
                  Facebook
                </button>
                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-200">
                  LinkedIn
                </button>
                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-200">
                  Twitter
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
