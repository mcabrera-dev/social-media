import { TYPES } from "../core/types/types";
import { inject, injectable } from "inversify";
import { Logger } from "../domain/use-cases/logger";

@injectable()
export class ConsoleLogger implements Logger {
  @inject(TYPES.WINDOW)
  private readonly window: any;

  object<T>(object: T): void {
    this.window.console.dir(object);
  }
  groupEnd(): void {
    this.window.console.groupEnd();
  }

  info(message: string): void {
    this.window.console.info(message);
  }

  group(label: string): void {
    this.window.console.group(label);
  }

  log(message: string): void {
    this.window.console.log(message);
  }
}
