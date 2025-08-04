import React from "react";
import ClinicalCourse from "./ClinicalCourse";

const DentalRadiologyCourse = () => {
  return (
    <ClinicalCourse
      courseName="Dental Radiology Course"
      courseDescription="Comprehensive training in dental imaging techniques and radiographic interpretation for accurate diagnosis."
      duration="4 Months"
      level="Intermediate"
      courseFeatures={[
        "Digital imaging systems",
        "Radiographic interpretation",
        "3D imaging and CBCT",
        "Radiation safety protocols",
        "Advanced imaging techniques"
      ]}
      courseBenefits={[
        "Expert diagnostic skills",
        "Advanced imaging proficiency",
        "Radiation safety compliance",
        "Improved treatment planning",
        "Enhanced diagnostic accuracy"
      ]}
    />
  );
};

export default DentalRadiologyCourse;
