import { UseFormRegister, FieldValues, Path } from "react-hook-form";
import InputWrapper from "./InputWrapper";

type Props<T extends FieldValues> = {
  label: Path<T>;
  register: UseFormRegister<T>;
  placeholder: string;
};

export default function DateInput<T extends FieldValues>({
  label,
  register,
  placeholder,
}: Props<T>) {
  return (
    <InputWrapper label={label}>
      <input
        type="date"
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xs"
        {...register(label)}
      />
    </InputWrapper>
  );
}
