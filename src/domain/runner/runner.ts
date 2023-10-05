import { LoggerLink } from "./logger-link";
import { ExecutorLink } from "./executor-link";
import { UseCase } from "../use-cases/use-case";
import { TYPES } from "../../core/types/types";
import { inject, injectable } from "inversify";
import { Link } from "./link";

@injectable()
export class Runner {
  @inject(TYPES.EXECUTOR_LINK)
  private readonly executorLink!: ExecutorLink;

  @inject(TYPES.LOGGER_LINK)
  private readonly loggerLink!: LoggerLink;

  private chain?: Link;

  run(useCase: UseCase<unknown, unknown>, param: unknown): unknown {
    this.chain = this.executorLink.setNext(this.loggerLink);
    const context = { useCase, result: undefined, param };
    this.chain?.next(context);

    return context.result;
  }
}
