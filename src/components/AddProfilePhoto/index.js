import React, { useState } from 'react'
import styles from './index.module.css'
import { Button, Input } from '@material-ui/core'
import { storage } from '../../config/firebase'
import { useHistory } from 'react-router-dom'

const AddProfilePhoto = ({ user }) => {
    const history = useHistory()
    const [image, setImage] = useState(null)
    const [progress, setProgress] = useState(0)

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleUpload = (e) => {
        // Input validation
        if (!image) {
            return alert('Please select image.')
        }

        const uploadTask = storage.ref(`profile_images/${user.displayName}`).put(image)

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
                    .ref('profile_images')
                    .child(user.displayName)
                    .getDownloadURL()
                    .then(url => {
                        user.updateProfile({
                            photoURL: url
                        })

                        setProgress(0)
                        setImage(null)
                        history.push('/profile')
                    })
            }
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.image_wrapper}>
                <img src={user.photoURL} alt="profile photo" className={styles.image} />
            </div>
            <div className={styles.imageUpload}>
                <progress className={styles.progress} value={progress} max="100" />
                <Input
                    type="file"
                    onChange={handleChange}
                />
                <center className={styles.button}>
                    <Button
                        variant="contained"
                        onClick={handleUpload}>
                        Upload
                    </Button>
                </center>
            </div>
        </div>
    )
}

export default AddProfilePhoto