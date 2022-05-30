import React from 'react'
import { useState } from "react";
export default function Science() {



  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "The temperature coefficient of resistance of a wire is 0.00125 per °C. At 300 K, its resistance is 1 ohm. This resistance of the wire will be 2 ohm at.",
      options: [
        { id: 0, text: "1154K", isCorrect: false },
        { id: 1, text: "1100K", isCorrect: false },
        { id: 2, text: "1400K", isCorrect: false },
        { id: 3, text: "1127K", isCorrect: true },
      ],
    },
    {
      text: "A current 4.0 A exist in a wire of cross-sectional area 2.0 mm2.If each cubic metre of the wire contains 12.0 × 10^^28 free electrons then the drift speed is",
      options: [
        { id: 0, text: "2x10^-8 m/s", isCorrect: false },
        { id: 1, text: "0.5x10^-3 m/s", isCorrect: false },
        { id: 2, text: "1.04x10^-4 m/s", isCorrect: true },
        { id: 3, text: "None of These", isCorrect: false },
      ],
    },
    {
      text: "A metallic oxide reacts with water to form its hydroxide, hydrogen peroxide and also liberates oxygen. The metallic oxide could be",
      options: [
        { id: 0, text: "CaO", isCorrect: false },
        { id: 1, text: "KO2", isCorrect: true },
        { id: 2, text: "Li2O", isCorrect: false },
        { id: 3, text: "Na2O2", isCorrect: false },
      ],
    },
    {
      text: "Lithium shows diagonal relationship with",
      options: [
        { id: 0, text: "Sodium", isCorrect: false },
        { id: 1, text: "Magnesium", isCorrect: true },
        { id: 2, text: "Calcium", isCorrect: false },
        { id: 3, text: "Aluminium", isCorrect: false },
      ],
    },
    {
      text: "Aluminium hydroxide, Al(OH)3 is insoluble in water, but dissolves readily in both acidic and basic solutions. Such behaviour is characteristic of",
      options: [
        { id: 0, text: "polyprotic behaviour", isCorrect: false },
        { id: 1, text: "hydrophyllic behaviour", isCorrect: false },
        { id: 2, text: "a buffer", isCorrect: false },
        { id: 3, text: "amphoteric behaviour", isCorrect: true },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      //question length completed
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };
  return (
    <div>
      <div className="App">
        {/* 1. Header  */}
        <h1>Science Quiz</h1>

        {/* 2. Current Score  */}
        <h2>Score: {score}</h2>

        {/* 3. Show results if question length completes*/}
        {showResults ? (
          /* 4. Final Results */
          <div className="final-results">
            <h1>Final Results</h1>
            <h2>
              {score} out of {questions.length} correct - (
              {(score / questions.length) * 100}%)
            </h2>
            <button onClick={() => restartGame()}>Restart game</button>
          </div>
        ) : (
          /* 5.else show Question Card  */
          <div className="question-card">
            {/* Current Question  */}
            <h2>
              Question: {currentQuestion + 1} out of {questions.length}
            </h2>
            <h3 className="question-text">{questions[currentQuestion].text}</h3>

            {/* List of possible answers  */}
            <ul>
              {questions[currentQuestion].options.map((option) => {
                return (
                  <li
                    key={option.id}
                    onClick={() => optionClicked(option.isCorrect)}
                  >
                    {option.text}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

    </div>
  )
}
