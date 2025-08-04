import React from "react";
import ExamPreparation from "./ExamPreparation";

const AFKExamPreparation = () => {
  return (
    <ExamPreparation
      examName="AFK"
      examDescription="Approbation für Zahnärzte (AFK) examination preparation for dental practice in Germany."
      examFeatures={[
        "German dental practice standards training",
        "Language proficiency in dental terminology",
        "Clinical examination preparation",
        "German healthcare system orientation",
        "Practice management in German context"
      ]}
      examBenefits={[
        "Authorization to practice dentistry in Germany",
        "Cultural and professional integration support",
        "High-quality European dental education",
        "Access to German dental market",
        "Continuing education opportunities"
      ]}
    />
  );
};

export default AFKExamPreparation;
