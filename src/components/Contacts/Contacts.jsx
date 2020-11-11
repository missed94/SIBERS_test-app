import React from 'react'
import Contact from "./Contact/Contact";


const Contacts = (props) => {

    const contactsArray = props.usersContacts.map(contact => {
        return <Contact
            key={contact.id}
            name={contact.name}
            username={contact.username}
            email={contact.email}
        />
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