import React from 'react'
import styles from './index.module.css'

const Phone = ( { city, phone } ) => {
    return (
        <div className={styles.container}>
            <p className={styles.text}><b>{city}</b></p>
            <p className={styles.text}>{phone}</p>
        </div>
    )
}

export default Phone