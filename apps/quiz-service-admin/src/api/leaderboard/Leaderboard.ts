import { User } from "../user/User";

export type Leaderboard = {
  createdAt: Date;
  id: string;
  totalScore: number | null;
  updatedAt: Date;
  user?: User | null;
};
