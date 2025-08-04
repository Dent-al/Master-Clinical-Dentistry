import React from "react";
import ClinicalCourse from "./ClinicalCourse";

const DentistAssistantCourse = () => {
  return (
    <ClinicalCourse
      courseName="Dentist Assistant Course"
      courseDescription="Comprehensive training program for dental assistants to provide quality patient care and clinical support."
      duration="3 Months"
      level="Entry Level"
      courseFeatures={[
        "Patient care fundamentals",
        "Dental procedure assistance",
        "Infection control protocols",
        "Dental materials knowledge",
        "Administrative skills"
      ]}
      courseBenefits={[
        "Career entry opportunity",
        "Essential healthcare skills",
        "Practice integration readiness",
        "Professional certification",
        "Advancement pathway"
      ]}
    />
  );
};

export default DentistAssistantCourse;
