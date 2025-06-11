import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
  subject: "",
  subjectImage: "",
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  isAnswer: "",
  isQuizCompleted: false,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setSubject: (state, action) => {
      state.subject = action.payload;
    },
    setSubjectImage: (state, action) => {
      state.subjectImage = action.payload;
    },
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      } else {
        state.isQuizCompleted = true;
      }
    },
    setScore: (state, action) => {
      state.score += action.payload;
    },
    setIsAnswer: (state, action) => {
      state.isAnswer = action.payload;
    },
    resetQuiz: () => initialState,
  },
});

export const {
  toggleTheme,
  setSubject,
  setSubjectImage,
  setQuestions,
  nextQuestion,
  setScore,
  setIsAnswer,
  resetQuiz,
} = quizSlice.actions;
export default quizSlice.reducer;
