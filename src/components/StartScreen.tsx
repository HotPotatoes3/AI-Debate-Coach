import { useState } from "react";
import CoachSprite from "./CoachSprite";
import ResolutionInput from "./ResolutionInput";

interface StartScreenProps {
  onStart: (resolution: string) => void;
}

const StartScreen = ({ onStart }: StartScreenProps) => {
  const [resolution, setResolution] = useState("");

  const handleStart = () => {
    if (!resolution.trim()) return;
    onStart(resolution);
  };

  return (
    <div className="start-screen">
      <CoachSprite />

      <h1 className="title">AI Debate Coach</h1>
      <p className="subtitle">
        Enter a resolution and prepare to defend your position.
      </p>

      <ResolutionInput
        value={resolution}
        onChange={setResolution}
        onSubmit={handleStart}
      />
    </div>
  );
};

export default StartScreen;
