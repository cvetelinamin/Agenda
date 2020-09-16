import React from 'react'
import styles from './index.module.css'
import Header from '../../components/header'
import EntryTitle from '../../components/entry-title'
import Select from '../../components/select-location'
import SwiperEvents from '../../components/swiper-events'

const EventsPage = () => {

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <EntryTitle type="events" description="Events in New York" />
                    <Select />
                </div>
                <SwiperEvents />
            </div>
        </div>
    )
}

export default EventsPage