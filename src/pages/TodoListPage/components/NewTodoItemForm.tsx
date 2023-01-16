import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import TextInput from "src/components/common/Inputs/TextInput";
import TextAreaInput from "src/components/common/Inputs/TextAreaInput";
import DateInput from "src/components/common/Inputs/DateInput";

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

export default function NewTodoItemForm({}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<NewTodoItemFormValues>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      id={NEW_TODO_ITEM_FORM_ID}
    >
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
