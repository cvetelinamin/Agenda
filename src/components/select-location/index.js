import React from 'react'
import styles from './index.module.css'

const Select = () => {
    return (
            <select className={styles.select}>
                <option className={styles.option}>New York</option>
                <option className={styles.option}>California</option>
                <option className={styles.option}>South Carolina</option>
            </select>
    )
}

export default Select
