import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styles from './Users.module.css'
import Pagination from '../Pagination/Pagination'

function UserItem({ user }) {
    return (
        <div className={styles.card}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
        </div>
    )
}

export default function Users({ users, total, page, count, setUsers, resetUsers, setUsersPage, followUser, unfollowUser }) {
    console.log('start')
    console.log('users ', users)
    console.log('page ', page)

    useEffect(() => {
        console.log('effect')

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${count}`)
            .then(response => {
                const { items, totalCount } = response.data
                setUsers({
                    users: items,
                    total: totalCount,
                })
            })
    }, [page, count, setUsers, resetUsers])

    useEffect(() => {
        return () => {
            resetUsers()
        }
    }, [resetUsers])

    const number = Math.ceil(total / count)
    function changePage(page) {
        setUsersPage({ page })
    }

    console.log('render')

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.list}>
                    {users.map(user => <UserItem key={user.id} user={user} />)}
                </div>
            </div>
            <Pagination page={page} number={number} change={changePage} />
        </>
    )
}