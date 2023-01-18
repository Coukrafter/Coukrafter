import { combineReducers } from "redux";

import { todoListsReducer, TodoListsState } from "./TodoListsList/reducer";

export type HomePageState = {
  todoLists: TodoListsState;
};

export const homePageReducer = combineReducers<HomePageState>({
  todoLists: todoListsReducer,
});
