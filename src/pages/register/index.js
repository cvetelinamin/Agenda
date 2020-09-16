import React from 'react'
import styles from './index.module.css'
import Header from '../../components/header'
import Input from '../../components/input'
import EntryTitle from '../../components/entry-title'
import RegisterButton from '../../components/button'
import { FaUser, FaLock } from 'react-icons/fa'

const RegisterPage = () => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.wrapper}>
                <EntryTitle type="register" description="Register" />
                <div className={styles.info}>
                    <div className={styles.username}>
                        <FaUser className={styles.icon}/>
                        <Input className={styles.input} label="Username" id="username" location="register"/>
                    </div>
                    <div className={styles.username}>
                        <FaLock className={styles.icon} />
                        <Input className={styles.input} label="Password" id="password" location="register" />
                    </div>
                    <div className={styles.username}>
                        <FaLock className={styles.icon} />
                        <Input className={styles.input} label="RePassword" id="re-password" location="register" />
                    </div>
                    <RegisterButton object="register" title="register" />
                </div>
            </div>
        </div>
    )
}

export default RegisterPage