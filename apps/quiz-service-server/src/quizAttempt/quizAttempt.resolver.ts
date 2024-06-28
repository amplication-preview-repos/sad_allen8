import * as graphql from "@nestjs/graphql";
import { QuizAttemptResolverBase } from "./base/quizAttempt.resolver.base";
import { QuizAttempt } from "./base/QuizAttempt";
import { QuizAttemptService } from "./quizAttempt.service";

@graphql.Resolver(() => QuizAttempt)
export class QuizAttemptResolver extends QuizAttemptResolverBase {
  constructor(protected readonly service: QuizAttemptService) {
    super(service);
  }
}
