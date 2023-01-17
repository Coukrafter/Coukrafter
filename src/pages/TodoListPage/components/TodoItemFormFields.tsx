import { UseFormRegister } from "react-hook-form/dist/types";

import { TextInput, TextAreaInput, DateInput } from "src/components";

import { TodoItemFormValues } from "./TodoItemModalForm";

type Props = { register: UseFormRegister<TodoItemFormValues> };

export default function TodoItemFormFields({ register }: Props) {
  return (
    <>
      <TextInput
        label="Item name"
        inputId="name"
        placeholder="Title"
        register={register}
      />
      <TextAreaInput
        label="Description"
        placeholder="Todo description"
        register={register}
        inputId="text"
      />
      <DateInput label="Deadline" register={register} inputId="deadline" />
    </>
  );
}
