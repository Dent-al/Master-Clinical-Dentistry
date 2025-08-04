import React from "react";
import ClinicalCourse from "./ClinicalCourse";

const DentalTherapistCourse = () => {
  return (
    <ClinicalCourse
      courseName="Dental Therapist Course"
      courseDescription="Advanced training for dental therapists in expanded scope practice and patient care delivery."
      duration="8 Months"
      level="Advanced Professional"
      courseFeatures={[
        "Expanded scope procedures",
        "Local anesthesia administration",
        "Simple restorative procedures",
        "Preventive treatments",
        "Patient management"
      ]}
      courseBenefits={[
        "Extended practice scope",
        "Advanced clinical skills",
        "Healthcare access improvement",
        "Professional autonomy",
        "Specialized career path"
      ]}
    />
  );
};

export default DentalTherapistCourse;
