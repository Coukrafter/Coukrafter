import { combineReducers } from "redux";
import {
  homePageReducer,
  HomePageState,
} from "./pages/HomePage/features/reducer";
import {
  todoListPageReducer,
  TodoListPageState,
} from "./pages/TodoListPage/features/reducer";

export type StoreState = {
  homePage: HomePageState;
  todoListPage: TodoListPageState;
};

export const rootReducer = combineReducers<StoreState>({
  homePage: homePageReducer,
  todoListPage: todoListPageReducer,
});
