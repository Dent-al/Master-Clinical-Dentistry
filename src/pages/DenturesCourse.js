import React from "react";
import ClinicalCourse from "./ClinicalCourse";

const DenturesCourse = () => {
  return (
    <ClinicalCourse
      courseName="Dentures Course"
      courseDescription="Master complete and partial denture fabrication with advanced techniques for optimal fit and function."
      duration="4 Months"
      level="Intermediate"
      courseFeatures={[
        "Complete denture construction",
        "Partial denture design",
        "Digital denture workflows",
        "Patient assessment and treatment planning",
        "Adjustment and maintenance protocols"
      ]}
      courseBenefits={[
        "Expertise in removable prosthetics",
        "Digital workflow integration",
        "Patient satisfaction improvement",
        "Practice service expansion",
        "Cost-effective treatment options"
      ]}
    />
  );
};

export default DenturesCourse;
