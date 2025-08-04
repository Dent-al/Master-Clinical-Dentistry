import React from "react";
import ClinicalCourse from "./ClinicalCourse";

const GeneralDentistryCourse = () => {
  return (
    <ClinicalCourse
      courseName="General Dentistry Course"
      courseDescription="Comprehensive general dentistry training covering all aspects of primary dental care and treatment."
      duration="6 Months"
      level="Beginner to Intermediate"
      courseFeatures={[
        "Comprehensive oral examination",
        "Preventive dentistry protocols",
        "Basic restorative procedures",
        "Oral health education",
        "Practice management essentials"
      ]}
      courseBenefits={[
        "Well-rounded dental skills",
        "Foundation for specialization",
        "Primary care proficiency",
        "Patient management skills",
        "Practice establishment readiness"
      ]}
    />
  );
};

export default GeneralDentistryCourse;
