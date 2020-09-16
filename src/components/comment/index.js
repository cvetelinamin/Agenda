import React from 'react'
import styles from './index.module.css'


const Comment = ( { img, username, date, content } ) => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.image}>
                    <img src={img} />
                </div>
                <div className={styles.wrapper}>
                    <p className={styles.username}>{username}</p>
                    <p className={styles.date}>{date}</p>
                </div>
                <div className={styles.likes}>

                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.paragraph}>
                    {content}
                </p>
            </div>
        </div>
    )
}

export default Comment