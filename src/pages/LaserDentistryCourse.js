import React from "react";
import ClinicalCourse from "./ClinicalCourse";

const LaserDentistryCourse = () => {
  return (
    <ClinicalCourse
      courseName="Laser Dentistry Course"
      courseDescription="Advanced training in laser applications for dental procedures with precision and minimal invasiveness."
      duration="3 Months"
      level="Advanced"
      courseFeatures={[
        "Soft tissue laser applications",
        "Hard tissue laser procedures",
        "Laser safety protocols",
        "Pain management with lasers",
        "Equipment selection and maintenance"
      ]}
      courseBenefits={[
        "Cutting-edge technology expertise",
        "Minimally invasive procedures",
        "Enhanced patient comfort",
        "Practice modernization",
        "Competitive advantage"
      ]}
    />
  );
};

export default LaserDentistryCourse;
