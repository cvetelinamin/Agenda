import React from 'react'
import styles from './index.module.css'
import EntryTitle from '../entry-title'

const HeaderTitles = () => {
    return (
        <div className={styles['container-titles']}>
        <EntryTitle type='header' description='We have the best events!' />
        <EntryTitle type='header' description='Get your ticket now!' />
    </div>
    )
}

export default HeaderTitles