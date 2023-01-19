import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { TextInput } from "src/components";
import { z } from "zod";

import { todoListsSubmitNewList } from "../features/TodoListsList/actions";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type NewTodoListFormValues = {
  title: string;
};

export const NEW_TODO_LIST_FORM_ID = "newTodoListForm";

const schema = z.object({
  title: z.string(),
});

export default function NewTodoListForm({ setIsOpen }: Props) {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm<NewTodoListFormValues>({
    resolver: zodResolver(schema),
  });

  const handleFormSubmit = (data: NewTodoListFormValues) => {
    dispatch(todoListsSubmitNewList(data.title));
    reset();
    setIsOpen(false);
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
