import React from 'react'
import styles from './index.module.css'
import Input from '../input'
import Button from '../button'
import EntryTitle from '../entry-title'

const ContactsForm = () => {
    return (
        <div className={styles.container}>
            <EntryTitle type="contacts" description="Subscribe" />
            <form className={styles.form}>
                <Input label="Name" location="contacts"/>
                <Input label="Your email" location="contacts"/>
                <Button object="contacts" title="Subscribe"/>
            </form>
        </div>
    )
}

export default ContactsForm