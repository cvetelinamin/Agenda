import React from 'react'
import styles from './index.module.css'
import Header from '../../components/header'
import Input from '../../components/input'
import EntryTitle from '../../components/entry-title'
import LoginButton from '../../components/button'
import { FaUser, FaLock } from 'react-icons/fa'


const LoginPage = () => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.wrapper}>
                <EntryTitle type="login" description="Login" />
                <div className={styles.info}>
                    <div className={styles.username}>
                        <FaUser className={styles.icon}/>
                        <Input className={styles.input} label="Username" id="username" location="login" />
                    </div>
                    <div className={styles.username}>
                        <FaLock className={styles.icon} />
                        <Input className={styles.input} label="Password" id="password" location="login" />
                    </div>
                    <div className={styles["forgot-password"]}>
                        <a href="#">Forgot password?</a>
                    </div>
                    <LoginButton object="login" title="login" />
                </div>
            </div>
        </div>
    )
}

export default LoginPage