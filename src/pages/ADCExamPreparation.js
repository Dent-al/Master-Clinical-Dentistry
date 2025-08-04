import React from "react";
import ExamPreparation from "./ExamPreparation";

const ADCExamPreparation = () => {
  return (
    <ExamPreparation
      examName="ADC"
      examDescription="Australian Dental Council examination preparation designed to help international dentists practice in Australia."
      examFeatures={[
        "Comprehensive written and practical exam preparation",
        "Clinical assessment training",
        "Updated ADC guidelines and requirements",
        "Mock examinations and performance analysis",
        "Expert mentorship from ADC-qualified professionals"
      ]}
      examBenefits={[
        "Direct pathway to Australian dental practice",
        "Structured learning approach",
        "High success rate among candidates",
        "Ongoing support throughout the process",
        "Career opportunities in Australia"
      ]}
    />
  );
};

export default ADCExamPreparation;
