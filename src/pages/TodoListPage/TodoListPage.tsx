import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import TodoList from "./components/TodoList";
import { todoListFetch } from "./features/TodoList/actions";
import { getTodoListTitle } from "./features/TodoList/selectors";

export default function TodoListPage() {
  const { listId } = useParams();
  const dispatch = useDispatch();
  const todoListTitle = useSelector(getTodoListTitle);

  useEffect(() => {
    listId && dispatch(todoListFetch(parseInt(listId)));
  }, []);

  return (
    <div>
      <div>
        <h1>{todoListTitle || "Loading todo list"}</h1>
      </div>
      <div>Search bar</div>
      <TodoList />
    </div>
  );
}
