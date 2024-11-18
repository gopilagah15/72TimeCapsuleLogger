import React, { useState } from "react";
import dayjs from "dayjs";

const TimeCapsuleForm = ({ addCapsule }) => {
  const [item, setItem] = useState("");
  const [reminderDate, setReminderDate] = useState("");

  // Function to handle form submission
  const handleAdd = (e) => {
    e.preventDefault();
    if (!item || !reminderDate) return;

    const newCapsule = {
      id: Date.now(),
      item,
      reminderDate,
    };

    addCapsule(newCapsule);
    setItem("");
    setReminderDate("");
  };

  return (
    <form onSubmit={handleAdd} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Memory to save"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        required
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <input
        type="date"
        value={reminderDate}
        min={dayjs().add(1, "day").format("YYYY-MM-DD")}
        onChange={(e) => setReminderDate(e.target.value)}
        required
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <button type="submit" style={{ padding: "5px 10px" }}>
        Add to Capsule
      </button>
    </form>
  );
};

export default TimeCapsuleForm;
