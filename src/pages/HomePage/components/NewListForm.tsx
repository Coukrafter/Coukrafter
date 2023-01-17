import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { TextInput } from "src/components";
import { useDispatch } from "react-redux";
import { todoListsSubmitNewList } from "../features/TodoListsList/actions";

type Props = {};

type NewTodoListFormValues = {
  title: string;
};

export const NEW_TODO_LIST_FORM_ID = "newTodoListForm";

const schema = z.object({
  title: z.string(),
});

export default function NewTodoListForm({}: Props) {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewTodoListFormValues>({ resolver: zodResolver(schema) });

  const handleFormSubmit = (data: NewTodoListFormValues) => {
    dispatch(todoListsSubmitNewList(data.title));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} id={NEW_TODO_LIST_FORM_ID}>
      <TextInput
        label="List name"
        placeholder="Title"
        register={register}
        inputId="title"
      />
    </form>
  );
}
