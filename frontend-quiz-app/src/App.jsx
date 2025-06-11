import Background from "./components/Background";
import Header from "./components/Header";
import Question from "./components/Question";
import Result from "./components/Result";
import Subject from "./components/Subject";

function App() {
  return (
    <>
      <div className={`h-screen bg-grey-50 relative`}>
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
