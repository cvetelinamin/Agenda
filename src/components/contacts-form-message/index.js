import React from 'react'
import styles from './index.module.css'
import EntryTitle from '../../components/entry-title'
import Input from '../../components/input'
import Button from '../../components/button'

const ContactsMessage = () => {
    return (
        <div className={styles.container}>
            <EntryTitle type="contacts" description="Message Us" />
            <form>
                <Input label="Name" location="contacts"/>
                <Input label="Last Name" location="contacts"/>
                <Input className label="Your email" location="contacts"/>
                <label htmlFor="message">
                    Message
                </label>
                <textarea id="message">
                </textarea>
                <Button object="contacts" title="Submit"/>
            </form>
        </div>
    )
}

export default ContactsMessage