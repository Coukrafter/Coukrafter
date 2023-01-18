import { combineReducers } from "redux";

import { filterReducer, FilterState } from "./Filter/reducer";
import { todoListReducer, TodoListState } from "./TodoList/reducer";

export type TodoListPageState = {
  todoList: TodoListState;
  filter: FilterState;
};

export const todoListPageReducer = combineReducers<TodoListPageState>({
  todoList: todoListReducer,
  filter: filterReducer,
});
