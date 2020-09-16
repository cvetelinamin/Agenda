import React from 'react'
import styles from './index.module.css'

const Address = ( { city, address } ) => {
    return (
        <div className={styles.container}>
            <p className={styles.text}><b>{city}</b></p>
            <p className={styles.text}>{address}</p>
        </div>
    )
}

export default Address