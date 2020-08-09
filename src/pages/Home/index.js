import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import { useHistory } from 'react-router-dom'
import { auth } from '../../config/firebase'
import styles from './index.module.css'

const Home = () => {
    const history = useHistory()
    const [userLoggedIn, setUserLoggedIn] = useState(null)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // user has logged in
                console.log(authUser)
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
    }, [userLoggedIn])

    return (
        <div>
            <Header />
            <div className={styles.text}>
                Join, discover and share stories.
            </div>
        </div>
    )
}

export default Home