import React from 'react'
import styles from './index.module.css'

const Member = ( { name, title, description, img } ) => {
    return (
        <div className={styles.container}>
            <img src={img} className={styles.image} />
            <p className={styles.text}>{name}</p>
            <p className={styles.text}>{title}</p>
            <p className={styles.text}>{description}</p>
        </div>
    )
}

export default Member