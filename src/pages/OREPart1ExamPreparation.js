import React from "react";
import ExamPreparation from "./ExamPreparation";

const OREPart1ExamPreparation = () => {
  return (
    <ExamPreparation
      examName="ORE Part 1"
      examDescription="Overseas Registration Examination Part 1 preparation for dental practice in the United Kingdom."
      examFeatures={[
        "UK dental practice standards",
        "Written examination preparation",
        "Clinical knowledge assessment",
        "Evidence-based dentistry principles",
        "UK healthcare system orientation"
      ]}
      examBenefits={[
        "First step towards UK dental registration",
        "Access to NHS and private practice",
        "European dental career opportunities",
        "High-quality continuing education",
        "Professional development support"
      ]}
    />
  );
};

export default OREPart1ExamPreparation;
