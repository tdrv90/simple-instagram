const getNavigation = (userLoggedIn) => {
    const authenticatedLinks = [
        {
            title: 'All Posts',
            link: '/posts'
        },
        {
            title: 'My Posts',
            link: '/myposts'
        },
        {
            title: 'Add Post',
            link: '/add'
        },
        {
            title: `Profile (${userLoggedIn?.displayName})`,
            link: '/profile'
        },
        {
            title: 'Logout',
            link: `/logout`
        }
    ]

    const guestLinks = [
        {
            title: 'Posts',
            link: '/posts'
        },
        {
            title: 'Sign In',
            link: '/signin'
        },
        {
            title: 'Sign Up',
            link: '/signup'
        }
    ]

    return userLoggedIn ? authenticatedLinks : guestLinks
}

export default getNavigation