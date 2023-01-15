import { combineReducers } from "redux";
import { todoListReducer, TodoListState } from "./TodoList/reducer";

export type TodoListPageState = {
  todoList: TodoListState;
};

export const todoListPageReducer = combineReducers<TodoListPageState>({
  todoList: todoListReducer,
});
