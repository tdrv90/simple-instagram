import React from 'react'
import Header from '../../components/Header'
import { Button, Input } from '@material-ui/core'
import styles from './index.module.css'

const SignIn = () => {
    return (
        <div >
            <Header />
            <form className={styles.container}>
                <img
                    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                />
                <div>
                    <Input
                        placeholder="email"
                        type="text"
                        value=""
                        onChange=""
                    />
                </div>
                <div>
                    <Input
                        placeholder="password"
                        type="password"
                        value=""
                        onChange=""
                    />
                </div>
                <Button type="submit">Sign In</Button>
            </form>
        </div >
    )
}

export default SignIn