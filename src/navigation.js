import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import PostsPage from './pages/Posts'
import MyPostsPage from './pages/MyPosts'
import SignInPage from './pages/SignIn'
import SignUpPage from './pages/SignUp'
import LogoutPage from './pages/Logout'
import AddPostPage from './pages/AddPost'
import ProfilePage from './pages/Profile'

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/posts" component={PostsPage} />
                <Route path="/myposts" component={MyPostsPage} />
                <Route path="/add" component={AddPostPage} />
                <Route path="/signin" component={SignInPage} />
                <Route path="/profile" component={ProfilePage} />
                <Route path="/signup" component={SignUpPage} />
                <Route path="/logout" component={LogoutPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation