import { UseFormRegister } from "react-hook-form";

type Props = {
  error?: string |  undefined;
  label: string;
  name: string;
  placeholder: string;
  id?: string;
  type: string;
};
const Input = ({
  error,
  label,
  name,
  placeholder,
  type,
  id,
  ...props
}: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {error && <div>{error}</div>}
      <label htmlFor={name} className="text-xl text-neutral-content">
        {label}
      </label>
      <input
        {...props}
        id={id}
        type={type}
        name={name}
        className="input input-md bg-base-200"
      />
    </div>
  );
};

export default Input;
