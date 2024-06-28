import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LeaderboardCreateInput = {
  totalScore?: number | null;
  user?: UserWhereUniqueInput | null;
};
