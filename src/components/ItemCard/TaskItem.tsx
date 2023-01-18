import { TodoItem } from "src/types/generalTypes";
import { parseDate } from "src/utils/dateUtils";

import { ItemCard } from "../";

type Props = {
  todoItem: TodoItem;
  handleDelete?: (id: number) => void;
  handleEdit?: (id: number) => void;
  handleToogleCheckItem?: (id: number, isChecked: boolean) => void;
  onItemClick?: (id: number) => void;
};

export default function TaskItem({
  todoItem: { deadline, text, name, id, isChecked },
  handleDelete,
  handleEdit,
  handleToogleCheckItem,
  onItemClick,
}: Props) {
  const handleDeleteButtonClick = handleDelete && (() => handleDelete(id));
  const handleEditButtonClick = handleEdit && (() => handleEdit(id));
  const handleCheckboxChange =
    handleToogleCheckItem &&
    (({ target: { checked } }: React.ChangeEvent<HTMLInputElement>) =>
      handleToogleCheckItem(id, checked));

  const handleCardClick = () => {
    onItemClick?.(id);
  };

  return (
    <ItemCard
      title={name}
      isCheckboxChecked={isChecked}
      onDeleteButtonClick={handleDeleteButtonClick}
      onEditButtonClick={handleEditButtonClick}
      onCheckboxChange={handleCheckboxChange}
      onCardClick={handleCardClick}
    >
      <div className="h-1/2">
        <p className="break-words h-4/5 overflow-hidden">{text}</p>
        <p className="flex-none h-1/5">
          Deadline: {parseDate(new Date(deadline))}
        </p>
      </div>
    </ItemCard>
  );
}
