import { Controller, Get, HttpCode, Inject, Logger } from "@nestjs/common";

@Controller({ path: "health", version: "1" })
export class HealthController {
  constructor(@Inject(Logger) private readonly logger: Logger) {}
  @Get("/ping")
  @HttpCode(200)
  ping() {
    this.logger.log("Ping endpoint called!");
    this.logger.log("Soemthing");
    return { status: "pong" };
  }

  @Get()
  @HttpCode(200)
  run() {
    this.logger.log("Health endpoint called!");
    return { status: "ok" };
  }
}
