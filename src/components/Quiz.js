import React, { useState } from "react";
import data from "../data/data.json";
import "./quiz.css";
export default function Quiz() {
  const [message, setMessage] = useState("");
  const questions = data.questions;
  const answers = Array(questions.length).fill("");
  const onChangeValue = (e, index) => {
    answers[index] = e.target.value;
    console.log(answers);

  };

  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].correct===parseInt(answers[i])) {
        score++;
      }
    }
    setMessage(`You scored ${score} out of ${questions.length}`);
  };
  return (
    <div className="mx-auto">
      <div className="col-md-6 mx-auto ">
        <h1 className="text-center">Quiz</h1>
        {questions.map((question, index) => (
          <div className="mb-5" key={question.question}>
            <h6 className="text-left fw-bolder fs-4">{question.question}</h6>
            <div
              onChange={(e) => onChangeValue(e, index)}
              value={answers[index]}
              className="controls fs-5 mt-3"
            >
              {question.answers.map((answer, index2) => {
                return (
                  <div className="radio" key={answer}>
                    <input
                      type="radio"
                      name={question.question}
                      value={index2+1}
                      required
                    />
                    {answer}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        <div className="d-flex justify-content-center">
          <div
            className="btn btn-primary"
            onClick={calculateScore}
            style={{ alignSelf: "center" }}
          >
            Submit Answers
          </div> 
        </div>
        <div className="fw-bolder fs-3 text-center">{message}</div>

      </div>

      <div style={{ height: "20vh" }}></div>
    </div>
  );
}
