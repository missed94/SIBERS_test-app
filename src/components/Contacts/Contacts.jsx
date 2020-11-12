import React, {useState} from 'react'
import Contact from "./Contact/Contact";
import ContactFormRedux from "./Contact-form/ContactForm";


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
                    getUpdateContact={props.getUpdateContact}
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