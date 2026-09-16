export const getNavigation = (isAuthenticated: boolean) => {
    const items = [
        { label: 'Home', to: '/' },
        { label: 'Cards', to: '/cards' },
    ]

    if (isAuthenticated) {
        items.push({ label: 'Profile', to: '/profile' })
    } else {
        items.push({ label: 'Login', to: '/login' })
    }

    return items
}
