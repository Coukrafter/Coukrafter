import { TodoListItem } from "src/types";
import { TodoListsActions } from "./actions";

export type TodoListsState = {
  isLoading: boolean;
  todoLists: TodoListItem[];
};

const initialState: TodoListsState = {
  isLoading: false,
  todoLists: [],
};

export function todoListsReducer(
  state: TodoListsState = initialState,
  action: TodoListsActions
) {
  switch (action.type) {
    case "HOME_PAGE.TODO_LISTS.FETCH": {
      return { ...state, isLoading: true };
    }

    case "HOME_PAGE.TODO_LISTS.FETCH.SUCCESS": {
      const { todoLists } = action.payload;
      return { ...state, isLoading: false, todoLists };
    }

    case "HOME_PAGE.TODO_LISTS.FETCH.FAILURE": {
      return { ...state, isLoading: false };
    }
    default:
      return initialState;
  }
}
