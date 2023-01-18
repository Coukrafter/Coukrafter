import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

import TodoList from "./components/TodoList";
import { todoListFetch } from "./features/TodoList/actions";

export default function TodoListPage() {
  const { listId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    listId && dispatch(todoListFetch(parseInt(listId)));
  }, []);

  return (
    <div className="flex gap-8 p-4">
      <Sidebar />
      <TodoList />
    </div>
  );
}
