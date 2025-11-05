import quizCompleteImg from "../assets/quiz-complete.png";
import { useContext } from "react";
import { QuizContext } from "./quizContext";
export default function summary({ allAnswers, questions }) {
  {console.log('Summary rendered')}
  const { gotoHomePage } = useContext(QuizContext);
  let noCorrectAns = 0;
  let noSkippedAns = 0;
  let noWrongAns = 0;
  for (let index = 0; index < allAnswers.length; index++) {
    const element = allAnswers[index];
    if (element === questions[index].answers[0]) {
      noCorrectAns += 1;
    } else if (element === null) {
      noSkippedAns += 1;
    } else {
      noWrongAns += 1;
    }
  }
  return (
    <div id="summary">
      <div id="summaryHead">
        <h2>Quiz Completed</h2>
        <img src={quizCompleteImg} alt="Trophy Icon" />
      </div>
      <div id="summary-stats">
        <p>
          <span className="number">
            {Math.round((noSkippedAns / allAnswers.length) * 100)}%
          </span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">
            {Math.round((noCorrectAns / allAnswers.length) * 100)}%
          </span>
          <span className="text">Correct</span>
        </p>
        <p>
          <span className="number">
            {Math.round((noWrongAns / allAnswers.length) * 100)}%
          </span>
          <span className="text">Wrong</span>
        </p>
      </div>
      <ol>
        {allAnswers.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === questions[index].answers[0]) {
            cssClass += " correct";
          } else if (answer === null) {
            cssClass += " skipped";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{questions[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
      <div id="takeNewQuiz">
        <button onClick={gotoHomePage}>Try Again</button>
      </div>
    </div>
  );
}
