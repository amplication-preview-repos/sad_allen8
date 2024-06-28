import { InputJsonValue } from "../../types";
import { QuizWhereUniqueInput } from "../quiz/QuizWhereUniqueInput";

export type QuestionUpdateInput = {
  correctAnswers?: InputJsonValue;
  options?: InputJsonValue;
  quiz?: QuizWhereUniqueInput | null;
  title?: string | null;
};
