import { InputJsonValue } from "../../types";
import { QuizWhereUniqueInput } from "../quiz/QuizWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type QuizAttemptCreateInput = {
  answers?: InputJsonValue;
  quiz?: QuizWhereUniqueInput | null;
  score?: number | null;
  user?: UserWhereUniqueInput | null;
};
