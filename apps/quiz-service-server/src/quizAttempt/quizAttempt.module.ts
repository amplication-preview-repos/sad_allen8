import { Module } from "@nestjs/common";
import { QuizAttemptModuleBase } from "./base/quizAttempt.module.base";
import { QuizAttemptService } from "./quizAttempt.service";
import { QuizAttemptController } from "./quizAttempt.controller";
import { QuizAttemptResolver } from "./quizAttempt.resolver";

@Module({
  imports: [QuizAttemptModuleBase],
  controllers: [QuizAttemptController],
  providers: [QuizAttemptService, QuizAttemptResolver],
  exports: [QuizAttemptService],
})
export class QuizAttemptModule {}
