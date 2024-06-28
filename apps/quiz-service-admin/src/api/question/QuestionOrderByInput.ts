import { SortOrder } from "../../util/SortOrder";

export type QuestionOrderByInput = {
  correctAnswers?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  options?: SortOrder;
  quizId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
