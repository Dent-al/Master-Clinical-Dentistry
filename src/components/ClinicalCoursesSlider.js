import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const courses = [
  { name: "Endodontics Course", img: "/assets/endodontics course.png", link: "/endodontics-course" },
  { name: "Basal Implant Course", img: "/assets/basal-implant course.png", link: "/basal-implant-course" },
  { name: "Online Implant Dentistry Course", img: "/assets/online-implant course.png", link: "/online-implant-dentistry-course" },
  { name: "Fixed Prosthodontics Course", img: "/assets/fixed-prosthodontics course.png", link: "/fixed-prosthodontics-course" },
  { name: "Restorative Dentistry Course", img: "/assets/restorative course.png", link: "/restorative-dentistry-course" },
  { name: "Implant Dentistry Course", img: "/assets/implant course.png", link: "/implant-dentistry-course" },
  { name: "Dentures Course", img: "/assets/dentures course.png", link: "/dentures-course" },
  { name: "Aesthetic Dentistry Course", img: "/assets/aesthetic course.png", link: "/aesthetic-dentistry-course" },
  { name: "General Dentistry Course", img: "/assets/general course.png", link: "/general-dentistry-course" },
  { name: "Laser Dentistry Course", img: "/assets/laser course.png", link: "/laser-dentistry-course" },
  { name: "Periodontology Course", img: "/assets/periodontology course.png", link: "/periodontology-course" },
  { name: "Dental Radiology Course", img: "/assets/radiology course.png", link: "/dental-radiology-course" },
  { name: "Treatment Planning Course", img: "/assets/treatment-planning course.png", link: "/treatment-planning-course" },
  { name: "Orthodontics Course", img: "/assets/orthodontics course.png", link: "/orthodontics-course" },
  { name: "Oral Surgery Course", img: "/assets/oral-surgery course.png", link: "/oral-surgery-course" },
  { name: "Pedodontics Course", img: "/assets/pedodontics course.png", link: "/pedodontics-course" },
  { name: "Oral Pathology Course", img: "/assets/oral-pathology course.png", link: "/oral-pathology-course" },
  { name: "Medical Emergencies Course", img: "/assets/medical-emergencies course.png", link: "/medical-emergencies-course" },
  { name: "Digital Dentistry Course", img: "/assets/digital course.png", link: "/digital-dentistry-course" },
  { name: "Operative Dental Course", img: "/assets/operative course.png", link: "/operative-dental-course" },
];

const slides = [];
for (let i = 0; i < courses.length; i += 4) {
  slides.push(courses.slice(i, i + 4));
}

const ClinicalCoursesSlider = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full">
      {/* Slider */}
      <div className="flex items-center justify-center">
        <button
          aria-label="Previous"
          onClick={prevSlide}
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 text-blue-600 shadow transition absolute left-0 top-1/2 -translate-y-1/2 z-10"
          style={{ left: '-2.5rem' }}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
            {slides[current].map((course, idx) => (
              <div
                key={course.name}
                className="flex flex-col items-center cursor-pointer group"
                onClick={() => navigate(course.link)}
              >
                <div className="w-40 h-40 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 border-2 border-gray-200 group-hover:border-blue-400 transition">
                  <img src={course.img} alt={course.name} className="w-32 h-32 object-contain" />
                </div>
                <h3 className="text-lg font-bold text-center mt-2 group-hover:text-blue-600 transition">{course.name}</h3>
              </div>
            ))}
          </div>
        </div>
        <button
          aria-label="Next"
          onClick={nextSlide}
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 text-blue-600 shadow transition absolute right-0 top-1/2 -translate-y-1/2 z-10"
          style={{ right: '-2.5rem' }}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
      {/* Nav Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${current === idx ? 'bg-blue-500' : 'bg-gray-300'} transition`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ClinicalCoursesSlider;
