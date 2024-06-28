import { QuestionUpdateManyWithoutQuizzesInput } from "./QuestionUpdateManyWithoutQuizzesInput";
import { QuizAttemptUpdateManyWithoutQuizzesInput } from "./QuizAttemptUpdateManyWithoutQuizzesInput";

export type QuizUpdateInput = {
  description?: string | null;
  questions?: QuestionUpdateManyWithoutQuizzesInput;
  quizAttempts?: QuizAttemptUpdateManyWithoutQuizzesInput;
  title?: string | null;
};
