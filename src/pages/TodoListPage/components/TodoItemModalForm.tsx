import { useForm, useFormState } from "react-hook-form";
import { useDispatch } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Modal } from "src/components";
import { TodoItem } from "src/types/generalTypes";

import {
  todoListEditItem,
  todoListSubmitNewItem,
} from "../features/TodoList/actions";
import { TodoItemFormMode } from "../types";

import TodoItemFormFields from "./TodoItemFormFields";
import { useEffect } from "react";
import { parseDateStringToInputValue } from "src/utils/dateUtils";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mode: TodoItemFormMode;
  defaultValues?: TodoItem;
};

const mapModeToTitle: Record<TodoItemFormMode, string> = {
  creating: "Create new Todo item",
  editing: "Edit Todo item",
};

export type TodoItemFormValues = {
  name: string;
  text: string;
  deadline: string;
};

const TODO_ITEM_FORM_ID = "newTodoItemForm";

const schema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  text: z.string(),
  deadline: z.coerce.date(),
});

const emptyFormValues: TodoItemFormValues = {
  deadline: "",
  name: "",
  text: "",
};

const mapTodoItemToFormValues = ({
  deadline,
  name,
  text,
}: TodoItem): TodoItemFormValues => ({
  deadline: parseDateStringToInputValue(deadline),
  name,
  text,
});

export default function TodoItemModalForm({
  isOpen,
  setIsOpen,
  mode,
  defaultValues,
}: Props) {
  const dispatch = useDispatch();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TodoItemFormValues>({
    resolver: zodResolver(schema),
  });
  const { isDirty } = useFormState({ control });

  useEffect(
    function resetFormOnOpen() {
      reset(
        defaultValues ? mapTodoItemToFormValues(defaultValues) : emptyFormValues
      );
    },
    [isOpen]
  );

  const handleFormSubmit = (data: TodoItemFormValues) => {
    switch (mode) {
      case "creating": {
        dispatch(todoListSubmitNewItem(data));
        break;
      }
      case "editing": {
        defaultValues &&
          dispatch(todoListEditItem({ ...defaultValues, ...data }));
        break;
      }
    }
    setIsOpen(false);
  };

  const handleCloseButtonClick = () => {
    setIsOpen(false);
  };

  const hasErrors = Object.keys(errors).length !== 0;

  const isSubmitDisabled = !isDirty || hasErrors;

  return (
    <Modal
      isOpen={isOpen}
      title={mapModeToTitle[mode]}
      modalFooter={
        <>
          <button
            className="btn"
            type="button"
            onClick={handleCloseButtonClick}
          >
            Close
          </button>
          <button
            className="btn btn-primary"
            form={TODO_ITEM_FORM_ID}
            disabled={isSubmitDisabled}
          >
            Submit
          </button>
        </>
      }
    >
      <form onSubmit={handleSubmit(handleFormSubmit)} id={TODO_ITEM_FORM_ID}>
        <TodoItemFormFields register={register} errors={errors} />
      </form>
    </Modal>
  );
}
