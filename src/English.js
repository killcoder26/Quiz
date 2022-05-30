import React from 'react'
import { useState } from "react";
export default function English() {



    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
  
    const questions = [
      {
        text: "Does ______ know that _____ was absent?",
        options: [
          { id: 0, text:"she,me" , isCorrect: false },
          { id: 1, text:"she,I" , isCorrect: true },
          { id: 2, text:"her,me" , isCorrect: false },
          { id: 3, text:"her,I" , isCorrect: false },
        ]
      },
      {
        text: "Please tell_____ _____have obtained a degree in Chemistry.",
        options: [
          { id: 0, text:"him,I" , isCorrect: true },
          { id: 1, text: "he,I", isCorrect: false },
          { id: 2, text: "he,me", isCorrect: false },
          { id: 3, text: "him,me", isCorrect: false },
        ],
      },      {
        text: "I remember that____ bought the fruits from ___",
        options: [
          { id: 0, text:"they,us", isCorrect: true },
          { id: 1, text:"them,we", isCorrect: false },
          { id: 2, text: "them,us", isCorrect: false },
          { id: 3, text:"they,we", isCorrect: false },
        ],
      },
      {
        text: "When the dog chased Jayant,____ ran as fast as ____ could.",
        options: [
          { id: 0, text:"he,he" , isCorrect: true },
          { id: 1, text:"him,he", isCorrect: false },
          { id: 2, text:"him,him", isCorrect: false },
          { id: 3, text: "he,him", isCorrect: false },
        ],
      },
      {
        text: "My uncle works in a factory. ____ says ____ is a noisy place.",
        options: [
          { id: 0, text: "he,its", isCorrect: false },
          { id: 1, text:"he,it", isCorrect: true },
          { id: 2, text: "it,its", isCorrect: false },
          { id: 3, text:"it,it", isCorrect: false },
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
      <h1>English Quiz</h1>

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
          <button onClick={() => restartGame()}>Restart</button>
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



