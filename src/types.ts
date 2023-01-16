export type TodoItem = {
  id: number;
  name: string;
  deadline: Date;
  text: string;
};

export type NewTodoItem = Omit<TodoItem, "id">;

export type TodoList = {
  id: number;
  title: string;
  items: TodoItem[];
};
