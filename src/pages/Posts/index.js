import React from 'react'
import Header from '../../components/Header'
import Post from '../../components/Post'
import styles from './index.module.css'

const Posts = () => {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <Post />
            </div>
        </div>
    )
}

export default Posts