import { UseFormRegister, FieldValues, Path } from "react-hook-form";
import InputWrapper from "./InputWrapper";

type Props<T extends FieldValues> = {
  label: Path<T>;
  register: UseFormRegister<T>;
  placeholder: string;
};

export default function TextAreaInput<T extends FieldValues>({
  label,
  register,
  placeholder,
}: Props<T>) {
  return (
    <InputWrapper label={label}>
      <textarea
        className="textarea textarea-bordered h-24 resize-none"
        placeholder={placeholder}
        {...register(label)}
      />
    </InputWrapper>
  );
}
