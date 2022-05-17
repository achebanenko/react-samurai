const routes = {
    home: {
        path: '/',
        label: 'Home',
    },
    feed: {
        path: '/feed',
        label: 'Feed',
    },
    messages: {
        path: '/messages',
        label: 'Messages',
    },
    users: {
        path: '/users',
        label: 'Users',
    },
    user: {
        // path: '/user/:id?',
        path: '/user/:id',
    }
};

export default routes;