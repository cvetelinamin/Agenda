import React from 'react'
import styles from './index.module.css'
import EntryTitle from '../../components/entry-title'

const Article = ( { title, img, content } ) => {

    return (
        <div className={styles.container}>
            <EntryTitle type="article" description={title} />
            <img src={img} className={styles.image} />
            <div className={styles.content}>
                {content}
            </div>
        </div>
    )
}

export default Article