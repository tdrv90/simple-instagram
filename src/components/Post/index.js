import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import Avatar from '@material-ui/core/Avatar'
import { db } from '../../config/firebase'
import firebase from 'firebase'

const Post = ({ postId, username, caption, imageUrl, user, myPosts }) => {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')

    useEffect(() => {
        let unsubscribe;
        if (postId) {
            unsubscribe = db
                .collection('posts')
                .doc(postId)
                .collection('comments')
                .orderBy('timestamp', 'asc')
                .onSnapshot((snapshot) => {
                    setComments(snapshot.docs.map((doc) => doc.data()))
                })
        }

        return () => {
            unsubscribe()
        }
    }, [postId])

    const postComment = (e) => {
        e.preventDefault()
        if (user) {
            db.collection('posts').doc(postId).collection('comments').add({
                text: comment,
                username: user,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })

            setComment('')
        }
    }

    const handleDeletePost = (e) => {
        e.preventDefault()

        if (user == username) {
            db.collection('posts').doc(postId).delete();
        }
    }

    return (
        <div className={styles.post}>
            <div className={styles.header}>
                <Avatar
                    className={styles.avatar}
                    alt={username}
                    src="/static/images/avatar/1.jpg"
                />
                <h3>{username}</h3>
            </div>

            <img
                className={styles.image}
                src={imageUrl}
                alt={caption}
            />
            <div className={styles.caption_and_delete}>
                <h4 className={styles.text}><strong>{username}</strong> {caption}</h4>
                {myPosts && user == username && (
                    <div>
                        <button
                            className={styles.delete_button}
                            type="submit"
                            onClick={handleDeletePost}
                        >
                            Delete
                    </button>
                    </div>
                )}
            </div>
            {user && (
                <div className={styles.comment_comments}>
                    {comments.map((comment) => (
                        <p>
                            <strong>{comment.username}</strong> {comment.text}
                        </p>
                    ))}
                </div>
            )}
            {user && (
                <form className={styles.comment_box}>
                    <input
                        className={styles.comment_input}
                        type="text"
                        placeholder="Add a comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <button
                        disabled={!comment}
                        className={styles.comment_button}
                        type="submit"
                        onClick={postComment}
                    >
                        Post
                    </button>
                </form>
            )}
        </div>
    )
}

export default Post