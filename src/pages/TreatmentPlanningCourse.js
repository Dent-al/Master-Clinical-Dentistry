import React from "react";
import ClinicalCourse from "./ClinicalCourse";

const TreatmentPlanningCourse = () => {
  return (
    <ClinicalCourse
      courseName="Treatment Planning Course"
      courseDescription="Master comprehensive treatment planning for complex dental cases with multidisciplinary approaches."
      duration="4 Months"
      level="Advanced"
      courseFeatures={[
        "Comprehensive case assessment",
        "Multidisciplinary treatment planning",
        "Risk assessment and management",
        "Patient communication strategies",
        "Digital treatment planning tools"
      ]}
      courseBenefits={[
        "Strategic treatment approach",
        "Improved case acceptance",
        "Enhanced patient outcomes",
        "Reduced treatment complications",
        "Professional confidence building"
      ]}
    />
  );
};

export default TreatmentPlanningCourse;
