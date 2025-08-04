import React from "react";
import ClinicalCourse from "./ClinicalCourse";

const DigitalDentistryCourse = () => {
  return (
    <ClinicalCourse
      courseName="Digital Dentistry Course"
      courseDescription="Comprehensive training in digital technologies and workflows for modern dental practice."
      duration="6 Months"
      level="Intermediate to Advanced"
      courseFeatures={[
        "Digital impression systems",
        "CAD/CAM technology",
        "3D printing applications",
        "Digital workflow integration",
        "Software training"
      ]}
      courseBenefits={[
        "Technology proficiency",
        "Practice modernization",
        "Efficiency improvement",
        "Patient experience enhancement",
        "Competitive advantage"
      ]}
    />
  );
};

export default DigitalDentistryCourse;
