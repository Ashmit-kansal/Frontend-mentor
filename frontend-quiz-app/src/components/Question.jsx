import { useSelector, useDispatch } from "react-redux";
import { setScore, nextQuestion, setIsAnswer } from "../redux/quizSlice";
import { useState } from "react";

function Question() {
  const {
    theme,
    questions,
    currentQuestionIndex,
    isQuizCompleted,
    isAnswer,
    subject,
    status,
  } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();

  const [showError, setShowError] = useState(false);
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (status === "loading") return <div>Loading...</div>;
  if (!questions || questions.length === 0) {
    console.log("No questions available");
    return;
  }

  const current = questions[currentQuestionIndex];

  return (
    <div
      className={`lg:flex gap-20 ${
        subject === "" || isQuizCompleted ? "hidden" : "block"
      }`}
    >
      {/* this div is for showing the question */}
      <div>
        <div>
          <h1
            className={`text-preset6 md:text-[20px] mt-15 ${
              theme == "light" ? "text-grey-500" : "text-blue-300"
            }`}
          >
            Question {currentQuestionIndex} of {questions.length}
          </h1>
          <h2
            className={`text-preset3 md:text-[36px] my-5 ${
              theme == "light" ? "text-blue-900" : "text-white"
            }`}
          >
            {current.question}
          </h2>
        </div>
        {/* this div is for progress bar */}
        <div
          className={`h-[16px] rounded-lg p-1 lg:mt-42 ${
            theme == "light" ? "bg-white" : "bg-blue-850"
          }`}
        >
          <div
            className="bg-purple-600 h-full rounded-lg"
            style={{
              width: `${
                ((currentQuestionIndex + 1) / questions.length) * 100
              }%`,
            }}
          ></div>
        </div>
      </div>
      {/* this div is for showing the options */}
      <div className="flex flex-col gap-4 mt-10 lg:w-full">
        {current.options.map((option, idx) => (
          <button
            className={`p-4 flex gap-4 items-center rounded-xl ${
              selected === option
                ? submitted
                  ? option == current.answer
                    ? "outline-2 outline-green-500"
                    : "outline-2 outline-red-500"
                  : "outline-2 outline-purple-600"
                : "outline-none"
            } ${theme == "light" ? "bg-white" : "bg-blue-850"}`}
            key={idx}
            onClick={() => {
              if (!submitted) {
                setSelected(option);
                setShowError(false);
              }
            }}
          >
            <div
              className={`p-3 text-preset4 md:text-[28px] rounded-lg text-grey-500 ${
                selected == option
                  ? submitted
                    ? option === current.answer
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                    : "bg-purple-600 text-white"
                  : "bg-grey-50"
              }`}
            >
              {String.fromCharCode(idx + 65)}
            </div>
            <p
              className={`text-preset4 md:text-[28px] ${
                theme == "light" ? "text-blue-900" : "text-white"
              }`}
            >
              {option}
            </p>
            {submitted &&
              (option == current.answer ? (
                <svg
                  className="ml-auto w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="none"
                  viewBox="0 0 40 40"
                >
                  <path
                    fill="#26D782"
                    d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-1.875 15.105L25.3 15.41a1.25 1.25 0 0 1 1.915 1.593l-.145.174-8.06 8.08a1.25 1.25 0 0 1-1.595.148l-.175-.145-4.375-4.375a1.25 1.25 0 0 1 1.595-1.913l.175.143 3.49 3.49Z"
                  />
                </svg>
              ) : (
                selected == option && (
                  <svg
                    className="ml-auto w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="none"
                    viewBox="0 0 40 40"
                  >
                    <path
                      fill="#EE5454"
                      d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-5.402 7.415.142-.175a1.25 1.25 0 0 1 1.595-.143l.175.143L20 18.233l3.49-3.493a1.25 1.25 0 0 1 1.595-.143l.175.143a1.25 1.25 0 0 1 .142 1.595l-.142.175L21.767 20l3.493 3.49a1.25 1.25 0 0 1 .142 1.595l-.142.175a1.25 1.25 0 0 1-1.595.142l-.175-.142L20 21.767l-3.49 3.493a1.25 1.25 0 0 1-1.595.142l-.175-.142a1.25 1.25 0 0 1-.143-1.595l.143-.175L18.233 20l-3.493-3.49a1.25 1.25 0 0 1-.143-1.595Z"
                    />
                  </svg>
                )
              ))}
          </button>
        ))}
        <button
          className={`bg-purple-600 text-white p-6 rounded-xl text-preset4 md:text-[28px] ${
            isAnswer == "" ? "block" : "hidden"
          }`}
          onClick={() => {
            if (selected === "") {
              setShowError(true);
              return;
            }
            setShowError(false);
            if (selected === current.answer) {
              dispatch(setScore());
            }
            dispatch(setIsAnswer(selected));
            setSubmitted(true);
          }}
        >
          Submit Answer
        </button>
        <div
          className={`flex items-center gap-2 justify-center ${
            !showError ? "hidden" : "block"
          }`}
        >
          <svg
            className="w-[24px] h-[24px] md:w-[30px] md:h-[30px]"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
            viewBox="0 0 40 40"
          >
            <path
              fill="#EE5454"
              d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-5.402 7.415.142-.175a1.25 1.25 0 0 1 1.595-.143l.175.143L20 18.233l3.49-3.493a1.25 1.25 0 0 1 1.595-.143l.175.143a1.25 1.25 0 0 1 .142 1.595l-.142.175L21.767 20l3.493 3.49a1.25 1.25 0 0 1 .142 1.595l-.142.175a1.25 1.25 0 0 1-1.595.142l-.175-.142L20 21.767l-3.49 3.493a1.25 1.25 0 0 1-1.595.142l-.175-.142a1.25 1.25 0 0 1-.143-1.595l.143-.175L18.233 20l-3.493-3.49a1.25 1.25 0 0 1-.143-1.595Z"
            />
          </svg>
          <p
            className={`text-preset4 md:text-[28px] ${
              theme == "light" ? "text-red-500" : "text-white"
            }`}
          >
            Please select an answer
          </p>
        </div>
        <button
          className={`bg-purple-600 text-white p-6 rounded-xl text-preset4 md:text-[28px] ${
            isAnswer == "" ? "hidden" : "block"
          }`}
          onClick={() => {
            dispatch(nextQuestion());
            setSelected("");
            setSubmitted(false);
            dispatch(setIsAnswer(""));
          }}
        >
          Next Question
        </button>
      </div>
    </div>
  );
}

export default Question;
