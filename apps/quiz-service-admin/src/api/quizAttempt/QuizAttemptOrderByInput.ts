import { SortOrder } from "../../util/SortOrder";

export type QuizAttemptOrderByInput = {
  answers?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  quizId?: SortOrder;
  score?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
