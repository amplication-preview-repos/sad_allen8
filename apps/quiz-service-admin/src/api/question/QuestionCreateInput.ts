import { InputJsonValue } from "../../types";
import { QuizWhereUniqueInput } from "../quiz/QuizWhereUniqueInput";

export type QuestionCreateInput = {
  correctAnswers?: InputJsonValue;
  options?: InputJsonValue;
  quiz?: QuizWhereUniqueInput | null;
  title?: string | null;
};
