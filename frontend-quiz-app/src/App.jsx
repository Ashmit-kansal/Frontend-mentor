import Background from "./components/Background";
import Header from "./components/Header";
import Question from "./components/Question";
import Result from "./components/Result";
import Subject from "./components/Subject";

function App() {


  return (
    <>
      <div className={`h-screen bg-grey-50 relative`} >
        <div>
          <Background />
        </div>
        <div className="relative z-10 pt-5 px-5 md:pt-10 lg:pt-16">
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
