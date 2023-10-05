import { decorate, inject, injectable } from "inversify";
import { TYPES } from "../../core/types/types";
import { Query } from "../../domain/use-cases/query";
import type { StateManager } from "../state-manager";
import { User } from "../../domain/user/user";
import { UserRepository } from "../../domain/user/user-repository";

decorate(injectable(), Query);

@injectable()
export class GetUserListQry extends Query<Promise<User[]>> {
  @inject(TYPES.STATE_MANAGER)
  private stateManager!: StateManager;

  @inject(TYPES.USER_REPOSITORY)
  private userRepository!: UserRepository;

  async internalExecute(): Promise<User[]> {
    const userList = await this.userRepository.getAll();
    this.stateManager.patch({ userList: userList });

    console.log('userList', userList)
    return userList;
  }
}
