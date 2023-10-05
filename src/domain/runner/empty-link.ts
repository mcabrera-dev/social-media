import { Link } from "./link";
import { injectable } from "inversify";

@injectable()
export class EmptyLink implements Link {
  setNext(): Link {
    return this;
  }
  next(): void {}
}
