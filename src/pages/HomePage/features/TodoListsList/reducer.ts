import { TodoList } from "src/types";
import { TodoListsActions } from "./actions";

export type TodoListsState = {
  isLoading: boolean;
  todoLists: TodoList[];
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

    case "HOME_PAGE.TODO_LISTS.SUBMIT_NEW_LIST": {
      return { ...state, isLoading: true };
    }

    case "HOME_PAGE.TODO_LISTS.SUBMIT_NEW_LIST.SUCCESS": {
      const { todoList } = action.payload;
      return {
        ...state,
        todoLists: [...state.todoLists, todoList],
        isLoading: false,
      };
    }

    case "HOME_PAGE.TODO_LISTS.SUBMIT_NEW_LIST.FAILURE": {
      return { ...state, isLoading: false };
    }

    default:
      return initialState;
  }
}
