import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuizAttemptServiceBase } from "./base/quizAttempt.service.base";

@Injectable()
export class QuizAttemptService extends QuizAttemptServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
