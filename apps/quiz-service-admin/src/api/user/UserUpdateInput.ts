import { LeaderboardUpdateManyWithoutUsersInput } from "./LeaderboardUpdateManyWithoutUsersInput";
import { QuizAttemptUpdateManyWithoutUsersInput } from "./QuizAttemptUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  leaderboards?: LeaderboardUpdateManyWithoutUsersInput;
  password?: string;
  quizAttempts?: QuizAttemptUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
