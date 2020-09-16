import React from 'react';
import styles from './index.module.css';
import NextEvent from '../next-event';
import img from '../../images/next1.jpg'

const NextEvents = () => {
    return (
        <div className={styles.container}>
            <NextEvent image={img} 
                       title="U2 Concert in Detroitt" 
                       dayOfWeek="SATURDAY"
                       date="JAN 27, 2018" 
                       description="Vestibulum eget lacus at mauris sagittis varius. Etiam ut venenatis dui. Nullam tellus risus." />
            <NextEvent image={img} 
                       title="U2 Concert in Detroitt" 
                       dayOfWeek="SATURDAY"
                       date="JAN 27, 2018" 
                       description="Vestibulum eget lacus at mauris sagittis varius. Etiam ut venenatis dui. Nullam tellus risus." />
            <NextEvent image={img} 
                       title="U2 Concert in Detroitt" 
                       dayOfWeek="SATURDAY"
                       date="JAN 27, 2018" 
                       description="Vestibulum eget lacus at mauris sagittis varius. Etiam ut venenatis dui. Nullam tellus risus." />
        </div>
    )
}

export default NextEvents