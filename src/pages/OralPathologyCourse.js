import React from "react";
import ClinicalCourse from "./ClinicalCourse";

const OralPathologyCourse = () => {
  return (
    <ClinicalCourse
      courseName="Oral Pathology Course"
      courseDescription="Comprehensive training in oral disease diagnosis and pathology for early detection and treatment planning."
      duration="5 Months"
      level="Advanced"
      courseFeatures={[
        "Oral disease recognition",
        "Biopsy techniques",
        "Histopathological interpretation",
        "Differential diagnosis",
        "Treatment planning integration"
      ]}
      courseBenefits={[
        "Enhanced diagnostic skills",
        "Early disease detection",
        "Improved patient outcomes",
        "Referral network development",
        "Specialized expertise recognition"
      ]}
    />
  );
};

export default OralPathologyCourse;
