import { Modal } from "src/components";
import NewTodoListForm, { NEW_TODO_LIST_FORM_ID } from "./NewListForm";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NewListModal({ setIsOpen, isOpen }: Props) {
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleSubmit = () => {
    setIsOpen(false);
  };
  return (
    <Modal
      isOpen={isOpen}
      title="Create new list"
      modalFooter={
        <>
          <button className="btn" type="button" onClick={handleClose}>
            Close
          </button>
          <button
            className="btn btn-primary"
            onClick={handleSubmit}
            form={NEW_TODO_LIST_FORM_ID}
          >
            Submit
          </button>
        </>
      }
    >
      <NewTodoListForm />
    </Modal>
  );
}
