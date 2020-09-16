import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper'
import '../../../node_modules/swiper/swiper-bundle.css'
import styles from './index.module.css'
import img1 from '../../images/event-1.jpg'
import img2 from '../../images/event-2.jpg'
import img3 from '../../images/event-3.jpg'
import img4 from '../../images/event-4.jpg'
import img5 from '../../images/event-5.jpg'
import img6 from '../../images/event-6.jpg'

SwiperCore.use([ Navigation, Pagination, Thumbs ])

const SwiperEvent = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    return (
        <div className={styles.events}>
            <React.Fragment>
                <Swiper id="main" 
                        thumbs={{ swiper: thumbsSwiper }}
                        tag="section" wrapperTag="ul" 
                        navigation pagination 
                        slidesPerView={1} spaceBetween={10}
                        loop={true}>
                    <SwiperSlide key='slide-1' tag="li">
                        <img src={img1} />
                    </SwiperSlide>
                    <SwiperSlide key='slide-2' tag="li">
                    <img src={img2} />
                    </SwiperSlide>
                    <SwiperSlide key='slide-3' tag="li">
                        <img src={img3} />
                    </SwiperSlide>
                    <SwiperSlide key='slide-4' tag="li">                      
                        <img src={img4} />
                    </SwiperSlide>
                    <SwiperSlide key='slide-5' tag="li">
                        <img src={img5} />
                    </SwiperSlide>
                    <SwiperSlide key='slide-6' tag="li">
                        <img src={img6} />
                    </SwiperSlide>
                </Swiper>
                <Swiper id="thumbs" onSwiper={setThumbsSwiper} spaceBetween={5} slidesPerView={3} loop={true}>
                    <SwiperSlide key='slide-1' tag="li">
                        <img src={img1} />
                    </SwiperSlide>
                    <SwiperSlide key='slide-2' tag="li">
                        <img src={img2} />
                    </SwiperSlide>
                    <SwiperSlide key='slide-3' tag="li">
                        <img src={img3} />
                    </SwiperSlide>
                    <SwiperSlide key='slide-4' tag="li">                      
                        <img src={img4} />
                    </SwiperSlide>
                    <SwiperSlide key='slide-5' tag="li">
                        <img src={img5} />
                    </SwiperSlide>
                    <SwiperSlide key='slide-6' tag="li">
                        <img src={img6} />
                    </SwiperSlide>
                </Swiper>
            </React.Fragment>
        </div>
    )
}

export default SwiperEvent