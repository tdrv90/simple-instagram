import React, { useState } from 'react'
import { auth } from '../../config/firebase'
import Header from '../../components/Header'
import { Button, Input } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import styles from './index.module.css'
import Helmet from 'react-helmet'

const SignIn = () => {
    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
            .catch((error) => {
                alert(error.message)
                history.push('/signin')
            })
            .then(history.push('/posts'))

    }
    return (
        <div >
            <Helmet>
                <title>Simple Instagram - Sign In</title>
            </Helmet>
            <Header />
            <form className={styles.container}>
                <center>
                    <div className={styles.login}>LOGIN</div>
                </center>
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
                        <Button variant="contained" type="submit" onClick={signIn}>Sign In</Button>
                    </center>
                </div>
            </form>
        </div >
    )
}

export default SignIn