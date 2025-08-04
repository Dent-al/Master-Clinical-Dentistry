import React from "react";
import ClinicalCourse from "./ClinicalCourse";

const AestheticDentistryCourse = () => {
  return (
    <ClinicalCourse
      courseName="Aesthetic Dentistry Course"
      courseDescription="Advanced training in cosmetic dentistry techniques for creating beautiful, natural-looking smiles."
      duration="5 Months"
      level="Intermediate to Advanced"
      courseFeatures={[
        "Smile design principles",
        "Veneers and bonding techniques",
        "Teeth whitening procedures",
        "Gingival aesthetics",
        "Photography and documentation"
      ]}
      courseBenefits={[
        "Enhanced aesthetic skills",
        "Premium service offerings",
        "Increased patient satisfaction",
        "Practice differentiation",
        "Higher treatment value"
      ]}
    />
  );
};

export default AestheticDentistryCourse;
