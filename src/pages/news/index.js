import React from 'react'
import styles from './index.module.css'
import Header from '../../components/header'
import EntryTitle from '../../components/entry-title'
import News from '../../components/news'
import img from '../../images/news-1.jpg'

const NewsPage = () => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.titles}>
                <EntryTitle type="news-main" description="Agenda's Latest News" />
                <EntryTitle type="news-second" description="Everything about every event in the world" />
            </div>
            <div className={styles["news-container"]}>
                <News img={img} title="Brasilian festival near to you" date="10/06/2020" author="Pavel Atanasov" />
                <News img={img} title="Brasilian festival near to you" date="10/06/2020" author="Pavel Atanasov" />
                <News img={img} title="Brasilian festival near to you" date="10/06/2020" author="Pavel Atanasov" />
                <News img={img} title="Brasilian festival near to you" date="10/06/2020" author="Pavel Atanasov" />
                <News img={img} title="Brasilian festival near to you" date="10/06/2020" author="Pavel Atanasov" />
                <News img={img} title="Brasilian festival near to you" date="10/06/2020" author="Pavel Atanasov" />
                <News img={img} title="Brasilian festival near to you" date="10/06/2020" author="Pavel Atanasov" />
                <News img={img} title="Brasilian festival near to you" date="10/06/2020" author="Pavel Atanasov" />
            </div>
        </div>
    )
}

export default NewsPage