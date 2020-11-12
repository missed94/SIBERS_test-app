import React, {useState} from 'react'
import styles from './Contact.module.scss'
import ContactFormRedux from "../Contact-form/ContactForm";


const Contact = (props) => {

    const [editMode, setEditMode] = useState(false);

    const editModeOn = () => {
        setEditMode(true)
    }

    const editModeOff = () => {
        setEditMode(false)
    }

    const saveDataForm = (data) => {
        props.getUpdateContact(data)
            .then(() => {
                editModeOff()
            })
    }

    return (
        !editMode ?
            <li className={styles.Contact}>
                <div className={styles.Contact__item}>
                    <h4 className={styles.Contact__itemTitle}>Name:</h4>
                    <span className={styles.Contact__itemContent}>
                {props.name}
                </span>
                </div>

                <div className={styles.Contact__item}>
                    <h4 className={styles.Contact__itemTitle}>Nickname:</h4>
                    <span className={styles.Contact__itemContent}>
                {props.username}
                </span>
                </div>
                <div className={styles.Contact__item}>
                    <h4 className={styles.Contact__itemTitle}>Email:</h4>
                    <span className={styles.Contact__itemContent}>
                {props.email}
                </span>
                </div>

                <button onClick={editModeOn}>Edit</button>
            </li> : <ContactFormRedux onSubmit={saveDataForm} initialValues={props} editModeOff={editModeOff}/>
    )
}

export default Contact