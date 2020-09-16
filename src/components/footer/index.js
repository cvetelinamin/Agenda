import React from 'react'
import styles from './index.module.css'
import logo from '../../images/logo.png'
import FooterNav from '../footer-nav'

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles["image-container"]}>
                <img className={styles.logo} src={logo} />
            </div>
            <FooterNav />
            <p className={styles.copyright}>Copyright ©2020 All rights reserved</p>
        </footer>
    )
}

export default Footer