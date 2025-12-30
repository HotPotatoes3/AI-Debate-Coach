import React from "react";

interface TranscriptProps {
  text: string;
}

const Transcript: React.FC<TranscriptProps> = ({ text }) => {
  return (
    <div className="card transcript-card">
      <h3>Your Argument</h3>
      <p>{text || "Speak to begin your argument..."}</p>
    </div>
  );
};

export default Transcript;
