import React, { useState } from "react";

export const Ask = () => {
  const [questionId, setQuestionId] = useState("");

  const questions = [
    {
      id: 0,
      title: "What is Netflix?",
      body: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    },
    {
      id: 1,
      title: "How much does Netflix cost?",
      body: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EGP120 to EGP200 a month. No extra costs, no contracts.",
    },
    {
      id: 2,
      title: "Where can I Watch?",
      body: "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
    },
    {
      id: 3,
      title: "What can I Watch on Netflix?",
      body: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
  ];

  return (
    <div className="asked">
      <h1 className="section-title">Frequently Asked Questions</h1>
      <ul className="questions-list">
        {questions.map((question, index) => (
          <li className="question" key={index}>
            <button>
              <h4 onClick={() => setQuestionId(question.id)}>
                {question.title}
              </h4>
              {
                questionId === index ? (
                    <span onClick={() => setQuestionId(5)}>&#8722;</span>
                ):(
                    <span onClick={() => setQuestionId(5)}>&#43;</span>
                ) 
              }
            </button>
            <div
              className="details"
              style={
                questionId === index
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <span>
                <p>{question.body}</p>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
