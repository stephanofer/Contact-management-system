import ContactForm from './ContacForm'
import ContactTable from './ContactTable'
import {Contact} from '../schemas/Contact'
import { useState } from 'react'

function Cms() {

  const [contacts, setContacts] = useState<Contact[]>([])

  const addContact = (contact: Contact) =>{
    setContacts([
      {
        ...contact,
        id: Math.random().toString()
      },
      ...contacts
    ])
  }

  const deleteContact = (id: string) => {
    setContacts(contacts.filter(c => c.id !== id))
  }

  console.log(contacts);

  return (

    <div className="container">
      <div className="row">
        <div className="col">
          <ContactForm onSubmit={addContact}/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ContactTable data={contacts} onClick={deleteContact}/>
        </div>
      </div>
    </div>

  )
}

export default Cms;