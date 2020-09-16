import React from 'react'
import styles from './index.module.css'
import SubmitButton from '../../components/button'

const AddComment = () => {
    return (
        <div className={styles.container}>
            <input className={styles.input}>
            </input>
            <SubmitButton title="Add Comment" object='add-comment'/>
        </div>
    )
}

export default AddComment