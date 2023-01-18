import { TodoItem, TodoList } from "src/types";

export type TodoListsFetchResponse = TodoList[];

export type TodoListFetchResponse = TodoList;

export type TodoListsCreateNewListResponse = TodoList;

export type DeletedItemsFetchResponse = Omit<TodoItem, "deadline">[];
