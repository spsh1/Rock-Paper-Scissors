import React, { useState } from "react";
import "./App.css";
import ChoiceButton from "./components/ChoiceButton";

const choices = ["rock", "paper", "scissors"];

const getResult = (user, computer) => {
  if (user === computer) return "Draw";

  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "You Win";
  }

  return "You Lose";
};

function App() {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState({ user: 0, computer: 0 });

  const playGame = (choice) => {
    const computer = choices[Math.floor(Math.random() * choices.length)];
    const gameResult = getResult(choice, computer);

    setUserChoice(choice);
    setComputerChoice(computer);
    setResult(gameResult);

    if (gameResult === "You Win") {
      setScore((prev) => ({ ...prev, user: prev.user + 1 }));
    } else if (gameResult === "You Lose") {
      setScore((prev) => ({ ...prev, computer: prev.computer + 1 }));
    }
  };

  const resetGame = () => {
    setUserChoice("");
    setComputerChoice("");
    setResult("");
    setScore({ user: 0, computer: 0 });
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Rock Paper Scissors</h1>
        <p className="subtitle">Minimal. Fast. Competitive.</p>

        <div className="scoreboard">
          <div>You: {score.user}</div>
          <div>Computer: {score.computer}</div>
        </div>

        <div className="buttons">
          <ChoiceButton label="Rock" onClick={() => playGame("rock")} />
          <ChoiceButton label="Paper" onClick={() => playGame("paper")} />
          <ChoiceButton label="Scissors" onClick={() => playGame("scissors")} />
        </div>

        {result && (
          <div className="result-box">
            <p>You chose: <b>{userChoice}</b></p>
            <p>Computer chose: <b>{computerChoice}</b></p>
            <h2 className={result === "You Win" ? "win" : result === "You Lose" ? "lose" : "draw"}>
              {result}
            </h2>
          </div>
        )}

        <button className="reset-btn" onClick={resetGame}>
          Reset Game
        </button>
      </div>
    </div>
  );
}

export default App;