import { TodoList } from "src/types";
import { TodoListActions } from "./actions";

export type TodoListState = {
  isLoading: boolean;
  todoList: TodoList | null;
};

const initialState: TodoListState = {
  isLoading: false,
  todoList: null,
};

export function todoListReducer(
  state: TodoListState = initialState,
  action: TodoListActions
) {
  switch (action.type) {
    case "TODO_LIST_PAGE.TODO_LIST.FETCH":
    case "TODO_LIST_PAGE.TODO_LIST.SUBMIT_NEW_ITEM":
    case "TODO_LIST_PAGE.TODO_LIST.DELETE_ITEM":
    case "TODO_LIST_PAGE.TODO_LIST.EDIT_ITEM": {
      return { ...state, isLoading: true };
    }

    case "TODO_LIST_PAGE.TODO_LIST.FETCH.FAILURE":
    case "TODO_LIST_PAGE.TODO_LIST.SUBMIT_NEW_ITEM.FAILURE":
    case "TODO_LIST_PAGE.TODO_LIST.DELETE_ITEM.FAILURE":
    case "TODO_LIST_PAGE.TODO_LIST.EDIT_ITEM.FAILURE": {
      return { ...state, isLoading: false };
    }

    case "TODO_LIST_PAGE.TODO_LIST.FETCH.SUCCESS": {
      const { todoList } = action.payload;
      return { ...state, isLoading: false, todoList };
    }

    case "TODO_LIST_PAGE.TODO_LIST.SUBMIT_NEW_ITEM.SUCCESS":
    case "TODO_LIST_PAGE.TODO_LIST.DELETE_ITEM.SUCCESS":
    case "TODO_LIST_PAGE.TODO_LIST.EDIT_ITEM.SUCCESS": {
      const { todoItems } = action.payload;
      return {
        ...state,
        todoList: { ...state.todoList, items: todoItems },
        isLoading: false,
      };
    }

    default:
      return state;
  }
}
