import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { QuizWhereUniqueInput } from "../quiz/QuizWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type QuestionWhereInput = {
  correctAnswers?: JsonFilter;
  id?: StringFilter;
  options?: JsonFilter;
  quiz?: QuizWhereUniqueInput;
  title?: StringNullableFilter;
};
