import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQuestions = createAsyncThunk(
  "quiz/fetchQuestions",
  async (number) => {
    const response = await fetch(`data.json`);
    const data = await response.json();
    return data.quizzes[number].questions;
  }
);

const initialState = {
  theme: "light",
  subject: "",
  questions: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.questions = action.payload;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {
  toggleTheme,
  setSubject,
  setQuestions,
  nextQuestion,
  setScore,
  setIsAnswer,
  resetQuiz,
} = quizSlice.actions;
export default quizSlice.reducer;
