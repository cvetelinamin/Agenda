import React from 'react'
import styles from './index.module.css'
import Link from '../link'
import logo from '../../images/logo.png'
import getNavigation from '../../utilis/navigation'

const Header = () => {

    const links = getNavigation()

    return (
        <header className={styles.header}>
            <div className={styles["header-bar"]}>
                <img src={logo} className={styles.logo}/>
                <nav className={styles.navigation}>
                    {
                        links.map(navElement => {
                          return (
                            <Link
                              key={navElement.title}
                              href={navElement.link}
                              title={navElement.title}
                              type="header"
                            />
                          )
                        })
                    }
                </nav>
            </div>
        </header>
    )
};

export default Header;