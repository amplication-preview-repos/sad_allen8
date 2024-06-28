import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LeaderboardUpdateInput = {
  totalScore?: number | null;
  user?: UserWhereUniqueInput | null;
};
