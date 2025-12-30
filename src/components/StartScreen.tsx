type Props = {
  onStart: (resolution: string) => void;
};

const StartScreen = ({ onStart }: Props) => {
  return (
    <div>
      <h1 className="title">AI Debate Coach</h1>
      <p className="subtitle">Enter a resolution to begin</p>

      <div className="resolution-input">
        <input
          placeholder="Resolved: ..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onStart(e.currentTarget.value);
            }
          }}
        />
        <button
          onClick={() => {
            const input = document.querySelector(
              ".resolution-input input"
            ) as HTMLInputElement;
            onStart(input.value);
          }}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
