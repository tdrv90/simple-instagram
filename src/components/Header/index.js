import React, { useState, useEffect } from 'react'
import LinkComponent from '../Link'
import { auth } from '../../config/firebase'
import firebase from 'firebase'
import getNavigation from '../../utils/navigation'
import styles from './index.module.css'

function Header() {
    const [userLoggedIn, setUserLoggedIn] = useState(null)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // user has logged in
                setUserLoggedIn(authUser)
                console.log('logging current user:', firebase.auth().currentUser.uid)
            } else {
                // user has logged out
                setUserLoggedIn(null)
            }
        })

        return () => {
            unsubscribe()
        }
    }, [userLoggedIn])


    const links = getNavigation(userLoggedIn)

    return (
        <header >
            <div className={styles.header}>
                <a href="/">
                    <img
                        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                        alt=""
                        className={styles.header_images}
                    />
                </a>
                {userLoggedIn && <div><strong>{userLoggedIn.displayName}</strong></div>}
                {
                    links.map(navigationElement => {
                        return (
                            <LinkComponent
                                key={navigationElement.title}
                                href={navigationElement.link}
                                title={navigationElement.title}
                                type="header"
                            />
                        )
                    })
                }
            </div>
        </header >
    )
}

export default Header
