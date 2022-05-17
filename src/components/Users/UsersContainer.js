import { connect } from 'react-redux'
import { setUsers, resetUsers, setUsersPage, followUser, unfollowUser } from '../../redux/actionCreators'
import Users from './Users'

const mapStateToProps = (state) => ({
    users: state.users.users,
    total: state.users.total,
    page: state.users.page,
    count: state.users.count,
})

const mapDispatchToProps = (dispatch) => ({
    setUsers: ({ users, total }) => { console.log('setUsers'); dispatch(setUsers({ users, total })) },
    resetUsers: () => { console.log('resetUsers'); dispatch(resetUsers()) },
    setUsersPage: ({ page }) => { console.log('setUsersPage'); dispatch(setUsersPage({ page })) },
    followUser: ({ id }) => dispatch(followUser({ id })),
    unfollowUser: ({ id }) => dispatch(unfollowUser({ id })),
})

// const mapDispatchToProps = {
//     setUsers,
//     setUsersPage,
//     followUser,
//     unfollowUser,
// }

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer