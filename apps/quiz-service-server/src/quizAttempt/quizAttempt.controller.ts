import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuizAttemptService } from "./quizAttempt.service";
import { QuizAttemptControllerBase } from "./base/quizAttempt.controller.base";

@swagger.ApiTags("quizAttempts")
@common.Controller("quizAttempts")
export class QuizAttemptController extends QuizAttemptControllerBase {
  constructor(protected readonly service: QuizAttemptService) {
    super(service);
  }
}
