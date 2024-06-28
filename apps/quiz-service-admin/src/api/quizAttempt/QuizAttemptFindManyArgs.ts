import { QuizAttemptWhereInput } from "./QuizAttemptWhereInput";
import { QuizAttemptOrderByInput } from "./QuizAttemptOrderByInput";

export type QuizAttemptFindManyArgs = {
  where?: QuizAttemptWhereInput;
  orderBy?: Array<QuizAttemptOrderByInput>;
  skip?: number;
  take?: number;
};
