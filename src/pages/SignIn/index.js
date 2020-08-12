import React, { useState } from 'react'
import { auth } from '../../config/firebase'
import Header from '../../components/Header'
import { Button, Input } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import styles from './index.module.css'

const SignIn = () => {
    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
            .catch((error) => alert(error.message))

        history.push('/')
    }
    return (
        <div >
            <Header />
            <form className={styles.container}>
                <img
                    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                    alt="instagram logo"
                />
                <div>
                    <Input
                        placeholder="email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <Input
                        placeholder="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Button type="submit" onClick={signIn}>Sign In</Button>
            </form>
        </div >
    )
}

export default SignIn