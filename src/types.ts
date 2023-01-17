export type TodoItem = {
  id: number;
  name: string;
  deadline: string;
  text: string;
};

export type NewTodoItem = Omit<TodoItem, "id">;

export type TodoList = {
  id: number;
  title: string;
  items: TodoItem[];
};
