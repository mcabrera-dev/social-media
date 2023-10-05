import { injectable } from "inversify";
import { User } from "../domain/user/user";
import { UserRepository } from "../domain/user/user-repository";

@injectable()
export class UserHttpRepository implements UserRepository {
  async getAll(): Promise<User[]> {

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/`
    );
    const jsonData = await response.json();

    console.log('jsondata', jsonData)
    const userListDTO: User[] = jsonData;

    return userListDTO
  }

  async findById(id: string): Promise<User> {

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const jsonData = await response.json();

    const userDetailDTO: User = jsonData.results[0];

    return userDetailDTO
  }

}
