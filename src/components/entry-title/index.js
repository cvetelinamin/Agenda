import React from 'react'
import styles from './index.module.css'

const EntryTitle = ( {type, description} ) => {
    return (
        <h2 className={styles[`${type}-title`]}>{description}</h2>
    )
}

export default EntryTitle