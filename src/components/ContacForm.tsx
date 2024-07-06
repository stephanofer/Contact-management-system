import { useForm, FormProvider } from "react-hook-form";
import Input from "./Input";
import Select from "./Select";
import { typeEnum, ContactSchema, Contact } from "../schemas/Contact";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from './Button'

type Props = {
  onSubmit: (contact: Contact) => void;
};
function ContacForm({onSubmit} : Props) {
  const methods = useForm<Contact>({
    resolver: zodResolver(ContactSchema),
  });


  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="mb-3">
          <Input name="name">Nombre</Input>
          <Input name="lastname">Apellido</Input>
          <Input name="email">Correo</Input>
          <Select
            options={typeEnum}
            message="-- Seleccionar una Opcion --"
            label="Tipo"
            name="type"
          />
          <Button type="submit" >Enviar</Button>
          <Button onClick={() => methods.reset()} variant="secondary">Limpiar</Button>
        </div>
      </form>
    </FormProvider>
  );
}

export default ContacForm;
