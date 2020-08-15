import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import { db } from '../../config/firebase'
import firebase from 'firebase'

const Likes = ({ postId, user }) => {
    const [likes, setLikes] = useState([])
    const [usersLikes, setUsersLikes] = useState([])

    useEffect(() => {
        let unsubscribe;
        if (postId) {
            unsubscribe = db
                .collection('posts')
                .doc(postId)
                .collection('likes')
                .orderBy('timestamp', 'asc')
                .onSnapshot((snapshot) => {
                    setLikes(snapshot.docs.map((doc) => ({
                        id: doc.id,
                        like: doc.data()
                    })))
                })
        }

        return () => {
            unsubscribe()
        }
    }, [postId])

    useEffect(() => {
        setUsersLikes(likes.map((asd) => asd.like.username))
    }, [likes])


    const handleLike = (e) => {
        e.preventDefault()

        db.collection('posts').doc(postId).collection('likes').add({
            username: user,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
    }

    const handleDislike = (e) => {
        const getLoggedUserLikeId = likes.filter(each => each.like.username === user)
        db.collection('posts').doc(postId).collection('likes').doc(getLoggedUserLikeId[0]?.id).delete()
    }

    return (
        <div className={styles.container}>
            {!usersLikes.includes(user) &&
                (
                    <div className={styles.button_wrapper}>
                        <button
                            type="submit"
                            onClick={handleLike}
                        >
                            Like
                        </button>
                    </div>
                )
            }
            {usersLikes.includes(user) &&
                (
                    <div className={styles.button_wrapper}>
                        <button
                            type="submit"
                            onClick={handleDislike}
                        >
                            Unlike
                        </button>
                    </div>
                )
            }
            {likes && (<div className={styles.likes_wrapper}>Likes: {likes.length}</div>)}
        </div>
    )
}

export default Likes



