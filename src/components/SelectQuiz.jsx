import HTMLQUESTIONS from "./htmlQuestions.js";
import CSSQUESTIONS from "./cssQuestions.js";
import JSQUESTIONS from "./jsQuestions.js";
import REACTQUESTIONS from "./reactQuestions.js";
import PYTHONQUESTIONS from "./pythonQuestions.js";
import NODEQUESTIONS from "./nodeQuestions.js";
import SQLQUESTIONS from "./sqlQuestions.js";
import JAVAQUESTIONS from "./javaQuestions.js";
import CPPQUESTIONS from "./cppQuestions.js";
import OOPSQUESTIONS from "./oopsQuestions.js";
import Quiz from "./Quiz.jsx";
import { useContext, useState, useEffect } from "react";
import { QuizContext } from "./quizContext.jsx";

export default function SelectQuiz() {
  {console.log('SelectedQuiz rendered')}
  const [selectedQuiz, setselectedQuiz] = useState(null);
  const { initialCount } = useContext(QuizContext);
  useEffect(() => {
    if (initialCount > 0) {
      setselectedQuiz(null);
    }
  }, [initialCount]);

  function handleHTMLQuiz() {
    setselectedQuiz(HTMLQUESTIONS);
  }
  function handleCSSQuiz() {
    setselectedQuiz(CSSQUESTIONS);
  }
  function handleJSQuiz() {
    setselectedQuiz(JSQUESTIONS);
  }
  function handleReactQuiz() {
    setselectedQuiz(REACTQUESTIONS);
  }
  function handleNodeQuiz() {
    setselectedQuiz(NODEQUESTIONS);
  }
  function handleSqlQuiz() {
    setselectedQuiz(SQLQUESTIONS);
  }
  function handlePythonQuiz() {
    setselectedQuiz(PYTHONQUESTIONS);
  }
  function handleJavaQuiz() {
    setselectedQuiz(JAVAQUESTIONS);
  }
  function handleCppQuiz() {
    setselectedQuiz(CPPQUESTIONS);
  }
  function handleOOPsQuiz() {
    setselectedQuiz(OOPSQUESTIONS);
  }
  if (selectedQuiz === null) {
    return (
      <div className="quizType">
        <div className="quizNameConatiner">
          <button className="selectQuiz" onClick={handleHTMLQuiz}>
            HTML
          </button>
          <button className="selectQuiz" onClick={handleCSSQuiz}>
            CSS
          </button>
          <button className="selectQuiz" onClick={handleJSQuiz}>
            JS
          </button>
          <button className="selectQuiz" onClick={handleReactQuiz}>
            React.js
          </button>
          <button className="selectQuiz" onClick={handleNodeQuiz}>
            Node.js
          </button>
          <button className="selectQuiz" onClick={handleSqlQuiz}>
            SQL
          </button>
          <button className="selectQuiz" onClick={handlePythonQuiz}>
            Python
          </button>
          <button className="selectQuiz" onClick={handleJavaQuiz}>
            Java
          </button>
          <button className="selectQuiz" onClick={handleCppQuiz}>
            C++
          </button>
          <button className="selectQuiz" onClick={handleOOPsQuiz}>
            OOPs
          </button>
        </div>
      </div>
    );
  }
  return <Quiz questions={selectedQuiz} />;
}
