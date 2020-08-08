import React, { useState } from 'react'
import Header from '../../components/Header'
import { useHistory } from 'react-router-dom'
import { auth } from '../../config/firebase'
import { Button, Input } from '@material-ui/core'
import styles from './index.module.css'

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
                </div>
                <Button type="submit" onClick={signUp}>Sign Up</Button>
            </form>
        </div >
    )
}

export default SignIn