import React from 'react'
import styles from './index.module.css'
import EntryTitle from '../../components/entry-title'
import Link from '../../components/link'

const News = ( { img, title, date, author } ) => {
    return (
        <div className={styles.container}>
            <img src={img} className={styles.image} />
            <div className={styles.wrapper}>
                <Link title={title} href='/article' type='article' />
                <span>{date}</span>
                <p className={styles.author}>{author}</p>
            </div>
        </div>
    )
}

export default News