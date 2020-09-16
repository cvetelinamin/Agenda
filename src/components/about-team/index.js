import React from 'react'
import styles from './index.module.css'
import Member from '../member-team'
import img1 from '../../images/1.jpg'
import img2 from '../../images/2.jpg'
import img3 from '../../images/3.jpg'
import img4 from '../../images/event-slider-4.jpg'


const Team = () => {
    return (
        <div className={styles.container}>
            <Member img={img1} name="Georgi Petrov"  title="Manager office Sofia" description="creative, organized, hard-worker, always ready for new adventures"/>
            <Member img={img2} name="Georgi Petrov"  title="Manager office Sofia" description="creative, organized, hard-worker, always ready for new adventures"/>
            <Member img={img3} name="Georgi Petrov"  title="Manager office Sofia" description="creative, organized, hard-worker, always ready for new adventures"/>
            <Member img={img4} name="Georgi Petrov"  title="Manager office Sofia" description="creative, organized, hard-worker, always ready for new adventures"/>
        </div>
    )
}

export default Team