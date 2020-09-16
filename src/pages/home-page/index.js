import React from 'react'
import styles from './index.module.css'
import Header from '../../components/header'
import HeaderTitles from '../../components/header-titles'
import NextEvents from '../../components/next-events'
import Footer from '../../components/footer'

const HomePage = () => {
    return (
        <div>
            <div className={styles.container}>
                <Header />
                <HeaderTitles className={styles.titles} />
            </div>
            <div>
                <NextEvents />
            </div>
            <Footer />
        </div>
    ) 
}

export default HomePage