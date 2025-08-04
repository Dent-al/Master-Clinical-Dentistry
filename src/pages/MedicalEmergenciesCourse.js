import React from "react";
import ClinicalCourse from "./ClinicalCourse";

const MedicalEmergenciesCourse = () => {
  return (
    <ClinicalCourse
      courseName="Medical Emergencies in Dentistry Course"
      courseDescription="Essential training for managing medical emergencies in dental practice with life-saving protocols."
      duration="2 Months"
      level="Essential for All"
      courseFeatures={[
        "Emergency recognition protocols",
        "CPR and basic life support",
        "Emergency medication administration",
        "Team coordination strategies",
        "Prevention and preparation"
      ]}
      courseBenefits={[
        "Patient safety assurance",
        "Emergency preparedness",
        "Legal compliance",
        "Team confidence building",
        "Practice risk management"
      ]}
    />
  );
};

export default MedicalEmergenciesCourse;
