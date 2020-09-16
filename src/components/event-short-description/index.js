import React from 'react'
import styles from './index.module.css'
import Link from '../../components/link'

const Event = ( {img, title, date} ) => {

    return (
        <div className={styles.container}>
            <img src={img} />
            <div className={styles.content}>
                <Link title={title} href='/event' type='event' />
                <p className={styles.date}>{date}</p>
            </div>
        </div>
    )
}

export default Event