import React from 'react'
import styles from './index.module.css'

const Email = ( { city, email } ) => {
    return (
        <div className={styles.container}>
            <p className={styles.text}><b>{city}</b></p>
            <p className={styles.text}>{email}</p>
        </div>
    )
}

export default Email