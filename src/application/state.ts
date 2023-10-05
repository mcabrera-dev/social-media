import { User } from "../domain/user/user";

export class State {
  userList: User[] | undefined;
  selected: User | undefined;
}
