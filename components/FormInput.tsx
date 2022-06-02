import { DetailedHTMLProps, FC, forwardRef, InputHTMLAttributes } from "react";
import { Path, RegisterOptions, UseFormRegister } from "react-hook-form";

type InputProps = {
  name: string;
  label: string
  type: string
  placeholder: string
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'size'
>;
type FieldProps<T> = {
  name: Path<T>;
  register?: UseFormRegister<T>;
  rules?: RegisterOptions;
} & Omit<InputProps, 'name'>;

const FieldInput = <T extends Record<string, unknown>>({
  name,
  type,
  register,
  rules,
  placeholder,
  label,
  ...props
}: FieldProps<T>): JSX.Element => {
  const inputGroupStyles = `flex flex-col gap-2`;
  return (
    <div className={inputGroupStyles}>
      <label htmlFor={name} className="text-xl text-neutral-content">
        {label}
      </label>
      <input
      {...props}
        {...(register && register(name, rules))}
        type={type}
        name={name}
        placeholder={placeholder}
        className="input input-md bg-base-200"
      />
    </div>
  );
};

export default FieldInput
