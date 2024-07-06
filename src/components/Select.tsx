import { useFormContext } from "react-hook-form";
import ErrorMessage from './ErrorMessage'

type Props = {
  message: string;
  options: readonly string[];
  label: string;
  name: string;
};

function Select({ message, options, label, name }: Props) {
  const { register, formState, getFieldState } = useFormContext();
  const { error } = getFieldState(name, formState);

  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <select
        {...register(name)}
        className="form-select"
      >
        <option>{message}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error?.message &&<ErrorMessage message={error.message}/>}
    </div>
  );
}

export default Select;
