import { TodoListItem } from "src/types";
import { TodoListsActions } from "./actions";

export type TodoListsState = {
  isLoading: boolean;
  todoLists: TodoListItem[];
};

const mockTodoLists: TodoListItem[] = [
  {
    id: 1,
    title: "Title TODO",
    tasks: [
      { id: 1, name: "Task1" },
      { id: 2, name: "Task2" },
      { id: 3, name: "Task3" },
    ],
  },
  {
    id: 2,
    title: "Title TODO 2",
    tasks: [],
  },
  {
    id: 3,
    title: "Title TODO 3",
    tasks: [
      { id: 1, name: "Task1" },
      { id: 2, name: "Task2" },
    ],
  },
  {
    id: 4,
    title: "Title TODO 4",
    tasks: [{ id: 1, name: "Task1" }],
  },
];

const initialState: TodoListsState = {
  isLoading: false,
  todoLists: mockTodoLists,
};

export function todoListsReducer(
  state: TodoListsState = initialState,
  action: TodoListsActions
) {
  switch (action.type) {
    case "HOME_PAGE.TODO_LISTS.FETCH": {
      return { ...state, isLoading: true };
    }
    default:
      return initialState;
  }
}
