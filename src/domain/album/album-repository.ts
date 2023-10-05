import { Album } from "./album";


export interface UserRepository {
  getAll(): Promise<Album[]>;
  findById(id: string): Promise<Album>;
}
