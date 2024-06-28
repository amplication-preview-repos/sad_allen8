import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { QuestionListRelationFilter } from "../question/QuestionListRelationFilter";
import { QuizAttemptListRelationFilter } from "../quizAttempt/QuizAttemptListRelationFilter";

export type QuizWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  questions?: QuestionListRelationFilter;
  quizAttempts?: QuizAttemptListRelationFilter;
  title?: StringNullableFilter;
};
