export type TodoItem = {
  id: number;
  name: string;
  deadline: string;
  text: string;
  isChecked: boolean;
};

export type NewTodoItem = Omit<TodoItem, "id" | "isChecked">;

export type TodoList = {
  id: number;
  title: string;
  items: TodoItem[];
};

export type DeletedTodoItem = Omit<TodoItem, "deadline" | "isChecked">;
