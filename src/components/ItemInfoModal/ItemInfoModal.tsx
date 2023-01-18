import { TodoItem } from "src/types";
import { parseDate } from "src/utils/dateUtils";
import { Modal } from "../common";

type Props = {
  isOpen: boolean;
  todoItem?: Pick<TodoItem, "id" | "name"> & Partial<TodoItem>;
  onClose: () => void;
};

export default function ItemInfoModal({ isOpen, todoItem, onClose }: Props) {
  if (!isOpen || !todoItem) return null;

  const { name, deadline, text } = todoItem;

  return (
    <Modal
      title={name}
      modalFooter={
        <div className="w-full flex justify-between">
          {deadline && <p>Deadline: {parseDate(new Date(deadline))}</p>}
          <button className="btn" type="button" onClick={onClose}>
            Close
          </button>
        </div>
      }
    >
      <div className="max-h-40 my-2 overflow-y-auto">
        <p className="w-full">{text}</p>
      </div>
    </Modal>
  );
}
