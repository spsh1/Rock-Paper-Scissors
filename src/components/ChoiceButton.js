import React from "react";

const icons = {
  rock: "🪨",
  paper: "📄",
  scissors: "✂️",
};

function ChoiceButton({ label, onClick }) {
  return (
    <button className="choice-btn" onClick={onClick}>
      <span className="icon">{icons[label.toLowerCase()]}</span>
      <span>{label}</span>
    </button>
  );
}

export default ChoiceButton;