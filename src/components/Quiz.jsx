import QuestionTimer from "./QuestionTimer.jsx";
import Summary from "./Summary.jsx";
import { useCallback, useState } from "react";
export default function Quiz({questions}) {
  {console.log('Quiz rendered')}
  const [answersArray, setAnswersArray] = useState([]);
  const quizCompleted = answersArray.length === questions.length;
  const activeQuestionIndex = quizCompleted ? answersArray.length - 1 : answersArray.length;
  const shuffledAnswers = [...questions[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);
  const handleAnswerSave = useCallback(function handleAnswerSave(ans) {
    if (!quizCompleted) {
      setAnswersArray((prevAnswerArray) => {
        return [...prevAnswerArray, ans];
      });
    }
  }, []);
  const handleSkipAnswer = useCallback(
    () => handleAnswerSave(null),
    [handleAnswerSave]
  );
  if (quizCompleted) {
    return <Summary allAnswers={answersArray} questions={questions}/>
  }
  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          onTimeout={handleSkipAnswer}
          timeout={20000}
        />
        <h2>{questions[activeQuestionIndex].text}</h2>
      </div>
      <ul id="answers">
        {shuffledAnswers.map((answer) => {
          return (
            <li className="answer" type="none" key={answer}>
              <button onClick={() => handleAnswerSave(answer)}>{answer}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
