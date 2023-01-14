export type TodoTask = {
  id: number;
  name: string;
};

export type TodoListItem = {
  id: number;
  title: string;
  tasks: TodoTask[];
};
