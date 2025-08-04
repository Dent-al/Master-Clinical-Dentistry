import React from "react";
import ClinicalCourse from "./ClinicalCourse";

const PedodonticsCourse = () => {
  return (
    <ClinicalCourse
      courseName="Pedodontics Course"
      courseDescription="Specialized training in pediatric dentistry for providing comprehensive dental care to children and adolescents."
      duration="6 Months"
      level="Advanced"
      courseFeatures={[
        "Child psychology in dentistry",
        "Pediatric treatment techniques",
        "Behavioral management",
        "Preventive care protocols",
        "Special needs considerations"
      ]}
      courseBenefits={[
        "Pediatric dentistry expertise",
        "Family practice expansion",
        "Child-friendly practice development",
        "Preventive care emphasis",
        "Community service opportunities"
      ]}
    />
  );
};

export default PedodonticsCourse;
