import { TodoList } from "src/types";
import { Card } from "../common";

type Props = {
  item: TodoList;
};

export default function ListItem({
  item: { id: listId, title, items },
}: Props) {
  return (
    <a href={`/todo_list/${listId}`}>
      <Card title={title}>
        <div>
          {items.map(({ name, id: itemId }) => (
            <p key={`todoLists-${listId}-item-${itemId}`}>{name}</p>
          ))}
        </div>
      </Card>
    </a>
  );
}
