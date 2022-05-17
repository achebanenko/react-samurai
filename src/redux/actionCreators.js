import * as types from './types'

// Profile
export function addPost({ text }) {
    return {
        type: types.ADD_POST,
        payload: {
            text,
        },
    }
}

// Users
export function setUsers({ users, total }) {
    return {
        type: types.SET_USERS,
        payload: {
            users,
            total,
        }
    }
}
export function resetUsers() {
    return {
        type: types.RESET_USERS,
    }
}

// export function setUsersPage(page) {
//     return {
//         type: types.SET_USERS_PAGE,
//         page,
//     }
// }
export function setUsersPage({ page }) {
    return {
        type: types.SET_USERS_PAGE,
        payload: {
            page,
        }
    }
}

export function followUser({ id }) {
    return {
        type: types.FOLLOW_USER,
        payload: {
            id,
        }
    }
}

export const unfollowUser = ({ id }) => ({
    type: types.UNFOLLOW_USER,
    payload: {
        id,
    }
})