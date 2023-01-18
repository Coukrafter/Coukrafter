import { UseFormRegister, FieldValues, Path } from "react-hook-form";
import InputWrapper from "./InputWrapper";

type Props<T extends FieldValues> = {
  label: string;
  register: UseFormRegister<T>;
  placeholder: string;
  inputId: Path<T>;
  errorMessage?: string;
};

export default function TextAreaInput<T extends FieldValues>({
  label,
  register,
  placeholder,
  inputId,
  errorMessage,
}: Props<T>) {
  return (
    <InputWrapper label={label} inputId={inputId} errorMessage={errorMessage}>
      <textarea
        className={`textarea textarea-bordered h-24 resize-none ${
          errorMessage ? "input-error" : ""
        }`}
        placeholder={placeholder}
        {...register(inputId)}
      />
    </InputWrapper>
  );
}
