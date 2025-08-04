import React from "react";
import ClinicalCourse from "./ClinicalCourse";

const OnlineImplantDentistryCourse = () => {
  return (
    <ClinicalCourse
      courseName="Online Implant Dentistry Course"
      courseDescription="Comprehensive online training in implant dentistry with virtual clinical simulations and expert guidance."
      duration="8 Months"
      level="Intermediate to Advanced"
      courseFeatures={[
        "Interactive online modules",
        "Virtual surgical planning",
        "Case study analysis",
        "Live webinar sessions",
        "Digital certification"
      ]}
      courseBenefits={[
        "Flexible learning schedule",
        "Access to global expertise",
        "Cost-effective training",
        "Self-paced progression",
        "Continuing education credits"
      ]}
    />
  );
};

export default OnlineImplantDentistryCourse;
