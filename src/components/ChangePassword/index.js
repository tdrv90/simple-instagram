import React, { useState } from 'react'
import { auth } from '../../config/firebase'
import styles from './index.module.css'
import { Button, Input } from '@material-ui/core'

const ChangePassword = () => {
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')

    const handlePasswordChange = () => {
        const user = auth.currentUser
        const newPassword = password

        if (password === repassword) {
            user.updatePassword(newPassword)
                .then(() => {
                    console.log('Successful password change.')
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

    return (
        <div className={styles.changePassword_box}>
            <form>
                <div>
                    <Input
                        className={styles.password}
                        type="password"
                        placeholder="Enter your new password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <Input
                        className={styles.password}
                        type="password"
                        placeholder="Enter your new password"
                        value={repassword}
                        onChange={(e) => setRepassword(e.target.value)}
                    />
                </div>
                <div>
                    <Button
                        variant="contained"
                        disabled={!(password === repassword)}
                        className={styles.button_password}
                        type="submit"
                        onClick={handlePasswordChange}
                    >
                        Change Password
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default ChangePassword