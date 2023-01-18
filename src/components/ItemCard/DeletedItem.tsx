import { DeletedTodoItem } from "src/types";

import ItemCard from "./ItemCard";

type Props = {
  todoItem: DeletedTodoItem;
  onItemClick: (id: number) => void;
};

export default function DeletedItem({
  onItemClick,
  todoItem: { id, name, text },
}: Props) {
  const handleItemClick = () => {
    onItemClick(id);
  };

  return (
    <ItemCard title={name} onCardClick={handleItemClick}>
      <div className="h-1/2">
        <p className="break-words h-4/5 overflow-hidden">{text}</p>
      </div>
    </ItemCard>
  );
}
