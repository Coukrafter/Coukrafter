import { TodoListItem } from "src/types";

type Props = {
  item: TodoListItem;
};

export default function ListItem({
  item: { id: listId, title, items },
}: Props) {
  return (
    <li className="card w-60 h-60 bg-white">
      <a href={`/todo_list/${listId}`}>
        <div className="card-body">
          <div>
            <h2 className="card-title text-2xl ">{title}</h2>
          </div>
          <div>
            {items.map(({ name, id: itemId }) => (
              <p key={`todoLists-${listId}-item-${itemId}`}>{name}</p>
            ))}
          </div>
        </div>
      </a>
    </li>
  );
}
