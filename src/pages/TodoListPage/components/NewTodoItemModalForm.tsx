import Modal from "src/components/common/Modal/Modal";
import NewTodoItemForm, { NEW_TODO_ITEM_FORM_ID } from "./NewTodoItemForm";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NewTodoItemModalForm({ isOpen, setIsOpen }: Props) {
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleSubmit = () => {};

  return (
    <Modal
      isOpen={isOpen}
      modalFooter={
        <>
          <button className="btn" type="button" onClick={handleClose}>
            Close
          </button>
          <button
            className="btn btn-primary"
            onClick={handleSubmit}
            form={NEW_TODO_ITEM_FORM_ID}
          >
            Submit
          </button>
        </>
      }
    >
      <NewTodoItemForm />
    </Modal>
  );
}
