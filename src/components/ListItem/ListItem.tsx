import { TodoListItem } from "src/types";

type Props = {
  item: TodoListItem;
};

export default function ListItem({
  item: { id: listId, title, tasks },
}: Props) {
  return (
    <li>
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        {tasks.map(({ name, id: taskId }) => (
          <p key={`listOfTodoLists-${listId}-task-${taskId}`}>{name}</p>
        ))}
      </div>
    </li>
  );
}
