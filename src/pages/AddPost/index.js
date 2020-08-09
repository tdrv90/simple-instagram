import React, { useState, useEffect } from 'react'
import { Button, Input } from '@material-ui/core'
import firebase from 'firebase'
import { auth, storage, db } from '../../config/firebase'
import styles from './index.module.css'
import Header from '../../components/Header'
import { useHistory } from 'react-router-dom'


const AddPost = () => {
    const history = useHistory()
    const [userLoggedIn, setUserLoggedIn] = useState(null)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // user has logged in
                console.log(authUser)
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
        const uploadTask = storage.ref(`images/${image.name}`).put(image)

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // progress function ...
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                setProgress(progress)
            },
            (error) => {
                // error function
                console.log(error)
                alert(error.message)
            },
            () => {
                // complete function
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
            <Header />

            <div className={styles.imageUpload}>
                <progress className={styles.progress} value={progress} max="100" />
                <Input
                    type="text"
                    placeholder="Enter a caption"
                    onChange={e => setCaption(e.target.value)}
                    value={caption}
                />
                <Input
                    type="file"
                    onChange={handleChange}
                />
                <Button onClick={handleUpload}>
                    Upload
            </Button>
            </div>
        </div>
    )
}


export default AddPost