import { QuizAttempt as TQuizAttempt } from "../api/quizAttempt/QuizAttempt";

export const QUIZATTEMPT_TITLE_FIELD = "id";

export const QuizAttemptTitle = (record: TQuizAttempt): string => {
  return record.id?.toString() || String(record.id);
};
