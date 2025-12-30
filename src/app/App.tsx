import { useState } from "react";
import StartScreen from "../components/StartScreen";

const App = () => {
  const [resolution, setResolution] = useState<string | null>(null);

  return (
    <div className="app-container">
      {!resolution ? (
        <StartScreen onStart={setResolution} />
      ) : (
        <h2>Debate starting on: {resolution}</h2>
        // Debate UI will go here next
      )}
    </div>
  );
};

export default App;
