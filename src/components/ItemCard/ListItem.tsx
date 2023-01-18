import { TodoList } from "src/types/generalTypes";
import { Card } from "../common";

type Props = {
  item: TodoList;
};

export default function ListItem({
  item: { id: listId, title, items },
}: Props) {
  return (
    <a href={`/todo_list/${listId}`}>
      <Card title={title} header={<p>{items.length}</p>}>
        <div>
          {items.slice(0, 5).map(({ name, id: itemId }) => (
            <p key={`todoLists-${listId}-item-${itemId}`}>{name}</p>
          ))}
        </div>
      </Card>
    </a>
  );
}
