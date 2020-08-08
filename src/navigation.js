import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Posts from './pages/Posts'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Logout from './pages/Logout'
import AddPost from './pages/AddPost'

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Posts} />
                <Route path="/posts" component={Posts} />
                <Route path="/add" component={AddPost} />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/logout" component={Logout} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation