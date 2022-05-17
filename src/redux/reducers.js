import { combineReducers } from 'redux'
import * as types from './types'

// Profile
const profileInitialState = {
    posts: [
        { id: 0, text: 'First post', likes: 0 },
        { id: 1, text: 'Post two', likes: 0 },
    ],

}

function profileReducer(state = profileInitialState, action) {
    switch (action.type) {
        case types.ADD_POST:
            return ({
                ...state,
                posts: [
                    ...state.posts,
                    {
                        id: Math.floor(Math.random() * 10),
                        text: action.payload.text,
                        likes: 0,
                    },
                ]
            })
        default:
            return state
    }
}

// Users
const usersInitialState = {
    users: [],
    total: 0,
    count: 10,
    page: 1,
}

function usersReducer(state = usersInitialState, action) {
    switch (action.type) {
        case types.SET_USERS:
            return {
                ...state,
                users: action.payload.users,
                total: action.payload.total,
            }
        case types.RESET_USERS:
            return usersInitialState
        // case types.SET_USERS_PAGE:
        //     return {
        //         ...state,
        //         page: action.page,
        //     }
        case types.SET_USERS_PAGE:
            return {
                ...state,
                page: action.payload.page,
            }
        case types.FOLLOW_USER:
            return {
                ...state,
                users: [...state.users.map(user =>
                    user.id === action.payload.id ? { ...user, follow: true } : user)]
            }
        case types.UNFOLLOW_USER:
            return {
                ...state,
                users: [...state.users.map(user =>
                    user.id === action.payload.id ? { ...user, follow: false } : user)]
            }
        default:
            return state
    }
}


// Root
const rootReducer = combineReducers({
    profile: profileReducer,
    users: usersReducer,
})

export default rootReducer