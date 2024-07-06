import { ReactNode } from "react"

type variant = 'primary' | 'secondary' | 'warning'
type buttonType = 'submit' | 'button'
type Props = {
    children: ReactNode
    variant?: variant
    type?: buttonType;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void 
}

function Button({children, variant='primary', type='button', onClick}: Props) {
  return (
    <button onClick={onClick} type={type} className={`btn btn-${variant}`}>{children}</button>
  )
}

export default Button