









import React from 'react'
import { useState } from "react";
function Maths() {

    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
  

    const questions = [
        {
          text: "14 persons can complete a work in 16 days, 8 persons started the work 12 days after they started the work, 8 more peoples joined them. How many days will they take to complete the remaining work?",
          options: [
            { id: 0, text: 12, isCorrect: false },
            { id: 1, text: 5, isCorrect: false },
            { id: 2, text: 9, isCorrect: false },
            { id: 3, text: 8, isCorrect: true },
          ]
        },
        {
          text: "The ratio between the present age of Sudhir and Madan is 4:5 , if after five years the ratio of their age becomes 5 : 6, what is the present age of Sudhir?",
          options: [
            { id: 0, text: 20, isCorrect: true },
            { id: 1, text: 18, isCorrect: false },
            { id: 2, text: 22, isCorrect: false },
            { id: 3, text: 21, isCorrect: false },
          ],
        },      {
          text: "The sum of three consecutive odd numbers is 20 more than the first number of these. What is the middle number?",
          options: [
            { id: 0, text: 9, isCorrect: true },
            { id: 1, text: 7, isCorrect: false },
            { id: 2, text: 12, isCorrect: false },
            { id: 3, text: 8, isCorrect: false },
          ],
        },
        {
          text: "Find the compound interest of Rs. 10,000 in 9 months at 4% per annum interest payable quarterly.",
          options: [
            { id: 0, text:300 , isCorrect: false },
            { id: 1, text:303.01, isCorrect: true },
            { id: 2, text:301, isCorrect: false },
            { id: 3, text: 303.79, isCorrect: false },
          ],
        },
        {
          text: "If one-third of a number is 10 more than one fourth of the same number, what is 60% of that number?",
          options: [
            { id: 0, text: 144, isCorrect: false },
            { id: 1, text:72, isCorrect: true },
            { id: 2, text: 18, isCorrect: false },
            { id: 3, text:24, isCorrect: false },
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
      <h1>USA Quiz 🇺🇸</h1>

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

export default Maths
