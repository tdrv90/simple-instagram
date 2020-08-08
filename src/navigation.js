import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Posts from './pages/Posts'

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Posts} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation