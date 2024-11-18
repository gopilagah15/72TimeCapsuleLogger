import React from "react";
import dayjs from "dayjs";

const TimeCapsuleList = ({ capsules }) => {
  // Function to determine the reminder status
  const getReminderStatus = (reminderDate) => {
    const daysLeft = dayjs(reminderDate).diff(dayjs(), "day");

    if (daysLeft < 0) return "Open Now!";
    if (daysLeft <= 7) return `Opening soon (${daysLeft} days left)`;
    return `Opens in ${daysLeft} days`;
  };

  return (
    <div>
      <h2>Stored Memories</h2>
      {capsules.length === 0 ? (
        <p>No memories stored yet.</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {capsules.map((capsule) => (
            <li key={capsule.id} style={{ marginBottom: "10px" }}>
              <strong>Item:</strong> {capsule.item} <br />
              <strong>Reminder Date:</strong> {capsule.reminderDate} <br />
              <strong>Status:</strong> {getReminderStatus(capsule.reminderDate)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TimeCapsuleList;
