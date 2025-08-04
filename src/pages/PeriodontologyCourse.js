import React from "react";
import ClinicalCourse from "./ClinicalCourse";

const PeriodontologyCourse = () => {
  return (
    <ClinicalCourse
      courseName="Periodontology Course"
      courseDescription="Specialized training in periodontal diagnosis, treatment, and maintenance for optimal gum health."
      duration="6 Months"
      level="Advanced"
      courseFeatures={[
        "Periodontal disease diagnosis",
        "Non-surgical periodontal therapy",
        "Surgical periodontal procedures",
        "Implant site preparation",
        "Maintenance protocols"
      ]}
      courseBenefits={[
        "Specialized periodontal expertise",
        "Comprehensive treatment approach",
        "Improved patient outcomes",
        "Referral network expansion",
        "Practice specialization opportunity"
      ]}
    />
  );
};

export default PeriodontologyCourse;
