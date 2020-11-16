//imports
import React, {useEffect, useState} from 'react';
import Contact from './Contact/Contact';
import styles from './Contacts.module.scss';
import SortBtn from '../vidgets/SortBtn/SortBtn';
import SearchByName from '../vidgets/SearchByName/SearchByName';

//Contacts component
const Contacts = (props) => {

    // local state by useState hook
    const [directionSort, setDirectionSort] = useState(false);
    const [search, setSearch] = useState('');
    const [filteredContactsArray, setFilteredContactsArray] = useState([]);


    const sortByName = () => {
        setDirectionSort(!directionSort);
        setFilteredContactsArray(() => {
            if (!directionSort) {
                filteredContactsArray.sort((a, b) => {
                    return a["name"].toLowerCase() > b["name"].toLowerCase() ? 1 : -1
                });
            }
            return filteredContactsArray.reverse()
        });
    };

    //Search filter by name
    useEffect(() => {
        setFilteredContactsArray(props.usersContacts.filter(contact => {
            return contact.name.toLowerCase().includes(search.toLowerCase())
        }));
    }, [search, props.usersContacts]);

    // displaying filtered array
    const contactsArray = filteredContactsArray.map(contact => {
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
        );
    });


    return (
        <div className={styles.Contacts}>
            <div className={styles.Contacts__widgetsContainer}>
                {directionSort && <SortBtn handleSortByName={sortByName} text="Sort by A-Z"/>}
                {!directionSort && <SortBtn handleSortByName={sortByName} text="Sort by Z-A"/>}
                <SearchByName handleOnChange={e => setSearch(e.target.value)}/>
            </div>
            {!filteredContactsArray.length
                ? <div className={styles.Contacts__notFound}>Nothing found...</div>
                : <ul className={styles.Contacts__list}>
                    {contactsArray}
                </ul>}
        </div>
    )
};

export default Contacts;