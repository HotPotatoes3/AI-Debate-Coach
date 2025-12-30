import React from "react";

interface CoachFeedbackProps {
  feedback: string;
}

const CoachFeedback: React.FC<CoachFeedbackProps> = ({ feedback }) => {
  return (
    <div className="card feedback-card">
      <h3>Coach Feedback</h3>
      <p>{feedback || "AI feedback will appear here."}</p>
    </div>
  );
};

export default CoachFeedback;
