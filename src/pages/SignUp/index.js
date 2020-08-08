import React from 'react'
import Header from '../../components/Header'
import { Button, Input } from '@material-ui/core'
import styles from './index.module.css'

const SignIn = () => {
    return (
        <div >
            <Header />
            <form className={styles.container}>

                <center>
                    <img
                        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                        alt=""
                        className="modal__headerImage"
                    />
                </center>
                <div>
                    <div>
                        <Input
                            placeholder="username"
                            type="text"
                            value=""
                            onChange=""
                        />
                    </div>
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
                </div>
                <Button type="submit" onClick="">Sign Up</Button>
            </form>
        </div >
    )
}

export default SignIn