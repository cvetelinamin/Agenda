import React from 'react'
import styles from './index.module.css'
import Header from '../../components/header'
import EntryTitle from '../../components/entry-title'
import SwiperEvent from '../../components/swiper-event'
import EventContent from '../../components/event-content'
import Comment from '../../components/comment'
import AddComment from '../../components/add-comment'
import img from '../../images/upcoming-2.jpg'
import StarRating from '../../components/star-rating'
import headerimage from '../../images/events-news-bg.jpg'
import Footer from '../../components/footer'

const EventPage = () => {

    return (
        <div className={styles.container}>
            <img src={headerimage} className={styles["header-image"]} />
            <Header />
            <div className={styles.content}>
                <EntryTitle type="event" description="Concert U2" />
                <div className={styles.wrapper}>
                    <SwiperEvent />
                    <EventContent />
                </div>
                <div className={styles["comments-section"]}>
                    <div className={styles["add-comment"]}>
                        <StarRating />
                        <AddComment />
                    </div>
                    <div className={styles["comments-container"]}>
                        <EntryTitle type="comments" description="Comments" />
                        <div className={styles.comments}>
                            <Comment img={img} username="cvety" date="5 hours ago" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
                            <Comment img={img} username="cvety" date="5 hours ago" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
                            <Comment img={img} username="cvety" date="5 hours ago" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default EventPage