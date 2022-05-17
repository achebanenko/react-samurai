import { createContext } from 'react'

export const profile = {
    name: 'Art',
    age: 35,
    city: 'Kaliningrad',
}

// const ProfileContext = createContext(profile)
const ProfileContext = createContext(null)

export default ProfileContext