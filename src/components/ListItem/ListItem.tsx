import { TodoListItem } from "src/types";

type Props = {
  item: TodoListItem;
};

export default function ListItem({
  item: { id: listId, title, items },
}: Props) {
  return (
    <li>
      <a href={`/todo_list/${listId}`}>
        <div>
          <h3>{title}</h3>
        </div>
        <div>
          {items.map(({ name, id: itemId }) => (
            <p key={`todoLists-${listId}-item-${itemId}`}>{name}</p>
          ))}
        </div>
      </a>
    </li>
  );
}
