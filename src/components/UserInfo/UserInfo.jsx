import { useEffect } from 'react'

export default function UserInfo({ id }) {
    useEffect(() => {
        // https://social-network.samuraijs.com/api/1.0/profile/2

    }, [])

    return (
        <div>
            UserInfo {id}
        </div>
    )
}