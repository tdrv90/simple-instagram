import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import { useHistory } from 'react-router-dom'
import { auth } from '../../config/firebase'
import styles from './index.module.css'
import Helmet from 'react-helmet'

const Home = () => {
    const history = useHistory()
    const [userLoggedIn, setUserLoggedIn] = useState(null)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // user has logged in
                setUserLoggedIn(authUser)
                history.push('/posts')
            } else {
                // user has logged out
                setUserLoggedIn(null)
            }
        })

        return () => {
            unsubscribe()
        }
    }, [userLoggedIn, history])

    return (
        <div>
            <Helmet>
                <title>Simple Instagram - Home</title>
            </Helmet>
            <Header />
            <div className={styles.container}>
                <div className={styles.image_wrapper}>
                    <img className={styles.image} src="https://images.unsplash.com/photo-1544923408-75c5cef46f14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" alt="Guest home page" />
                </div>
                <div className={styles.text}>
                    Join, discover and share stories.
                </div>
            </div>
        </div>
    )
}

export default Home