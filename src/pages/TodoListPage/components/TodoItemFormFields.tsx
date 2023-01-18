import { FieldErrorsImpl, UseFormRegister } from "react-hook-form/dist/types";

import { TextInput, TextAreaInput, DateInput } from "src/components";

import { TodoItemFormValues } from "./TodoItemModalForm";

type Props = {
  register: UseFormRegister<TodoItemFormValues>;
  errors: Partial<FieldErrorsImpl<Record<keyof TodoItemFormValues, string>>>;
};

export default function TodoItemFormFields({
  register,
  errors: { deadline: deadlineError, name: nameError, text: textError },
}: Props) {
  return (
    <>
      <TextInput
        label="Item name"
        inputId="name"
        placeholder="Title"
        register={register}
        errorMessage={nameError?.message}
      />
      <TextAreaInput
        label="Description"
        placeholder="Todo description"
        register={register}
        inputId="text"
        errorMessage={textError?.message}
      />
      <DateInput
        label="Deadline"
        register={register}
        inputId="deadline"
        errorMessage={deadlineError?.message}
      />
    </>
  );
}
