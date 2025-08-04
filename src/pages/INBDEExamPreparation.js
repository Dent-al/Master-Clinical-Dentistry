import React from "react";
import ExamPreparation from "./ExamPreparation";

const INBDEExamPreparation = () => {
  return (
    <ExamPreparation
      examName="INBDE"
      examDescription="Integrated National Board Dental Examinations preparation for dental licensure in the United States."
      examFeatures={[
        "Part I and Part II comprehensive preparation",
        "Case-based learning methodology",
        "Clinical simulation exercises",
        "Biomedical sciences and clinical dentistry modules",
        "Regular assessment and feedback"
      ]}
      examBenefits={[
        "Pathway to US dental licensure",
        "Evidence-based exam strategies",
        "Expert faculty with US experience",
        "Comprehensive study materials",
        "Personalized learning plans"
      ]}
    />
  );
};

export default INBDEExamPreparation;
