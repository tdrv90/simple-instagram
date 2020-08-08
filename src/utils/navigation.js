const getNavigation = (userLoggedIn) => {
    const authLinks = [
        {
            title: 'Posts',
            link: '/posts'
        },
        {
            title: 'Add post',
            link: '/add'
        },
        {
            title: 'Logout',
            link: `/logout`
        }
    ]

    const guestLinks = [
        {
            title: 'Sign In',
            link: '/signin'
        },
        {
            title: 'Sign Up',
            link: '/signup'
        },
        {
            title: 'Posts',
            link: '/posts'
        },
    ]

    return userLoggedIn ? authLinks : guestLinks
}

export default getNavigation