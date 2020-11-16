import React from 'react';
import styles from './SortBtn.module.scss';


const SortBtn = (props) => {
    return (
            <label className={styles.sortBtn__container}>
                <div className={styles.sortBtn}>Sort by A-Z</div>
                <button className={styles.sortBtnDefault} onClick={props.handleSortByName}>{props.text}</button>
            </label>
    )
};

export default SortBtn;