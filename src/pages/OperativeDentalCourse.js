import React from "react";
import ClinicalCourse from "./ClinicalCourse";

const OperativeDentalCourse = () => {
  return (
    <ClinicalCourse
      courseName="Operative Dental Course"
      courseDescription="Advanced training in operative dentistry techniques for precise and durable dental restorations."
      duration="5 Months"
      level="Intermediate to Advanced"
      courseFeatures={[
        "Advanced cavity preparation",
        "Direct restoration techniques",
        "Adhesive protocols",
        "Composite artistry",
        "Finishing and polishing"
      ]}
      courseBenefits={[
        "Technical skill enhancement",
        "Aesthetic restoration mastery",
        "Longevity improvement",
        "Patient satisfaction increase",
        "Clinical efficiency boost"
      ]}
    />
  );
};

export default OperativeDentalCourse;
