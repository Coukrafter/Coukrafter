import { TodoItem } from "src/types/generalTypes";
import { parseDate } from "src/utils/dateUtils";
import { ItemCard } from "../";

type Props = {
  todoItem: Pick<TodoItem, "id" | "name"> & Partial<TodoItem>;
  handleDelete?: (id: number) => void;
  handleEdit?: (id: number) => void;
  handleToogleCheckItem?: (id: number, isChecked: boolean) => void;
};

export default function TaskItem({
  todoItem: { deadline, text, name, id, isChecked },
  handleDelete,
  handleEdit,
  handleToogleCheckItem,
}: Props) {
  const handleDeleteButtonClick = handleDelete && (() => handleDelete(id));
  const handleEditButtonClick = handleEdit && (() => handleEdit(id));
  const handleCheckboxChange =
    handleToogleCheckItem &&
    (({ target: { checked } }: React.ChangeEvent<HTMLInputElement>) =>
      handleToogleCheckItem(id, checked));

  return (
    <ItemCard
      title={name}
      onDeleteButtonClick={handleDeleteButtonClick}
      onEditButtonClick={handleEditButtonClick}
      onCheckboxChange={handleCheckboxChange}
      isCheckboxChecked={isChecked}
    >
      <div className="h-1/2">
        <p className="break-words h-4/5 overflow-hidden">{text}</p>
        {deadline && (
          <p className="flex-none h-1/5">
            Deadline: {parseDate(new Date(deadline))}
          </p>
        )}
      </div>
    </ItemCard>
  );
}
