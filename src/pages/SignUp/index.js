import React, { useState } from 'react'
import Header from '../../components/Header'
import { useHistory } from 'react-router-dom'
import { auth } from '../../config/firebase'
import { Button, Input } from '@material-ui/core'
import styles from './index.module.css'
import Helmet from 'react-helmet'

const SignIn = () => {
    const history = useHistory()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signUp = (e) => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                return authUser.user.updateProfile({
                    displayName: username
                })
            })
            .catch((error) => alert(error.message))

        history.push('/')
    }

    return (
        <div >
            <Helmet>
                <title>Simple Instagram - Sign Up</title>
            </Helmet>
            <Header />
            <form className={styles.container}>
                <center>
                    <div className={styles.register}>REGISTER</div>
                </center>
                <div>
                    <div>
                        <Input
                            placeholder="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
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
                    <div className={styles.button}>
                        <center>
                            <Button variant="contained" type="submit" onClick={signUp}>Sign Up</Button>
                        </center>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default SignIn