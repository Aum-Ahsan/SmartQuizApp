import Header from "./components/Header.jsx";
import { QuizContextProvider } from "./components/quizContext.jsx";
import SelectQuiz from "./components/SelectQuiz.jsx";

function App() {
  {console.log('App rendered')}
  return (
    <>
      <Header />
      <QuizContextProvider>
        <SelectQuiz />
      </QuizContextProvider>
    </>
  );
}

export default App;
