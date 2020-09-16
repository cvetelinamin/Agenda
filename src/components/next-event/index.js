import React from 'react';
import styles from './index.module.css';
import Link from '../../components/link'

const NextEvent = ( { image, title, dayOfWeek, date, description } ) => {
    return (
        <div className={styles.container}>
            <img src={image} className={styles.image} />
            <div className={styles.content}>
                <p className={styles.title}>{title}</p>
                <p className={styles.date}>
                    {dayOfWeek}
                    <span className={styles["event-date"]}>{date}</span>
                </p>
                <p className={styles.description}>{description}</p>
            </div>
            <Link href="/" type="next-event" title="BUY TICKETS"/>
        </div>
    )
}

export default NextEvent