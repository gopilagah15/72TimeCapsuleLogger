import React, { useState } from "react";
import TimeCapsuleForm from "./components/TimeCapsuleForm";
import TimeCapsuleList from "./components/TimeCapsuleList";
import TimeCapsuleSummary from "./components/TimeCapsuleSummary";

const App = () => {
  const [capsules, setCapsules] = useState([]);

  // Function to add a new capsule
  const addCapsule = (capsule) => {
    setCapsules([...capsules, capsule]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Time Capsule Logger</h1>
      <TimeCapsuleForm addCapsule={addCapsule} />
      <TimeCapsuleList capsules={capsules} />
      <TimeCapsuleSummary capsules={capsules} />
    </div>
  );
};

export default App;
