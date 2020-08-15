import React, { useState, useEffect } from 'react'
import { auth } from '../../config/firebase'
import Header from '../../components/Header'
import styles from './index.module.css'
import AddProfilePhoto from '../../components/AddProfilePhoto'
import ChangePassword from '../../components/ChangePassword'

const ProfilePage = () => {
    const [userLoggedIn, setUserLoggedIn] = useState(null)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // user has logged in
                setUserLoggedIn(authUser)

            } else {
                // user has logged out
                setUserLoggedIn(null)
            }
        })

        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <>
            <Header />
            {userLoggedIn && (
                <div className={styles.container}>
                    <div className={styles.section}>User details: </div>
                    <div className={styles.user_details}>
                        <div>
                            <strong>Username: </strong>{userLoggedIn?.displayName}
                        </div>
                        <div>
                            <strong>Username: </strong>{userLoggedIn?.email}
                        </div>
                    </div>

                    <div className={styles.section}>Change password:</div>
                    <ChangePassword />

                    <div className={styles.section}>Profile photo:</div>
                    <AddProfilePhoto user={userLoggedIn} />
                </div>
            )
            }
            {
                !userLoggedIn && (
                    <div>
                        Login to access your profile page.
                    </div>
                )
            }
        </>
    )
}

export default ProfilePage
