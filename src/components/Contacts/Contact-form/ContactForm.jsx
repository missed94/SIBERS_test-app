//imports
import React from 'react'
import styles from './ContactForm.module.scss'
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormControls";
import {required} from "../../../utils/validators/validators";



//Contact form component
const ContactForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.ContactForm}>
            <div className={styles.ContactForm__container}>
                <div className={styles.ContactForm__row}>
                    <h4 className={styles.ContactForm__rowTitle}>Name:</h4>
                    <Field className={styles.ContactForm__rowContent}
                           name={"name"}
                           component={Input}
                           placeholder={"Enter name"}
                           validate={[required]}/>
                </div>
                <div className={styles.ContactForm__row}>
                    <h4 className={styles.ContactForm__rowTitle}>Nickname:</h4>
                    <Field className={styles.ContactForm__rowContent}
                           name={"username"}
                           component={Input}
                           placeholder={"Enter nickname"}
                           validate={[required]}/>
                </div>
                <div className={styles.ContactForm__row}>
                    <h4 className={styles.ContactForm__rowTitle}>Email:</h4>
                    <Field className={`${styles.ContactForm__rowContent} ${styles.ContactForm__rowContent_email}`}
                           name={"email"}
                           component={Input}
                           placeholder={"Enter email"}
                           validate={[required]}/>
                </div>
            </div>
            <div className={styles.ContactForm__btnContainer}>
                <label>
                    <button className={styles.ContactForm__btnDefault}>Save</button>
                    <div className={styles.ContactForm__btn}>Save</div>
                </label>
            </div>
        </form>
    )
}


//HOC by redux-form
const ContactFormRedux = reduxForm({
    form: 'contact-data',
})(ContactForm)

export default ContactFormRedux

