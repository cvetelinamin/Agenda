import React from 'react'
import styles from './index.module.css'
import logo from '../../images/logo-2.png'
import EntryTitle from '../../components/entry-title'
import SubmitButton from '../../components/button'
import Header from '../../components/header'
import Team from '../../components/about-team'
import Footer from '../../components/footer'

const AboutPage = () => {

    return (
           <div className={styles.container}>
                <Header />
                <Team />
                <div>
                    <div className={styles.wrapper}>
                        <div className={styles.logo}>
                            <img src={logo} />
                        </div>
                        <div className={styles.description}>
                            <EntryTitle type='about' description='What is Agenda and why choose our services?'/>
                            <div className={styles['about-content']}>
                                Vestibulum eget lacus at mauris sagittis varius. Etiam ut venenatis dui. Nullam tellus risus, pellentesque at facilisis et, scelerisque sit amet metus. Duis vel semper turpis, ac tempus libero. Maecenas id ultrices risus. Aenean nec ornare ipsum, lacinia volutpat urna. Maecenas ut aliquam purus, quis sodales dolor.
                            </div>
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <SubmitButton title='Read More' object='read-more'/>
                        <a href='/register'>
                            <SubmitButton title='Register Now' object='about-register'/>
                        </a>
                    </div>
                </div>
                <Footer />
            </div> 
    )
}

export default AboutPage