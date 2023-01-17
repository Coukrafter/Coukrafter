import { UseFormRegister, FieldValues, Path } from "react-hook-form";
import InputWrapper from "./InputWrapper";

type Props<T extends FieldValues> = {
  label: string;
  register: UseFormRegister<T>;
  placeholder: string;
  inputId: Path<T>;
};

export default function TextAreaInput<T extends FieldValues>({
  label,
  register,
  placeholder,
  inputId,
}: Props<T>) {
  return (
    <InputWrapper label={label} inputId={inputId}>
      <textarea
        className="textarea textarea-bordered h-24 resize-none"
        placeholder={placeholder}
        {...register(inputId)}
      />
    </InputWrapper>
  );
}
