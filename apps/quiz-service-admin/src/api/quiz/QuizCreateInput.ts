import { QuestionCreateNestedManyWithoutQuizzesInput } from "./QuestionCreateNestedManyWithoutQuizzesInput";
import { QuizAttemptCreateNestedManyWithoutQuizzesInput } from "./QuizAttemptCreateNestedManyWithoutQuizzesInput";

export type QuizCreateInput = {
  description?: string | null;
  questions?: QuestionCreateNestedManyWithoutQuizzesInput;
  quizAttempts?: QuizAttemptCreateNestedManyWithoutQuizzesInput;
  title?: string | null;
};
