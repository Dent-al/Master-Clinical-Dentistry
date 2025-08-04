import React from "react";
import ExamPreparation from "./ExamPreparation";

const HAADExamPreparation = () => {
  return (
    <ExamPreparation
      examName="HAAD"
      examDescription="Health Authority Abu Dhabi examination preparation for dental practice in Abu Dhabi, UAE."
      examFeatures={[
        "UAE healthcare regulations and standards",
        "Clinical competency assessment",
        "Professional ethics and patient safety",
        "Infection control and quality assurance",
        "Documentation and reporting standards"
      ]}
      examBenefits={[
        "License to practice in Abu Dhabi",
        "Access to UAE healthcare system",
        "International career opportunities",
        "Tax-free income potential",
        "Multicultural professional environment"
      ]}
    />
  );
};

export default HAADExamPreparation;
