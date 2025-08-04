import React from "react";
import Header from "../components/Header";
import ClinicalCoursesSlider from "../components/ClinicalCoursesSlider";

const Home = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-0">
      <Header />
      {/* Hero Section */}
      <section className="w-full flex items-center justify-center min-h-[70vh] bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-6 py-16">
          <div className="w-full md:w-2/3 lg:w-1/2 text-left">
            <h2 className="text-[#0A1F44] text-3xl md:text-5xl font-extrabold leading-tight mb-6">
              Advance your dental career with<br />
              expert-led courses and hands-on<br />
              training designed for both local and<br />
              international professionals.
            </h2>
            <p className="text-[#6B7280] text-lg md:text-xl mb-8 max-w-xl">
              Explore 25+ specialized programs, from clinical dentistry to international exam prep and dental assistance. Learn at your pace with online and offline classes, and join a supportive community of learners.
            </p>
            <a
              href="#courses"
              className="inline-block bg-[#008080] hover:bg-[#20B2AA] text-white font-bold text-lg px-8 py-3 rounded-lg shadow transition duration-200"
            >
              View Courses
            </a>
          </div>
        </div>
      </section>
      {/* Mentorship/Benefits Section */}
      <section className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-[#0A1F44]">Where Clinical Mastery Meets Innovation and Mentorship</h2>
          <p className="text-[#6B7280] text-center text-lg mb-12 max-w-3xl mx-auto">
            Connect with peers, mentors, and industry leaders. Share knowledge, ask questions, and grow together in a friendly, collaborative space.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-center">
            {/* One-on-One Mentoring */}
            <div className="flex flex-col items-center">
              <div className="w-56 h-56 rounded-full bg-white shadow-md flex items-center justify-center mb-4 border-2 border-[#D9D9D9]">
                <img src="/assets/mentoring.png" alt="One-on-One Mentoring" className="w-44 h-44 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-center mt-2 text-[#0A1F44]">One-on-One Mentoring</h3>
            </div>
            {/* Clinical Integration */}
            <div className="flex flex-col items-center">
              <div className="w-56 h-56 rounded-full bg-white shadow-md flex items-center justify-center mb-4 border-2 border-[#D9D9D9]">
                <img src="/assets/clinical-integration.png" alt="Clinical Integration" className="w-44 h-44 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-center mt-2 text-[#0A1F44]">Clinical Integration</h3>
            </div>
            {/* Flexible Learning */}
            <div className="flex flex-col items-center">
              <div className="w-56 h-56 rounded-full bg-white shadow-md flex items-center justify-center mb-4 border-2 border-[#D9D9D9]">
                <img src="/assets/flexible-learning.png" alt="Flexible Learning" className="w-44 h-44 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-center mt-2 text-[#0A1F44]">Flexible Learning</h3>
            </div>
            {/* 11+ Years of Proven Excellence */}
            <div className="flex flex-col items-center">
              <div className="w-56 h-56 rounded-full bg-white shadow-md flex items-center justify-center mb-4 border-2 border-[#D9D9D9]">
                <img src="/assets/11years.png" alt="11+ Years of Proven Excellence" className="w-44 h-44 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-center mt-2 text-[#0A1F44]">11+ Years of Proven Excellence</h3>
            </div>
          </div>
        </div>
      </section>
      {/* Licensing Exam & Clinical Courses Section */}
      <section className="w-full bg-white py-16" id="licensing-exams">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-2 text-[#0A1F44]">Study Smart for International Dental Licensing Exams</h2>
          <p className="text-[#6B7280] text-center text-base mb-10 max-w-2xl mx-auto">
            From the U.S. to the U.K., Canada to Australia — We've Got You Covered
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-items-center">
            {/* ADC PART 1 PREPARATION */}
            <a href="/adc-exam" className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 text-center border border-[#D9D9D9] hover:border-[#008080]">
              <img src="/assets/adc.png" alt="ADC PART 1 PREPARATION" className="w-40 h-32 object-contain mx-auto mb-2" />
              <span className="block font-bold text-[#0A1F44] mt-2">ADC PART 1 PREPARATION</span>
            </a>
            {/* INBDE EXAM PREPARATION */}
            <a href="/inbde-exam" className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 text-center border border-[#D9D9D9] hover:border-[#008080]">
              <img src="/assets/inbde.png" alt="INBDE EXAM PREPARATION" className="w-40 h-32 object-contain mx-auto mb-2" />
              <span className="block font-bold text-[#0A1F44] mt-2">INBDE EXAM PREPARATION</span>
            </a>
            {/* AFK EXAM PREPARATION */}
            <a href="/afk-exam" className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 text-center border border-[#D9D9D9] hover:border-[#008080]">
              <img src="/assets/afk.png" alt="AFK EXAM PREPARATION" className="w-40 h-32 object-contain mx-auto mb-2" />
              <span className="block font-bold text-[#0A1F44] mt-2">AFK EXAM PREPARATION</span>
            </a>
            {/* DHA EXAM PREPARATION */}
            <a href="/dha-exam" className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 text-center border border-[#D9D9D9] hover:border-[#008080]">
              <img src="/assets/dha.png" alt="DHA EXAM PREPARATION" className="w-40 h-32 object-contain mx-auto mb-2" />
              <span className="block font-bold text-[#0A1F44] mt-2">DHA EXAM PREPARATION</span>
            </a>
            {/* MOH EXAM PREPARATION */}
            <a href="/moh-exam" className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 text-center border border-[#D9D9D9] hover:border-[#008080]">
              <img src="/assets/moh.png" alt="MOH EXAM PREPARATION" className="w-40 h-32 object-contain mx-auto mb-2" />
              <span className="block font-bold text-[#0A1F44] mt-2">MOH EXAM PREPARATION</span>
            </a>
            {/* HAAD EXAM PREPARATION */}
            <a href="/haad-exam" className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 text-center border border-[#D9D9D9] hover:border-[#008080]">
              <img src="/assets/haad.png" alt="HAAD EXAM PREPARATION" className="w-40 h-32 object-contain mx-auto mb-2" />
              <span className="block font-bold text-[#0A1F44] mt-2">HAAD EXAM PREPARATION</span>
            </a>
            {/* ORE PART 1 PREPARATION */}
            <a href="/ore-part1-exam" className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 text-center border border-[#D9D9D9] hover:border-[#008080]">
              <img src="/assets/ore.png" alt="ORE PART 1 PREPARATION" className="w-40 h-32 object-contain mx-auto mb-2" />
              <span className="block font-bold text-[#0A1F44] mt-2">ORE PART 1 PREPARATION</span>
            </a>
          </div>
          {/* Clinical Courses Section Heading and Slider (moved below grid) */}
          <div id="clinical-courses" className="mt-20 mb-8 scroll-mt-40">
            {/* Section Heading for Clinical Courses */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6 text-[#0A1F44] drop-shadow" style={{ letterSpacing: '0.01em', borderBottom: '4px solid #008080', display: 'inline-block', paddingBottom: '0.25em', background: 'white', width: '100%' }}>
              Clinical Courses
            </h2>
            <h3
              className="text-xl md:text-2xl font-semibold text-center mb-2 mt-6 text-[#0A1F44]"
            >
              Train Your Way — Online or On Campus
            </h3>
            <p
              className="text-center text-lg md:text-xl mb-8 max-w-3xl mx-auto text-[#6B7280]"
            >
              Explore a wide range of hands-on and online courses designed for both aspiring and experienced dentists. Build your expertise with practical modules and expert guidance.
            </p>
          </div>
          <div
            className="py-8 rounded-t-xl shadow-md"
            style={{ background: '#F8FFFE', borderTop: '4px solid #008080' }}
          >
            <ClinicalCoursesSlider />
          </div>
        </div>
      </section>
      {/* Supportive Dentistry Section */}
      <section className="w-full bg-white py-16" id="support-dentistry">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-2 text-[#0A1F44]">Comprehensive Coaching for Assistants, Therapists & Hygienists</h2>
          <p className="text-[#6B7280] text-center text-base mb-10 max-w-2xl mx-auto">
            Start your journey in dental care with specialized training for assistants and therapists. Learn essential skills and techniques in a supportive, interactive environment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {/* Dentist Assistant */}
            <a href="/dentist-assistant-course" className="flex flex-col items-center group">
              <div className="w-72 h-72 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 border-2 border-[#D9D9D9] group-hover:border-[#008080] transition">
                <img src="/assets/dentist-assistant.png" alt="Dentist Assistant" className="w-60 h-60 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-center mt-2 group-hover:text-[#008080] transition text-[#0A1F44]">Dentist Assistant</h3>
            </a>
            {/* Dental Hygienist */}
            <a href="/dental-hygienist-course" className="flex flex-col items-center group">
              <div className="w-72 h-72 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 border-2 border-[#D9D9D9] group-hover:border-[#008080] transition">
                <img src="/assets/dental-hygienist.png" alt="Dental Hygienist" className="w-60 h-60 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-center mt-2 group-hover:text-[#008080] transition text-[#0A1F44]">Dental Hygienist</h3>
            </a>
            {/* Dental Therapist */}
            <a href="/dental-therapist-course" className="flex flex-col items-center group">
              <div className="w-72 h-72 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 border-2 border-[#D9D9D9] group-hover:border-[#008080] transition">
                <img src="/assets/dental-therapist.png" alt="Dental Therapist" className="w-60 h-60 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-center mt-2 group-hover:text-[#008080] transition text-[#0A1F44]">Dental Therapist</h3>
            </a>
          </div>
        </div>
      </section>
      {/* Demo Class CTA Section */}
      <section className="w-full relative" id="demo-class">
        <div
          className="w-full flex items-center justify-center min-h-[140px] md:min-h-[180px] bg-[#0A1F44] bg-opacity-90 relative"
          style={{
            backgroundImage: "url('/assets/demo-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-[#0A1F44] opacity-80" aria-hidden="true"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-6 py-8">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-white text-2xl md:text-3xl font-semibold mb-1">Ready to Experience It First-Hand</h2>
              <p className="text-blue-100 text-base md:text-lg">Join a Free Demo Class and Discover the Future of Dental Training.</p>
            </div>
            <div className="mt-4 md:mt-0 md:ml-8 flex-shrink-0">
              <a
                href="#contact"
                className="inline-block bg-[#008080] hover:bg-[#20B2AA] text-white font-bold text-lg px-8 py-3 rounded-lg shadow transition duration-200 border border-[#008080]"
              >
                Request for a demo class
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Custom Footer Section */}
      <footer className="w-full bg-[#0A1F44] pt-8 pb-2 mt-12 text-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start w-full md:w-1/2 mb-4 md:mb-0">
            <img src="/assets/logo.png" alt="Master Clinical Dentistry Institute" className="w-16 h-16 mb-2" />
            <h3 className="font-bold text-lg mb-2">GET IN TOUCH</h3>
            <div className="flex items-center mb-1">
              <span className="mr-2" style={{ display: 'block', verticalAlign: 'middle' }}>
                <svg width="22" height="22" viewBox="0 0 24 24">
                  <g>
                    <path d="M23.015 18.4c0 0.3-0.052 0.6-0.156 1.1-0.105 0.4-0.214 0.8-0.329 1-0.219 0.6-0.855 1.1-1.907 1.7-0.98 0.5-1.95 0.8-2.909 0.8h-0.828c-0.261-0.1-0.558-0.2-0.892-0.2-0.333-0.1-0.583-0.2-0.75-0.3-0.156 0-0.443-0.1-0.86-0.3s-0.672-0.2-0.766-0.3c-1.022-0.3-1.934-0.8-2.736-1.3-1.3346-0.8-2.7157-1.9-4.1438-3.3-1.4176-1.5-2.5381-2.9-3.3616-4.2-0.5003-0.8-0.9329-1.7-1.2977-2.7-0.0313-0.1-0.1251-0.4-0.2815-0.8-0.1563-0.4-0.2658-0.7-0.3283-0.9-0.0522-0.1-0.1251-0.4-0.2189-0.7s-0.1616-0.6-0.2033-0.9c-0.0313-0.3-0.0469-0.5-0.0469-0.8 0-1 0.2658-2 0.7974-2.9 0.5837-1.1 1.1362-1.7 1.6574-2 0.2606-0.1 0.615-0.2 1.0632-0.3 0.4586-0.1 0.8287-0.1 1.1101-0.1h0.3284c0.1876 0.1 0.4638 0.5 0.8287 1.2 0.1146 0.2 0.271 0.5 0.469 0.8 0.1981 0.4 0.3805 0.7 0.5473 1 0.1667 0.3 0.3283 0.6 0.4847 0.9 0.0312 0 0.1198 0.1 0.2658 0.4 0.1563 0.2 0.271 0.4 0.344 0.5 0.0729 0.2 0.1094 0.3 0.1094 0.5s-0.1511 0.4-0.4534 0.8c-0.2919 0.3-0.615 0.6-0.9694 0.8-0.344 0.3-0.6672 0.5-0.9694 0.8-0.2919 0.3-0.4378 0.6-0.4378 0.8 0 0.1 0.026 0.2 0.0781 0.3 0.0522 0.2 0.0939 0.3 0.1251 0.3 0.0417 0.1 0.1147 0.2 0.2189 0.4 0.1147 0.2 0.1772 0.3 0.1877 0.3 0.7922 1.4 1.699 2.7 2.7205 3.7 1.0213 1 2.2463 1.9 3.6743 2.7 0.021 0 0.12 0.1 0.297 0.2s0.302 0.2 0.375 0.2 0.178 0.1 0.313 0.1c0.146 0.1 0.266 0.1 0.36 0.1 0.187 0 0.427-0.1 0.719-0.4s0.568-0.6 0.829-1c0.26-0.3 0.547-0.7 0.86-1 0.312-0.3 0.573-0.4 0.781-0.4 0.146 0 0.292 0 0.438 0.1 0.157 0.1 0.344 0.2 0.563 0.3 0.219 0.2 0.349 0.3 0.391 0.3 0.261 0.2 0.537 0.3 0.829 0.5 0.302 0.2 0.635 0.3 1 0.5s0.647 0.4 0.845 0.5c0.729 0.4 1.125 0.7 1.188 0.8 0.031 0.1 0.047 0.2 0.047 0.4" fill="#008080"/>
                    <path d="M1.2188 4.75c-0.1453 0.5076-0.2188 1.0294-0.2188 1.5312 0 0.282 0.0312 0.5414 0.0625 0.8126 0.0417 0.2608 0.0937 0.572 0.1875 0.9062 0.0938 0.3337 0.1666 0.5829 0.2188 0.75 0.0625 0.1564 0.1873 0.4575 0.3437 0.875 0.1564 0.417 0.25 0.656 0.2813 0.75 0.3648 1.023 0.7809 1.946 1.2812 2.75 0.8235 1.336 1.9574 2.695 3.375 4.125 1.428 1.419 2.7908 2.55 4.125 3.375 0.803 0.501 1.728 0.947 2.75 1.313 0.094 0.031 0.333 0.124 0.75 0.281 0.417 0.156 0.719 0.25 0.875 0.312 0.167 0.052 0.416 0.125 0.75 0.219s0.614 0.177 0.875 0.219c0.271 0.031 0.562 0.031 0.844 0.031 0.959 0 1.926-0.249 2.906-0.781 1.053-0.585 1.687-1.135 1.906-1.657 0.115-0.26 0.208-0.613 0.313-1.062 0.104-0.459 0.156-0.844 0.156-1.125 0-0.146 0-0.271-0.031-0.344-0.037-0.111-0.227-0.263-0.5-0.437-0.253 0.494-0.853 1.012-1.844 1.562-0.98 0.532-1.947 0.813-2.906 0.813-0.282 0-0.573-0.031-0.844-0.063-0.261-0.042-0.541-0.093-0.875-0.187s-0.583-0.167-0.75-0.219c-0.156-0.063-0.458-0.187-0.875-0.344-0.417-0.156-0.656-0.25-0.75-0.281-1.022-0.365-1.947-0.78-2.75-1.281-1.3342-0.825-2.697-1.956-4.125-3.375-1.4176-1.43-2.5515-2.821-3.375-4.157-0.5003-0.8032-0.9164-1.6954-1.2812-2.7182-0.0313-0.094-0.1249-0.3639-0.2813-0.7813-0.1564-0.4175-0.2812-0.6873-0.3437-0.8437-0.0522-0.1672-0.125-0.4164-0.2188-0.75-0.0224-0.0796-0.0119-0.1433-0.0312-0.2188z" fill="#20B2AA"/>
                  </g>
                </svg>
              </span>
              <span className="text-base font-bold text-white">+91-7889093147</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">✉️</span>
              <span className="text-base">masterclinicaldentistry@gmail.com</span>
            </div>
          </div>
          {/* Social Media & Navigation */}
          <div className="flex flex-col items-center w-full md:w-1/2">
            <h3 className="font-bold text-lg mb-2">SOCIAL MEDIA</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><img src="/assets/instagram.png" alt="Instagram" className="w-7 h-7" /></a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><img src="/assets/facebook.png" alt="Facebook" className="w-7 h-7" /></a>
              <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><img src="/assets/youtube.png" alt="YouTube" className="w-7 h-7" /></a>
            </div>
            <nav className="flex flex-wrap justify-center gap-3 text-sm">
              <a href="/" className="hover:underline">Home</a>
              <a href="/adc-exam" className="hover:underline">ADC Exam</a>
              <a href="/inbde-exam" className="hover:underline">INBDE Exam</a>
              <a href="/afk-exam" className="hover:underline">AFK Exam</a>
              <a href="/dha-exam" className="hover:underline">DHA Exam</a>
              <a href="/moh-exam" className="hover:underline">MOH Exam</a>
              <a href="/haad-exam" className="hover:underline">HAAD Exam</a>
              <a href="/ore-part1-exam" className="hover:underline">ORE Exam</a>
              <a href="/clinical-courses" className="hover:underline">Clinical Courses</a>
              <a href="/dentist-assistant-course" className="hover:underline">Dentist Assistant</a>
              <a href="/dental-hygienist-course" className="hover:underline">Dental Hygienist</a>
              <a href="/dental-therapist-course" className="hover:underline">Dental Therapist</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </nav>
          </div>
        </div>
        <hr className="my-4 border-[#1F2D5C]" />
        <div className="text-center text-xs pb-2">
          &copy; {new Date().getFullYear()} by Master Clinical Dentistry Institute
        </div>
        {/* WhatsApp Floating Icon */}
        <a href="https://wa.me/917889093147" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50">
          <img src="/assets/whatsapp.png" alt="WhatsApp" className="w-12 h-12 drop-shadow-lg" />
        </a>
      </footer>
    </div>
  );
};

export default Home;
