import { User } from "./user";

export interface UserRepository {
  getAll(): Promise<User[]>;
  findById(id: string): Promise<User>;
}
