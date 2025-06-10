import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
  subject: "",
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
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setSubject: (state, action) => {
      state.subject = action.payload;
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
  setTheme,
  setSubject,
  setQuestions,
  nextQuestion,
  setScore,
  setIsAnswer,
  resetQuiz,
} = quizSlice.actions;
export default quizSlice.reducer;
