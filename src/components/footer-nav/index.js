import React from 'react'
import styles from './index.module.css'
import getNavigation from '../../utilis/footer-navigation'
import Link from '../../components/link'

const FooterNav = () => {

    const links = getNavigation()

    return (
        <div className={styles.container}>
            <nav className={styles.navigation}>
                {
                    links.map(navElement => {
                      return (
                        <Link
                          key={navElement.title}
                          href={navElement.link}
                          title={navElement.title}
                          type="footer"
                        />
                      )
                    })
                }
            </nav>
        </div>
    )
}

export default FooterNav