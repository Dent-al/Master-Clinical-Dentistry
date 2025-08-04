import React from "react";
import ClinicalCourse from "./ClinicalCourse";

const DentalHygienistCourse = () => {
  return (
    <ClinicalCourse
      courseName="Dental Hygienist Course"
      courseDescription="Professional training for dental hygienists in preventive care and periodontal health maintenance."
      duration="6 Months"
      level="Professional"
      courseFeatures={[
        "Oral health assessment",
        "Professional cleaning techniques",
        "Periodontal therapy",
        "Patient education methods",
        "Radiographic procedures"
      ]}
      courseBenefits={[
        "Licensed hygienist qualification",
        "Preventive care expertise",
        "Independent practice capability",
        "Patient relationship building",
        "Healthcare career advancement"
      ]}
    />
  );
};

export default DentalHygienistCourse;
