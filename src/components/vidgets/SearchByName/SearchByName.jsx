//imports
import React from 'react';
import styles from './SearchByName.module.scss';

// search by name input component
const SearchByName = (props) => {
    return (
        <input  className={styles.SearchByName} type="text" placeholder="...Search" onChange={props.handleOnChange}/>
    )
};

export default SearchByName;