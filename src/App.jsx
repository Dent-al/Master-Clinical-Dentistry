import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import all pages
import Home from './pages/Home';

// Exam Preparation Pages
import ADCExamPreparation from './pages/ADCExamPreparation';
import INBDEExamPreparation from './pages/INBDEExamPreparation';
import AFKExamPreparation from './pages/AFKExamPreparation';
import HAADExamPreparation from './pages/HAADExamPreparation';
import MOHExamPreparation from './pages/MOHExamPreparation';
import DHAExamPreparation from './pages/DHAExamPreparation';
import OREPart1ExamPreparation from './pages/OREPart1ExamPreparation';

// Clinical Courses
import EndodonticsCourse from './pages/EndodonticsCourse';
import BasalImplantCourse from './pages/BasalImplantCourse';
import OnlineImplantDentistryCourse from './pages/OnlineImplantDentistryCourse';
import FixedProsthodonticsCourse from './pages/FixedProsthodonticsCourse';
import RestorativeDentistryCourse from './pages/RestorativeDentistryCourse';
import ImplantDentistryCourse from './pages/ImplantDentistryCourse';
import DenturesCourse from './pages/DenturesCourse';
import AestheticDentistryCourse from './pages/AestheticDentistryCourse';
import GeneralDentistryCourse from './pages/GeneralDentistryCourse';
import LaserDentistryCourse from './pages/LaserDentistryCourse';
import PeriodontologyCourse from './pages/PeriodontologyCourse';
import DentalRadiologyCourse from './pages/DentalRadiologyCourse';
import TreatmentPlanningCourse from './pages/TreatmentPlanningCourse';
import OrthodonticsCourse from './pages/OrthodonticsCourse';
import OralSurgeryCourse from './pages/OralSurgeryCourse';
import PedodonticsCourse from './pages/PedodonticsCourse';
import OralPathologyCourse from './pages/OralPathologyCourse';
import MedicalEmergenciesCourse from './pages/MedicalEmergenciesCourse';
import DigitalDentistryCourse from './pages/DigitalDentistryCourse';
import OperativeDentalCourse from './pages/OperativeDentalCourse';

// Supportive Dentistry Courses
import DentistAssistantCourse from './pages/DentistAssistantCourse';
import DentalHygienistCourse from './pages/DentalHygienistCourse';
import DentalTherapistCourse from './pages/DentalTherapistCourse';

// Additional Pages
import Highlights from './pages/Highlights';
import QandA from './pages/QandA';
import Contact from './pages/Contact';

function App() {
  return (
    <div
      className="App min-h-screen w-full relative overflow-x-hidden"
      style={{
        background: `repeating-linear-gradient(45deg, #3f38c2 0px, #3f38c2 20px, #6d5eea 20px, #6d5eea 40px)`
      }}
    >
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        {/* Exam Preparation Routes */}
        <Route path="/adc-exam" element={<ADCExamPreparation />} />
        <Route path="/inbde-exam" element={<INBDEExamPreparation />} />
        <Route path="/afk-exam" element={<AFKExamPreparation />} />
        <Route path="/haad-exam" element={<HAADExamPreparation />} />
        <Route path="/moh-exam" element={<MOHExamPreparation />} />
        <Route path="/dha-exam" element={<DHAExamPreparation />} />
        <Route path="/ore-part1-exam" element={<OREPart1ExamPreparation />} />
        {/* Clinical Courses Routes */}
        <Route path="/endodontics-course" element={<EndodonticsCourse />} />
        <Route path="/basal-implant-course" element={<BasalImplantCourse />} />
        <Route path="/online-implant-dentistry-course" element={<OnlineImplantDentistryCourse />} />
        <Route path="/fixed-prosthodontics-course" element={<FixedProsthodonticsCourse />} />
        <Route path="/restorative-dentistry-course" element={<RestorativeDentistryCourse />} />
        <Route path="/implant-dentistry-course" element={<ImplantDentistryCourse />} />
        <Route path="/dentures-course" element={<DenturesCourse />} />
        <Route path="/aesthetic-dentistry-course" element={<AestheticDentistryCourse />} />
        <Route path="/general-dentistry-course" element={<GeneralDentistryCourse />} />
        <Route path="/laser-dentistry-course" element={<LaserDentistryCourse />} />
        <Route path="/periodontology-course" element={<PeriodontologyCourse />} />
        <Route path="/dental-radiology-course" element={<DentalRadiologyCourse />} />
        <Route path="/treatment-planning-course" element={<TreatmentPlanningCourse />} />
        <Route path="/orthodontics-course" element={<OrthodonticsCourse />} />
        <Route path="/oral-surgery-course" element={<OralSurgeryCourse />} />
        <Route path="/pedodontics-course" element={<PedodonticsCourse />} />
        <Route path="/oral-pathology-course" element={<OralPathologyCourse />} />
        <Route path="/medical-emergencies-course" element={<MedicalEmergenciesCourse />} />
        <Route path="/digital-dentistry-course" element={<DigitalDentistryCourse />} />
        <Route path="/operative-dental-course" element={<OperativeDentalCourse />} />
        {/* Supportive Dentistry Courses Routes */}
        <Route path="/dentist-assistant-course" element={<DentistAssistantCourse />} />
        <Route path="/dental-hygienist-course" element={<DentalHygienistCourse />} />
        <Route path="/dental-therapist-course" element={<DentalTherapistCourse />} />
        {/* Additional Pages Routes */}
        <Route path="/highlights" element={<Highlights />} />
        <Route path="/qa" element={<QandA />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
