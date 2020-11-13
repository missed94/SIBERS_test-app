import React, {useState} from 'react'
import Contact from "./Contact/Contact";


const Contacts = (props) => {

    console.log(props.usersContacts)
    const contactsArray = props.usersContacts.map(contact => {
        return (
                 <Contact
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    username={contact.username}
                    email={contact.email}
                    editingInProgress={props.editingInProgress}
                    getUpdateContact={props.getUpdateContact}
                    setEditingInProgress={props.setEditingInProgress}
                />
        )
    })


    return (
        <div className="Contacts">
            <ul>
                {contactsArray}
            </ul>
        </div>
    )
}

export default Contacts