import { SortOrder } from "../../util/SortOrder";

export type LeaderboardOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  totalScore?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
