import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { QuizWhereUniqueInput } from "../quiz/QuizWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type QuizAttemptWhereInput = {
  answers?: JsonFilter;
  id?: StringFilter;
  quiz?: QuizWhereUniqueInput;
  score?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
