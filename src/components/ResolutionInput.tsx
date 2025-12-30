interface ResolutionInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

const ResolutionInput = ({
  value,
  onChange,
  onSubmit,
}: ResolutionInputProps) => {
  return (
    <div className="resolution-input">
      <input
        type="text"
        placeholder="Resolved: ..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSubmit()}
      />
      <button onClick={onSubmit}>Start Debate</button>
    </div>
  );
};

export default ResolutionInput;
