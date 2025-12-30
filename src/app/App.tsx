import { useState } from "react";
import StartScreen from "../components/StartScreen";
import "../styles/global.css";

const App = () => {
  const [resolution, setResolution] = useState<string | null>(null);

  return (
    <div className="background">
      <div className="background-overlay" />

      <div className="app-container">
        {resolution === null ? (
          <StartScreen onStart={setResolution} />
        ) : (
          <h2 className="debate-title">
            Debate starting on: {resolution}
          </h2>
        )}
      </div>
    </div>
  );
};

export default App;
