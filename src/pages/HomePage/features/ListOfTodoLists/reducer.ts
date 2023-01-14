import { TodoListItem } from "src/types";
import { ListOfTodoListsActions } from "./actions";

export type ListOfTodoListsState = {
  isLoading: boolean;
  listOfTodoLists: TodoListItem[];
};

const mockListOfTodoLists: TodoListItem[] = [
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

const initialState: ListOfTodoListsState = {
  isLoading: false,
  listOfTodoLists: mockListOfTodoLists,
};

export function listOfTodoListsReducer(
  state: ListOfTodoListsState = initialState,
  action: ListOfTodoListsActions
) {
  switch (action.type) {
    case "HOME_PAGE.LIST_OF_TODO_LISTS.FETCH": {
      return { ...state, isLoading: true };
    }
    default:
      return initialState;
  }
}
