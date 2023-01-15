import { equals } from "ramda";
import { useSelector } from "react-redux";
import { TaskItem, ListOfItems } from "src/components";
import { getTodoListItems } from "../features/TodoList/selectors";

export default function TodoList() {
  const todoListItems = useSelector(getTodoListItems, equals);
  if (!todoListItems) {
    return <>empty list</>;
  }
  return (
    <>
      <ListOfItems>
        {todoListItems.map(({ id, name, deadline, text }) => (
          <TaskItem
            key={`todoListTaskItem-${id}`}
            deadline={deadline}
            text={text}
            title={name}
          />
        ))}
      </ListOfItems>
    </>
  );
}
