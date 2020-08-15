import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import { db } from '../../config/firebase'
import { Button } from '@material-ui/core'
import firebase from 'firebase'

const Comment = ({ postId, user }) => {
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

        // Input validation
        if (!comment) {
            return alert('Please enter comment.')
        }

        // Limit length of comment
        if (comment.length > 300) {
            return alert('Please enter comment less than 300 symbols.')
        }

        if (user) {
            db.collection('posts').doc(postId).collection('comments').add({
                text: comment,
                username: user,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })

            setComment('')
        }
    }

    return (
        <>
            <div className={styles.comment_comments}>
                {comments.map((comment) => (
                    <p>
                        <strong>{comment.username}</strong> {comment.text}
                    </p>
                ))}
            </div>
            <form className={styles.comment_box}>
                <input
                    className={styles.comment_input}
                    type="text"
                    placeholder="Add a comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <Button
                    variant="contained"
                    disabled={!comment}
                    className={styles.comment_button}
                    type="submit"
                    onClick={postComment}
                >
                    Post
                </Button>
            </form>
        </>
    )
}

export default Comment