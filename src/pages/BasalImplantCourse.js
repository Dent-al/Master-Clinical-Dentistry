import React from "react";
import ClinicalCourse from "./ClinicalCourse";

const BasalImplantCourse = () => {
  return (
    <ClinicalCourse
      courseName="Basal Implant Course"
      courseDescription="Learn advanced basal implantology techniques for immediate loading and complex bone situations."
      duration="4 Months"
      level="Advanced"
      courseFeatures={[
        "Basal implant placement techniques",
        "Immediate loading protocols",
        "Complex case management",
        "Bone quality assessment",
        "Prosthetic considerations"
      ]}
      courseBenefits={[
        "Expertise in basal implantology",
        "Immediate treatment solutions",
        "Reduced treatment time",
        "Enhanced patient outcomes",
        "Specialized implant practice"
      ]}
    />
  );
};

export default BasalImplantCourse;
