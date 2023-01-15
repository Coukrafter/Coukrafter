export type TodoItem = {
  id: number;
  name: string;
  deadline: Date;
  text: string;
};

export type TodoListItem = {
  id: number;
  title: string;
  items: TodoItem[];
};
