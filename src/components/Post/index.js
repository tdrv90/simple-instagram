import React from 'react'
import styles from './index.module.css'
import Avatar from '@material-ui/core/Avatar'

const Post = () => {

    return (
        <div className={styles.post}>
            <div className={styles.header}>
                <Avatar
                    className={styles.avatar}
                    alt='Test user'
                    src="/static/images/avatar/1.jpg"
                />
                <h3>Test user</h3>
            </div>

            <img
                className={styles.image}
                src="https://www.synergytheaterfest.com/wp-content/uploads/2017/09/Lorem-Ipsum-alternatives.png"
                alt=""
            />

            <h4 className={styles.text}><strong>Test user:</strong> test caption</h4>
        </div>
    )
}

export default Post