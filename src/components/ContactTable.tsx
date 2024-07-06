import { Contact } from "../schemas/Contact";

type Props = {
    data: Contact[];
    onClick: (id: string) =>  void;
}

function ContactTable({data, onClick}: Props) {
  return (
    <table className="table table-hover table-striped" >
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
          <th>Tipo</th>
        </tr>
      </thead>
      <tbody>
        {data.map(c => (
            <tr key={c.id} onClick={() => onClick(c.id)} style={{cursor: 'pointer'}}>
                <td>{c.name}</td>
                <td>{c.lastname}</td>
                <td>{c.email}</td>
                <td>{c.type}</td>
            </tr>
        ))}

      </tbody>
    </table>
  );
}

export default ContactTable;
