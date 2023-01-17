import { UseFormRegister, FieldValues, Path } from "react-hook-form";
import InputWrapper from "./InputWrapper";

type Props<T extends FieldValues> = {
  label: string;
  register: UseFormRegister<T>;
  inputId: Path<T>;
};

export default function DateInput<T extends FieldValues>({
  label,
  register,
  inputId,
}: Props<T>) {
  return (
    <InputWrapper label={label} inputId={inputId}>
      <input
        type="date"
        className="input input-bordered w-full max-w-xs"
        {...register(inputId)}
      />
    </InputWrapper>
  );
}
