import { Todo } from "./todo";

export interface TodoRepository {
  getAll(): Promise<Todo[]>;
  remove(id: string): void;
  add(todo: Todo): void
}
