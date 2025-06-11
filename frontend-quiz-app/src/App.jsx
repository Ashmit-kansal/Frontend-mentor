import Background from "./components/Background";
import Header from "./components/Header";
import Question from "./components/Question";
import Result from "./components/Result";
import Subject from "./components/Subject";
import { useSelector } from "react-redux";

function App() {

  const { theme } = useSelector((state) => state.quiz);

  return (
    <>
      <div className={`h-screen relative ${theme === "light" ? "bg-grey-50" : "bg-blue-900"}`}>
        <div>
          <Background />
        </div>
        <div className="relative z-10 p-8 md:p-14 lg:p-20 lg:min-width-[1100px]">
          <Header />
          <Subject />
          <Question />
          <Result />
        </div>
      </div>
    </>
  );
}

export default App;
