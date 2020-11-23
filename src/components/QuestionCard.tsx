import React from "react";

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  questionNr,
  question,
  answers,
  callback,
  userAnswer,
  totalQuestions,
}) => (
  <div>
    <p className="number">
      Question: {questionNr} / {totalQuestions}{" "}
    </p>
    <p>{question}</p>
    <div>
      {answers.map((answer) => (
        <div key={answer}>
          <button disabled={userAnswer} value={answer} onClick={callback}>
            <span>{answer}</span>
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default QuestionCard;
