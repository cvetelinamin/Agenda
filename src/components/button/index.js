import React from 'react'
import styles from './index.module.css'

const SubmitButton = ( {title, onClick, object} ) => {
    return (
        <button type="submit" className={styles[`${object}-button`]} onClick={onClick}>
            {title}
        </button>
    )
}

export default SubmitButton

