import { combineReducers } from "redux";
import {
  listOfTodoListsReducer,
  ListOfTodoListsState,
} from "./ListOfTodoLists/reducer";

export type HomePageState = {
  listOfTodoLists: ListOfTodoListsState;
};

export const homePageReducer = combineReducers<HomePageState>({
  listOfTodoLists: listOfTodoListsReducer,
});
