import React, { useState } from "react";
import "./App.css";
import questions from "./questions"
import logo from "/ctecslogo.png";

const allTrades = [
  "Carpentry", "Culinary", "Automotive", "Auto Body", "Graphic Design", "Robotics",
  "Mechanical Engineering", "Hairdressing and Cosmetology", "Plumbing", "Electrical", "Health Technology"
];

export default function App() {
  const [email, setEmail] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [scores, setScores] = useState(
    allTrades.reduce((acc, trade) => ({ ...acc, [trade]: 0 }), {})
  );
  const [completed, setCompleted] = useState(false);

  const isValidEmail = email => /\S+@\S+\.\S+/.test(email);

  const handleAnswer = (choice) => {
    const updates = { ...scores };
    choice.trades.forEach((t) => {
      updates[t] += choice.points;
    });
    setScores(updates);

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setCompleted(true);
    }
  };

  const topTrades = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const progress = Math.round((index / questions.length) * 100);

  return (
    <div className="app">
      <button onClick={() => window.location.reload()} className="logo-button">
  <img src={logo} alt="CTECS logo" className="logo" />
</button>
      {!hasStarted ? (
  <div className="welcome">
    <h1 className="heading">CTECS PathFinder</h1>

    <p className="intro">
      This tool is designed to help you discover which career and technical pathway best fits your strengths and interests.
      Please enter your email to begin the assessment.
    </p>

    <input
      type="email"
      placeholder="Enter your email"
      value={email}
      onChange={e => setEmail(e.target.value)}
      className="email-input"
    />

    <button
      disabled={!isValidEmail(email)}
      onClick={() => setHasStarted(true)}
      className="start-button"
    >
      Start Assessment
    </button>
  </div>
) : completed ? (
        <div>
        <p className="trade-matches"> Your Top 5 Trade Matches </p>
        <ol>
            {topTrades.map(([trade, score], i) => (
              <li key={i}>
                {i === 0 ? (
                  <a
                    href={`https://www.google.com/search?q=${encodeURIComponent(trade + " Oliver Wolcott Technical High School")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#0066cc", fontWeight: "bold", textDecoration: "none" }}
                  >
                    {trade} ({score} pts)
                  </a>
                ) : (
                  `${trade} (${score} pts)`
                )}
              </li>
            ))}
          </ol>
          <div style={{ marginTop: "2rem" }}>
            <h4>Click on your top trade above to learn more about it.</h4>
            <button
              onClick={() => window.open("https://wolcott.cttech.org/programs/career-technical-education/", "_blank")}
              className="secondary-button"
            >
              Visit our website
            </button>
            <button
              onClick={() => window.location = "mailto:ruth.simoncelli@cttech.org?subject=CTECS PathFinder Results"}
              className="secondary-button"
            >
              Email an advisor
            </button>
          </div>
        </div>
      ) : (
        <div className="card">
          <p className="question-count"> Question {index + 1} of {questions.length}</p>
          <h3 className="question-text">{questions[index].question}</h3>
          <div className="choices">
            {questions[index].choices.map((choice, i) => (
              <button key={i} onClick={() => handleAnswer(choice)}>
                {choice.text}
              </button>
            ))}
          </div>
          <div className="progress">
            <div className="bar" style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}
    </div>
  );
}
