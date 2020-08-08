import React from 'react'
import Header from '../../components/Header'
import { useHistory } from 'react-router-dom'
import { auth } from '../../config/firebase'
import { Button } from '@material-ui/core'
import styles from './index.module.css'

const SignIn = () => {
    const history = useHistory()

    const logOut = (e) => {
        e.preventDefault()

        auth.signOut()
        history.push('/')
    }

    return (
        <div >
            <div className={styles.container}>
                <Button onClick={logOut}>Click here to logout</Button>
            </div>
        </div >
    )
}

export default SignIn