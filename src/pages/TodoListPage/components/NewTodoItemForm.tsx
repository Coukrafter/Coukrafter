import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { TextInput, TextAreaInput, DateInput } from "src/components";
import { useDispatch } from "react-redux";
import { todoListSubmitNewTask } from "../features/TodoList/actions";
import { NewTodoItem } from "src/types";

type Props = {};

type NewTodoItemFormValues = {
  "Task name": string;
  Description: string;
  Deadline: Date;
};

export const NEW_TODO_ITEM_FORM_ID = "newTodoItemForm";

const schema = z.object({
  "Task name": z.string(),
  Description: z.string(),
  Deadline: z.coerce.date(),
});

const transformedFormValuesToTodoItem = ({
  ["Task name"]: name,
  Deadline,
  Description,
}: NewTodoItemFormValues): NewTodoItem => ({
  name,
  text: Description,
  deadline: Deadline,
});

export default function NewTodoItemForm({}: Props) {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<NewTodoItemFormValues>({ resolver: zodResolver(schema) });

  const handleFormSubmit = (data: NewTodoItemFormValues) => {
    const transformedFormValues = transformedFormValuesToTodoItem(data);
    dispatch(todoListSubmitNewTask(transformedFormValues));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} id={NEW_TODO_ITEM_FORM_ID}>
      <TextInput label="Task name" placeholder="Title" register={register} />
      <TextAreaInput
        label="Description"
        placeholder="Todo description"
        register={register}
      />
      <DateInput label="Deadline" placeholder="" register={register} />
    </form>
  );
}
