import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LeaderboardWhereInput = {
  id?: StringFilter;
  totalScore?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
