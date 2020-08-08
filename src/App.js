import React, { useState, useEffect } from 'react'
import { db, auth } from './config/firebase'
import { Button } from '@material-ui/core'
import './App.css'

function App(props) {
  const [userLoggedIn, setUserLoggedIn] = useState(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user has logged in
        console.log(authUser)
        setUserLoggedIn(authUser)
        console.log(userLoggedIn)

      } else {
        // user has logged out
        setUserLoggedIn(null)
      }
    })

    return () => {
      unsubscribe()
    }
  }, [userLoggedIn])

  return (
    <div className="App">
      {userLoggedIn && (
        <div>
          <div>User is logged.</div>
          <Button onClick={() => auth.signOut()}>
            Logout
        </Button>
        </div>
      )}
      {props.children}
    </div>
  )
}

export default App;
