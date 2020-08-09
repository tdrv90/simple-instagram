import React, { useState, useEffect } from 'react'
import { auth } from './config/firebase'
import './App.css'


function App(props) {
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

  return (
    <div className="App">
      {props.children}
    </div>
  )
}

export default App;
