import logo from './logo.svg';

import {QuizContextProvider} from "./Context/QuizContext";
import TopProgressBar from "./Components/TopProgressBar";
import QuestionInfo from "./Components/QuestionInfo";
import QuestionAndBtn from "./Components/QuestionAndBtns";
import ResultCard from "./Components/ResultCard";
import './App.css';

function App() {
  return (
    <QuizContextProvider>
    <div className="App">
    <TopProgressBar />
    <div id="container">
      <QuestionInfo />
      <QuestionAndBtn />
      
    </div>

    </div>
    
    </QuizContextProvider>
  );
}

export default App;
