import React from "react";
import ClinicalCourse from "./ClinicalCourse";

const FixedProsthodonticsCourse = () => {
  return (
    <ClinicalCourse
      courseName="Fixed Prosthodontics Course"
      courseDescription="Master the principles and techniques of fixed prosthodontics including crowns, bridges, and implant prosthetics."
      duration="6 Months"
      level="Intermediate to Advanced"
      courseFeatures={[
        "Crown and bridge fabrication",
        "Digital impressions and CAD/CAM",
        "Implant-supported prosthetics",
        "Occlusion and bite analysis",
        "Material science applications"
      ]}
      courseBenefits={[
        "Advanced prosthetic skills",
        "Digital workflow proficiency",
        "Enhanced patient outcomes",
        "Practice efficiency improvement",
        "Specialized prosthodontic practice"
      ]}
    />
  );
};

export default FixedProsthodonticsCourse;
