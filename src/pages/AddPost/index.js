import React, { useState, useEffect } from 'react'
import { Button, Input, TextField } from '@material-ui/core'
import firebase from 'firebase'
import { auth, storage, db } from '../../config/firebase'
import styles from './index.module.css'
import Header from '../../components/Header'
import { useHistory } from 'react-router-dom'
import Helmet from 'react-helmet'

const AddPost = () => {
    const history = useHistory()
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
    }, [userLoggedIn])

    const [caption, setCaption] = useState('')
    const [image, setImage] = useState(null)
    const [progress, setProgress] = useState(0)

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleUpload = (e) => {
        // Input validation
        if (!caption && !image) {
            return alert('Please enter caption and image.')
        }
        if (!caption) {
            return alert('Please enter caption.')
        }
        if (!image) {
            return alert('Please select image.')
        }

        // Limit length of caption text
        if (caption.length > 600) {
            return alert('Please add caption less than 600 symbols.')
        }
        const uploadTask = storage.ref(`images/${image.name}`).put(image)

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                setProgress(progress)
            },
            (error) => {
                alert(error.message)
            },
            () => {
                storage
                    .ref('images')
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        // post image inside db
                        db.collection('posts').add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption,
                            imageUrl: url,
                            username: userLoggedIn?.displayName
                        })

                        setProgress(0)
                        setCaption('')
                        setImage(null)
                        history.push('/posts')
                    })
            }
        )
    }

    return (
        <div>
            <Helmet>
                <title>Simple Instagram - Add Post</title>
            </Helmet>

            <Header />

            <div className={styles.imageUpload}>
                <progress className={styles.progress} value={progress} max="100" />
                <TextField
                    type="text"
                    placeholder="Enter a caption"
                    onChange={e => setCaption(e.target.value)}
                    value={caption}
                />
                <Input
                    type="file"
                    onChange={handleChange}
                />
                <Button
                    variant="contained"
                    onClick={handleUpload}
                >
                    Upload
                </Button>
            </div>
        </div>
    )
}

export default AddPost