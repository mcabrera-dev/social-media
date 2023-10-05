import { Runner } from "../runner/runner";
import { TYPES } from "../../core/types/types";
import { container } from "../../core/ioc/ioc";
import { injectable } from "inversify";

@injectable()
export abstract class UseCase<Result = void, Param = void> {
  abstract readonly: boolean;
  abstract internalExecute(param: Param): Result;

  execute(param: Param): Result {
    return container.get<Runner>(TYPES.RUNNER).run(this, param) as Result;
  }
}
