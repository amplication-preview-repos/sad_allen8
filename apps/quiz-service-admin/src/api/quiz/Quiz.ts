import { Question } from "../question/Question";
import { QuizAttempt } from "../quizAttempt/QuizAttempt";

export type Quiz = {
  createdAt: Date;
  description: string | null;
  id: string;
  questions?: Array<Question>;
  quizAttempts?: Array<QuizAttempt>;
  title: string | null;
  updatedAt: Date;
};
