// import { useLocation, useRouteMatch, useParams } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import UsersContainer from '../../components/Users/UsersContainer'

function UsersPage(props) {
    // const params = useParams()
    // const location = useLocation()
    // const match = useRouteMatch()

    // console.log({ params })
    // console.log({ location })
    // console.log({ match })

    console.log(props)

    return (
        <div>
            <UsersContainer />
        </div>
    )
}

export default withRouter(UsersPage)