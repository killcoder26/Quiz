import React from 'react'
import { useState } from "react";
export default function Computer() {



  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "Which of the following correctly declares an array in C++?",
      options: [
        { id: 0, text: "array{10};", isCorrect: false },
        { id: 1, text: "array array[10];", isCorrect: false },
        { id: 2, text: "int array;", isCorrect: false },
        { id: 3, text: "int array[10];", isCorrect: true },
      ],
    },
    {
      text: " Pick the incorrect statement about inline functions in C++?",
      options: [
        { id: 0, text: "Saves overhead of a return call from a function", isCorrect: false },
        { id: 1, text: "They are generally very large and complicated function", isCorrect: true },
        { id: 2, text: "These functions are inserted/substituted at the point of call", isCorrect: false },
        { id: 3, text: "They reduce function call overheads", isCorrect: false },
      ],
    },
    {
      text: " Which of the following constructors are provided by the C++ compiler if not defined in a class?",
      options: [
        { id: 0, text: "Copy constructor", isCorrect: false },
        { id: 1, text: "Default constructor", isCorrect: false },
        { id: 2, text: "Assignment constructor", isCorrect: false },
        { id: 3, text: "All of the mentioned", isCorrect: true },
      ],
    },
    {
      text: "What is the benefit of c++ input and output over c input and output?",
      options: [
        { id: 0, text: "Both Type safety & Exception", isCorrect: false },
        { id: 1, text: "Sequence container", isCorrect: false },
        { id: 2, text: "Exception", isCorrect: false },
        { id: 3, text: "Type safety", isCorrect: true },
      ],
    },
    {
      text: " What is the meaning of the following declaration:int(*p[5])(); ? ",
      options: [
        { id: 0, text: "p is pointer to function", isCorrect: false },
        { id: 1, text: "p is array of pointer to function", isCorrect: true },
        { id: 2, text: "p is pointer to such function which return type is the array", isCorrect: false },
        { id: 3, text: "p is pointer to array of function", isCorrect: false },
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
        <h1>Computer Quiz</h1>

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
