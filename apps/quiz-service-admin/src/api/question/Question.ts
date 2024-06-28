import { JsonValue } from "type-fest";
import { Quiz } from "../quiz/Quiz";

export type Question = {
  correctAnswers: JsonValue;
  createdAt: Date;
  id: string;
  options: JsonValue;
  quiz?: Quiz | null;
  title: string | null;
  updatedAt: Date;
};
