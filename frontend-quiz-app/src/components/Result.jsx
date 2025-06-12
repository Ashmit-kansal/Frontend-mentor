import { useSelector, useDispatch } from "react-redux"
import { resetQuiz } from "../redux/quizSlice"

function Result() {

    const {theme, score, questions, isQuizCompleted } = useSelector((state) => state.quiz);
    const dispatch = useDispatch();

  return (
    <div className={`${isQuizCompleted ? "block lg:flex" : "hidden"}`}>
        <div>
            <h1 className={`text-preset2-light md:text-[64px] ${theme == "light"?"text-blue-900":""}`}>Quiz Completed</h1>
            <h1 className={`text-preset2-md md:text-[64px]`}>You scored...</h1>
        </div>
        <div>
            <div>
                <div>
                    <img />
                    <p></p>
                </div>
                <h1>8</h1>
                <p>out of 10</p>
            </div>
            <button>Play Again</button>
        </div>
    </div>
  )
}

export default Result