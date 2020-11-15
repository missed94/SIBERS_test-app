import React, {useState} from 'react'
import styles from './Contact.module.scss'
import ContactFormRedux from "../Contact-form/ContactForm";


const Contact = (props) => {

    const editModeOn = async () => {
        if (props.editingInProgress !== null)
            await saveDataForm(props.getContactById(props.id));
        props.setEditingInProgress(props.id, true)
    }

    const editModeOff = () => {
        props.setEditingInProgress(props.id, false)
    }

    const saveDataForm = (data) => {
        props.updateContact(data);
        editModeOff();
    }

    return (
        <>
            {
                //props.editingInProgress === null
                props.editingInProgress !== props.id &&
                <li onDoubleClick={editModeOn} className={styles.Contact}>
                    <div className={styles.Contact__itemContainer}>
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
                    </div>
                    <div className={styles.Contact__btnContainer}>
                        <label>
                            <button className={styles.Contact__btnDefault} onClick={editModeOn}>Edit</button>
                            <div className={styles.Contact__btn}>Edit</div>
                        </label>
                    </div>
                </li>
            }
            {props.editingInProgress === props.id &&
            <ContactFormRedux onSubmit={saveDataForm} initialValues={props} editModeOff={editModeOff}/>
            }
        </>
    )
}

export default Contact