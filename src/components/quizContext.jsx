import { createContext, useState} from "react";
export const QuizContext = createContext({
    gotoHomePage: () =>{},
    initialCount: 0,
});
export const QuizContextProvider = ({children}) => {
    const [count, setCount] = useState(0);
    function RetakeQuiz() {
        setCount(prev => prev + 1);
    }
    const ctxValue = {
        gotoHomePage: RetakeQuiz,
        initialCount: count,
    }
    return(
        <QuizContext.Provider value={ctxValue}>
            {children}
        </QuizContext.Provider>
    )
}
