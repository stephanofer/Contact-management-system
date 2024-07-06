import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

type Props = {
    name: string;
    children: ReactNode;
}

function Input({name, children}: Props) {

    const { register, formState, getFieldState } = useFormContext();
    const { error } = getFieldState(name, formState);

  return (
    <div className='mb-3'>

        <label htmlFor={name} className='form-label'>{children}</label>
        <input 
        {...register(name)}
        type="text" 
        className='form-control'
        />
      {error?.message &&<ErrorMessage message={error.message}/>}

    </div>
  )
}

export default Input