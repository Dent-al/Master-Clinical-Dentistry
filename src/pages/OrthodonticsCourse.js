import React from "react";
import ClinicalCourse from "./ClinicalCourse";

const OrthodonticsCourse = () => {
  return (
    <ClinicalCourse
      courseName="Orthodontics Course"
      courseDescription="Comprehensive orthodontic training covering traditional and modern techniques for teeth alignment and bite correction."
      duration="12 Months"
      level="Advanced"
      courseFeatures={[
        "Traditional bracket systems",
        "Clear aligner therapy",
        "Digital orthodontics",
        "Growth and development",
        "Treatment mechanics"
      ]}
      courseBenefits={[
        "Orthodontic specialization",
        "Modern treatment techniques",
        "Practice expansion opportunity",
        "Patient demographic growth",
        "Long-term treatment relationships"
      ]}
    />
  );
};

export default OrthodonticsCourse;
