import "reflect-metadata";
import { Container } from "inversify";
import { GetUserListQry } from "../../application/queries/get-user-list-qry";
import { TYPES } from "../types/types";
import { StateManager } from "../../application/state-manager";
import { ReactStateManager } from "../../infrastructure/react-state-manager";
import { UserRepository } from "../../domain/user/user-repository";
import { ExecutorLink } from "../../domain/runner/executor-link";
import { LoggerLink } from "../../domain/runner/logger-link";
import { Runner } from "../../domain/runner/runner";
import { Logger } from "../../domain/use-cases/logger";
import { ConsoleLogger } from "../../infrastructure/console-logger";
import { UserHttpRepository } from "../../infrastructure/user-http-repository";

export const container = new Container();
container
  .bind<StateManager>(TYPES.STATE_MANAGER)
  .to(ReactStateManager)
  .inSingletonScope();
container
  .bind<GetUserListQry>(TYPES.GET_ALL_USER_QRY)
  .to(GetUserListQry)
  .inSingletonScope();
container
  .bind<UserRepository>(TYPES.USER_REPOSITORY)
  .to(UserHttpRepository)
  .inSingletonScope();
container.bind<Window>(TYPES.WINDOW).toConstantValue(window);
container.bind<Logger>(TYPES.LOGGER).to(ConsoleLogger).inSingletonScope();

container.bind<Runner>(TYPES.RUNNER).to(Runner).inSingletonScope();
container
  .bind<ExecutorLink>(TYPES.EXECUTOR_LINK)
  .to(ExecutorLink)
  .inSingletonScope();
container.bind<LoggerLink>(TYPES.LOGGER_LINK).to(LoggerLink).inSingletonScope();
