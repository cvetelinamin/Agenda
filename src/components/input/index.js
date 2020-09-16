import React from 'react'
import styles from './index.module.css'

const Input = ({label, id, value, onChange, type, location}) => {
    return(
        <div className={styles.container}>
            <label className={styles[`label-${location}`]} htmlFor={id}>
              {label}:
              <input className={styles[`input-${location}`]} 
                    type={type || 'text'} 
                    id={id} 
                    value={value} 
                    onChange={onChange}/>
            </label>
        </div>
    )
}

export default Input