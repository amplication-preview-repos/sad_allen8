/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Leaderboard } from "./Leaderboard";
import { LeaderboardCountArgs } from "./LeaderboardCountArgs";
import { LeaderboardFindManyArgs } from "./LeaderboardFindManyArgs";
import { LeaderboardFindUniqueArgs } from "./LeaderboardFindUniqueArgs";
import { CreateLeaderboardArgs } from "./CreateLeaderboardArgs";
import { UpdateLeaderboardArgs } from "./UpdateLeaderboardArgs";
import { DeleteLeaderboardArgs } from "./DeleteLeaderboardArgs";
import { User } from "../../user/base/User";
import { LeaderboardService } from "../leaderboard.service";
@graphql.Resolver(() => Leaderboard)
export class LeaderboardResolverBase {
  constructor(protected readonly service: LeaderboardService) {}

  async _leaderboardsMeta(
    @graphql.Args() args: LeaderboardCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Leaderboard])
  async leaderboards(
    @graphql.Args() args: LeaderboardFindManyArgs
  ): Promise<Leaderboard[]> {
    return this.service.leaderboards(args);
  }

  @graphql.Query(() => Leaderboard, { nullable: true })
  async leaderboard(
    @graphql.Args() args: LeaderboardFindUniqueArgs
  ): Promise<Leaderboard | null> {
    const result = await this.service.leaderboard(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Leaderboard)
  async createLeaderboard(
    @graphql.Args() args: CreateLeaderboardArgs
  ): Promise<Leaderboard> {
    return await this.service.createLeaderboard({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Leaderboard)
  async updateLeaderboard(
    @graphql.Args() args: UpdateLeaderboardArgs
  ): Promise<Leaderboard | null> {
    try {
      return await this.service.updateLeaderboard({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Leaderboard)
  async deleteLeaderboard(
    @graphql.Args() args: DeleteLeaderboardArgs
  ): Promise<Leaderboard | null> {
    try {
      return await this.service.deleteLeaderboard(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: Leaderboard): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
