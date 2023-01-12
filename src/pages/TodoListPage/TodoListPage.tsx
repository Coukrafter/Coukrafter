import { useParams } from "react-router-dom";

export default function TodoListPage() {
  const { listId } = useParams();
  return <div>Todo List Page: {listId}</div>;
}
