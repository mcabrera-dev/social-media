import { BaseLink } from "./base-link";
import { Context } from "./context";
import { inject, injectable } from "inversify";
import type { Logger } from "../use-cases/logger";
import { TYPES } from "../../core/types/types";
import { env } from "process";

@injectable()
export class LoggerLink extends BaseLink {
  @inject(TYPES.LOGGER)
  private readonly logger!: Logger;

  next(context: Context): void {
    if (!env.production) {
      this.logger.group(context.useCase.constructor.name);
      this.logger.group("Parameters");
      this.logger.log(`${context.param ?? "-"}`);
      this.logger.groupEnd();
      this.logger.group("Result");
      this.logger.object(context.result ?? "-");
      this.logger.groupEnd();
      this.logger.groupEnd();
    }

    this.nextLink.next(context);
  }
}
