import React from "react";
import ExamPreparation from "./ExamPreparation";

const DHAExamPreparation = () => {
  return (
    <ExamPreparation
      examName="DHA"
      examDescription="Dubai Health Authority examination preparation for dental practice in Dubai, UAE."
      examFeatures={[
        "DHA-specific examination format",
        "Dubai healthcare standards and protocols",
        "Clinical competency verification",
        "Patient care and safety guidelines",
        "Professional development requirements"
      ]}
      examBenefits={[
        "License to practice in Dubai",
        "Access to world-class healthcare facilities",
        "International exposure and networking",
        "Competitive compensation packages",
        "Professional growth opportunities"
      ]}
    />
  );
};

export default DHAExamPreparation;
