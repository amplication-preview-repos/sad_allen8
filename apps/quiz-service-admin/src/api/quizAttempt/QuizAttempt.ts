import { JsonValue } from "type-fest";
import { Quiz } from "../quiz/Quiz";
import { User } from "../user/User";

export type QuizAttempt = {
  answers: JsonValue;
  createdAt: Date;
  id: string;
  quiz?: Quiz | null;
  score: number | null;
  updatedAt: Date;
  user?: User | null;
};
