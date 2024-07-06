
type Props = {
    message: string;
}

function ErrorMessage({message}: Props) {
  return <p className="text-danger">{message}</p>
}

export default ErrorMessage