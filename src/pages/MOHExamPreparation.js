import React from "react";
import ExamPreparation from "./ExamPreparation";

const MOHExamPreparation = () => {
  return (
    <ExamPreparation
      examName="MOH"
      examDescription="Ministry of Health examination preparation for dental practice in various Middle Eastern countries."
      examFeatures={[
        "Country-specific MOH requirements",
        "Medical and dental knowledge assessment",
        "Clinical skills evaluation",
        "Professional conduct and ethics",
        "Local healthcare system familiarization"
      ]}
      examBenefits={[
        "Authorization for dental practice",
        "Government sector employment opportunities",
        "Professional recognition and credibility",
        "Structured career progression",
        "Comprehensive healthcare benefits"
      ]}
    />
  );
};

export default MOHExamPreparation;
