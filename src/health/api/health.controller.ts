import { Controller, Get, HttpCode, Inject, Logger } from "@nestjs/common";

@Controller("health")
export class HealthController {
  constructor(@Inject(Logger) private readonly logger: Logger) {}

  @Get()
  @HttpCode(200)
  run() {
    this.logger.log("Health endpoint called!");
    return { status: "ok" };
  }

  @Get("/ping")
  @HttpCode(200)
  ping() {
    this.logger.log("Ping endpoint called!");
    return { status: "pong" };
  }
}
