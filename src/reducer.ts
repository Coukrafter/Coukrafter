import { combineReducers } from "redux";
import {
  homePageReducer,
  HomePageState,
} from "./pages/HomePage/features/reducer";

export type StoreState = {
  homePage: HomePageState;
};

export const rootReducer = combineReducers<StoreState>({
  homePage: homePageReducer,
});
