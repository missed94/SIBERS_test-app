import React, {useState} from "react"
import Contact from "./Contact/Contact";
import styles from "./Contacts.module.scss"


const Contacts = (props) => {

    const [directionSort, setDirectionSort] = useState(false)

    const handleSortByName = () => {
        setDirectionSort(!directionSort)
        props.sortByName("name", directionSort)
    }

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
        <div className={styles.Contacts}>
            <label className={styles.sortBtn__container}>
                <div className={styles.sortBtn}>Sort by name</div>
                <button className={styles.sortBtnDefault} onClick={handleSortByName}>Sort by name</button>
            </label>
            <ul className={styles.Contacts__list}>
                {contactsArray}
            </ul>
        </div>
    )
}

export default Contacts