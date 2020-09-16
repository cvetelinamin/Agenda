import React from 'react'
import styles from './index.module.css'
import EntryTitle from '../entry-title'
import { FaMapMarkerAlt, FaPhoneAlt, FaCommentDots } from 'react-icons/fa'
import Address from '../contacts-address'
import Phone from '../contacts-phone'
import Email from '../contacts-email'

const ContactsInfo = () => {
    return(
        <div className={styles["info-wrapper"]}>
            <div className={styles.component}>
                <div className={styles["icon-container"]}>
                    <FaMapMarkerAlt className={styles.icon} />
                </div>
                <EntryTitle type="contacts-info" description="ADDRESS" />
                <div>
                    <Address city="Sofia" address="blv Al. Stamboliyski 153" />
                    <Address city="Plovdiv" address="blv Vasil Levski 13" />
                    <Address city="Varna" address="blv Vl. Varnenchik 10" />
                </div>
            </div>
            <div className={styles.component}>
                <div className={styles["icon-container"]}>
                    <FaPhoneAlt className={styles.icon} />
                </div>
                <EntryTitle type="contacts-info" description="PHONE" />
                <div>
                    <Phone city="Sofia" phone="0888123456" />
                    <Phone city="Plovdiv" phone="0888123556" />
                    <Phone city="Varna" phone="0888123458" />
                </div>
            </div>
            <div className={styles.component}>
                <div className={styles["icon-container"]}>
                    <FaCommentDots className={styles.icon} />
                </div>
                <EntryTitle type="contacts-info" description="EMAIL" />
                <div>
                    <Email city="Sofia" email="agenda_sofia@gmail.com" />
                    <Email city="Plovdiv" email="agenda_plovdiv@gmail.com" />
                    <Email city="Varna" email="agenda_varna@gmail.com" />
                </div>
            </div>
        </div>
    )
}

export default ContactsInfo
