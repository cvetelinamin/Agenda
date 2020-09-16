import React from 'react'
import styles from './index.module.css'
import Header from '../../components/header'
import EntryTitle from '../../components/entry-title'
import ContactsInfo from '../../components/contacts-info-wrapper'
import ContactsSubscribe from '../../components/contacts-form-subscribe'
import ContactsMessage from '../../components/contacts-form-message'

const ContactsPage = () => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.wrapper}>
                <div className={styles.info}>
                    <EntryTitle type="contacts-main" description="GET IN TOUCH" />
                    <ContactsInfo />
                </div>
                <div className={styles["newsletter-form"]}>
                    <ContactsMessage />
                    <ContactsSubscribe />
                </div>
            </div>
        </div>
    )
}

export default ContactsPage