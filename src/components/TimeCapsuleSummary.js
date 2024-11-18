import React from "react";

const TimeCapsuleSummary = ({ capsules }) => {
  // Function to get the total number of capsules
  const totalCapsules = capsules.length;
  // Function to count capsules that are ready to open
  const readyToOpenCount = capsules.filter((capsule) =>
    new Date(capsule.reminderDate) <= new Date()
  ).length;

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Capsule Summary</h2>
      <p>Total Capsules Stored: {totalCapsules}</p>
      <p>Ready to Open: {readyToOpenCount}</p>
    </div>
  );
};

export default TimeCapsuleSummary;
