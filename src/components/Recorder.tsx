import React, { useState } from "react";

interface RecorderProps {
  onTranscript: (text: string) => void;
}

const Recorder: React.FC<RecorderProps> = ({ onTranscript }) => {
  const [isRecording, setIsRecording] = useState(false);

  const toggleRecording = () => {
    setIsRecording(!isRecording);

    // Temporary placeholder
    if (!isRecording) {
      onTranscript("User is speaking their argument...");
    }
  };

  return (
    <div className="card recorder-card">
      <button
        className={isRecording ? "recording" : ""}
        onClick={toggleRecording}
      >
        {isRecording ? "Stop Speaking" : "Start Speaking"}
      </button>
    </div>
  );
};

export default Recorder;
