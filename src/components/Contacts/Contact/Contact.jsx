import React, {useState} from 'react'
import styles from './Contact.module.scss'


const Contact = (props) => {


    return (
        <li className={styles.Contact}>
            <span className={styles.name}>
                {props.name}
            </span>
            <span className={styles.username}>
                {props.username}
            </span>
            <span className={styles.email}>
                {props.email}
            </span>
            <button>Edit</button>
        </li>
    )
}

export default Contact