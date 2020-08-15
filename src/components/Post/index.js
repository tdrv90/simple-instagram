import React from 'react'
import styles from './index.module.css'
import Avatar from '@material-ui/core/Avatar'
import { db } from '../../config/firebase'
import Comment from '../Comment'
import Likes from '../Likes'

const Post = ({ postId, username, caption, imageUrl, user, myPosts }) => {

    const handleDeletePost = (e) => {
        e.preventDefault()

        let checkConfirmation = window.confirm('Are you sure you want to delete your post?')

        if (checkConfirmation === true && user === username) {
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
                {myPosts && user === username && (
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
            {user && (<Likes postId={postId} user={user} />)}
            {user && (<Comment postId={postId} user={user} />)}
        </div>
    )
}

export default Post