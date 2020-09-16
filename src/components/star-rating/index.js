import React, { useState } from 'react'
import styles from './index.module.css'
import { FaStar } from 'react-icons/fa'

const StarRating = () => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

    return (
        <div className={styles.container}>
            {[ ...Array(5)].map( (star, i ) => {
                const ratingValue = i + 1

                return (
                <label>
                    <input type="radio" 
                    name="rating" 
                    className={styles.radio} 
                    value={ratingValue}
                    onClick={() => setRating(ratingValue)} />
                     <FaStar 
                     className={styles.star}
                     color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} 
                     onMouseEnter={() => setHover(ratingValue)}
                     onMouseLeave={() => setHover(null)}/>
                </label>
                )
            })}
        </div>
    )
}

export default StarRating