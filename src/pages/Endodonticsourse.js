import React from "react";
import ClinicalCourse from "./ClinicalCourse";

const EndodonticsCourse = () => {
  return (
    <ClinicalCourse
      courseName="Endodontics Course"
      courseDescription="Master the art and science of endodontic treatment with advanced techniques in root canal therapy and endodontic surgery."
      duration="6 Months"
      level="Advanced"
      courseFeatures={[
        "Advanced root canal treatment techniques",
        "Endodontic surgery and microsurgery",
        "Digital endodontics and imaging",
        "Complex case management",
        "Pain management strategies"
      ]}
      courseBenefits={[
        "Expertise in complex endodontic procedures",
        "Increased treatment success rates",
        "Enhanced patient satisfaction",
        "Specialized practice opportunities",
        "Professional recognition in endodontics"
      ]}
    />
  );
};

export default EndodonticsCourse;
