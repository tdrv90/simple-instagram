import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Post from '../../components/Post'
import { db, auth } from '../../config/firebase'
import styles from './index.module.css'

const MyPosts = () => {
    const [posts, setPosts] = useState([])
    const [userLoggedIn, setUserLoggedIn] = useState(null)
    const [username, setUsername] = useState(null)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // user has logged in
                setUserLoggedIn(authUser)
                setUsername(authUser?.displayName)

            } else {
                // user has logged out
                setUserLoggedIn(null)
            }
        })

        return () => {
            unsubscribe()
        }
    }, [userLoggedIn])

    useEffect(() => {
        db.collection('posts').where("username", "==", username).orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                post: doc.data()
            })))
        })
    }, [username])

    console.log(posts)

    return (
        <div>
            <Header />
            <div className={styles.container}>
                {posts.map(({ id, post }) => {
                    return (
                        <Post
                            key={id}
                            postId={id}
                            username={post.username}
                            caption={post.caption}
                            imageUrl={post.imageUrl}
                            user={userLoggedIn?.displayName}
                            myPosts={true}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default MyPosts