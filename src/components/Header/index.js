import React from 'react'
import LinkComponent from '../Link'
import styles from './index.module.css'

function Header() {
    return (
        <header >
            <div className={styles.header}>
                <img
                    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                    alt=""
                    className={styles.header_images}
                />
                <LinkComponent title="Sign In" href="/signin" type="header" />
                <LinkComponent title="Sign Up" href="/signup" type="header" />
                <LinkComponent title="Posts" href="/posts" type="header" />
                <LinkComponent title="Add post" href="/add" type="header" />
                <LinkComponent title="Logout" href="/logout" type="header" />

            </div>
        </header >
    )
}

export default Header
