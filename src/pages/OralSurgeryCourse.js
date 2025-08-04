import React from "react";
import ClinicalCourse from "./ClinicalCourse";

const OralSurgeryCourse = () => {
  return (
    <ClinicalCourse
      courseName="Oral Surgery Course"
      courseDescription="Advanced training in oral and maxillofacial surgery procedures with emphasis on safety and precision."
      duration="8 Months"
      level="Advanced"
      courseFeatures={[
        "Surgical extractions",
        "Implant placement surgery",
        "Bone grafting procedures",
        "Soft tissue surgery",
        "Complication management"
      ]}
      courseBenefits={[
        "Surgical expertise development",
        "Complex case management",
        "Practice revenue enhancement",
        "Referral base expansion",
        "Specialized skill recognition"
      ]}
    />
  );
};

export default OralSurgeryCourse;
