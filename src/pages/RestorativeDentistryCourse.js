import React from "react";
import ClinicalCourse from "./ClinicalCourse";

const RestorativeDentistryCourse = () => {
  return (
    <ClinicalCourse
      courseName="Restorative Dentistry Course"
      courseDescription="Comprehensive training in restorative dentistry techniques for optimal functional and aesthetic outcomes."
      duration="5 Months"
      level="Intermediate"
      courseFeatures={[
        "Direct and indirect restorations",
        "Adhesive dentistry techniques",
        "Color matching and aesthetics",
        "Minimally invasive procedures",
        "Digital dentistry integration"
      ]}
      courseBenefits={[
        "Enhanced restorative skills",
        "Improved aesthetic outcomes",
        "Patient satisfaction increase",
        "Practice growth potential",
        "Modern technique proficiency"
      ]}
    />
  );
};

export default RestorativeDentistryCourse;
