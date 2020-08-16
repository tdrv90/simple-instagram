import React from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../../config/firebase'
import { Button } from '@material-ui/core'
import Header from '../../components/Header'
import styles from './index.module.css'
import Helmet from 'react-helmet'


const SignIn = () => {
    const history = useHistory()

    const logOut = (e) => {
        e.preventDefault()

        auth.signOut()
        history.push('/')
    }

    return (
        <div >
            <Helmet>
                <title>Simple Instagram - Logout</title>
            </Helmet>
            <Header />
            <div className={styles.container}>
                <Button
                    variant="contained"
                    onClick={logOut}>Click here to logout</Button>
            </div>
        </div >
    )
}

export default SignIn