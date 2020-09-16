import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper'
import '../../../node_modules/swiper/swiper-bundle.css'
import styles from './index.module.css'
import Event from '../../components/event-short-description'
import event1 from '../../images/event-slider-1.jpg'

SwiperCore.use([ Navigation ])

const SwiperEvents = () => {
    return (
        
        <div className={styles.events}>
            <React.Fragment>
                <Swiper id="main" tag="section" wrapperTag="ul" navigation slidesPerView={4} spaceBetween={10} loop={true}>
                    <SwiperSlide key='slide-1' tag="li">
                        <Event img={event1} title='U2 Concert' date='SATURDAY JAN 27, 2018' />
                    </SwiperSlide>
                    <SwiperSlide key='slide-2' tag="li">
                        <Event img={event1} title='U2 Concert' date='SATURDAY JAN 27, 2018' />
                    </SwiperSlide>
                    <SwiperSlide key='slide-3' tag="li">
                        <Event img={event1} title='U2 Concert' date='SATURDAY JAN 27, 2018' />
                    </SwiperSlide>
                    <SwiperSlide key='slide-4' tag="li">
                        <Event img={event1} title='U2 Concert' date='SATURDAY JAN 27, 2018' />
                    </SwiperSlide>
                    <SwiperSlide key='slide-5' tag="li">
                        <Event img={event1} title='U2 Concert' date='SATURDAY JAN 27, 2018' />
                    </SwiperSlide>
                    <SwiperSlide key='slide-6' tag="li">
                        <Event img={event1} title='U2 Concert' date='SATURDAY JAN 27, 2018' />
                    </SwiperSlide>
                </Swiper>
            </React.Fragment>
        </div>
    )
}

export default SwiperEvents