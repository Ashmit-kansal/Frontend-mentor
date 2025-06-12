import { useSelector, useDispatch } from "react-redux";
import { resetQuiz } from "../redux/quizSlice";
import SelectedSubject from "./SelectedSubject";

function Result() {
  const { theme, score, questions, isQuizCompleted } = useSelector(
    (state) => state.quiz
  );
  const dispatch = useDispatch();

  return (
    <div
      className={`mt-15 lg:mt-20 ${
        isQuizCompleted ? "block lg:flex lg:gap-20" : "hidden"
      }`}
    >
      <div className="w-full">
        <h1
          className={`text-preset2-light md:text-[64px] ${
            theme == "light" ? "text-blue-900" : "text-white"
          }`}
        >
          Quiz Completed
        </h1>
        <h1
          className={`my-2 mb-10 md:mb-15 text-preset2-md md:text-[64px] ${
            theme == "light" ? "text-blue-900" : "text-white"
          }`}
        >
          You scored...
        </h1>
      </div>
      <div className="w-full">
        <div
          className={`flex flex-col items-center justify-center p-8 lg:p-16 ${
            theme == "light" ? "bg-white" : "bg-blue-850"
          } rounded-xl gap-4`}
        >
          <SelectedSubject />
          <h1
            className={`text-preset1 md:text-[144px] ${
              theme == "light" ? "text-blue-900" : "text-white"
            }`}
          >
            {score}
          </h1>
          <p
            className={`text-preset4 md:text-[28px] ${
              theme == "light" ? "text-grey-500" : "text-blue-300"
            }`}
          >
            out of {questions.length}
          </p>
        </div>
        <button
          className="p-4 lg:p-8 bg-purple-600 text-white w-full my-4 md:my-8 rounded-xl text-preset4 md:text-[28px]"
          onClick={() => dispatch(resetQuiz())}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

export default Result;
