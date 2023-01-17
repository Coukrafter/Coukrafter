import { TodoItem } from "src/types";
import { parseDateAndTime } from "src/utils/dateUtils";
import { ItemCard } from "../";

type Props = {
  todoItem: TodoItem;
  handleDelete: (id: number) => void;
  handleEdit: (id: number) => void;
  handleToogleCheckItem: (id: number, isChecked: boolean) => void;
};

export default function TaskItem({
  todoItem: { deadline, text, name, id },
  handleDelete,
  handleEdit,
  handleToogleCheckItem,
}: Props) {
  const handleDeleteButtonClick = () => handleDelete(id);
  const handleEditButtonClick = () => handleEdit(id);
  const handleCheckboxChange = ({
    target: { checked },
  }: React.ChangeEvent<HTMLInputElement>) => handleToogleCheckItem(id, checked);

  return (
    <ItemCard
      title={name}
      onDeleteButtonClick={handleDeleteButtonClick}
      onEditButtonClick={handleEditButtonClick}
      onCheckboxChange={handleCheckboxChange}
    >
      <p>Deadline: {parseDateAndTime(new Date(deadline))}</p>
      <div>
        <p>{text}</p>
      </div>
    </ItemCard>
  );
}
