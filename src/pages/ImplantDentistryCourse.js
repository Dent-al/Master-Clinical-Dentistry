import React from "react";
import ClinicalCourse from "./ClinicalCourse";

const ImplantDentistryCourse = () => {
  return (
    <ClinicalCourse
      courseName="Implant Dentistry Course"
      courseDescription="Comprehensive implant dentistry training covering surgical and prosthetic aspects of dental implants."
      duration="8 Months"
      level="Advanced"
      courseFeatures={[
        "Surgical implant placement",
        "Prosthetic restoration procedures",
        "Bone grafting techniques",
        "Digital planning and guided surgery",
        "Complication management"
      ]}
      courseBenefits={[
        "Complete implant expertise",
        "Surgical and prosthetic proficiency",
        "Increased practice revenue",
        "Patient treatment expansion",
        "Specialization opportunities"
      ]}
    />
  );
};

export default ImplantDentistryCourse;
