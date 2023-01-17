import { UseFormRegister, FieldValues, Path } from "react-hook-form";
import InputWrapper from "./InputWrapper";

type Props<T extends FieldValues> = {
  label: string;
  register: UseFormRegister<T>;
  placeholder: string;
  inputId: Path<T>;
};

export default function TextInput<T extends FieldValues>({
  label,
  register,
  placeholder,
  inputId,
}: Props<T>) {
  return (
    <InputWrapper label={label} inputId={inputId}>
      <input
        type="text"
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xs"
        {...register(inputId)}
      />
    </InputWrapper>
  );
}
