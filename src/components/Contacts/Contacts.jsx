import React, {useState} from 'react'
import Contact from "./Contact/Contact";


const Contacts = (props) => {

    const contactsArray = props.usersContacts.map(contact => {
        return (
            <Contact
                key={contact.id}
                id={contact.id}
                name={contact.name}
                username={contact.username}
                email={contact.email}
                editingInProgress={props.editingInProgress}
                updateContact={props.updateContact}
                setEditingInProgress={props.setEditingInProgress}
                editMode={props.editMode}
                getContactById={props.getContactById}
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