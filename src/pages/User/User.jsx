import { useLocation, useRouteMatch, useParams } from 'react-router-dom'
import UserInfoContainer from '../../components/UserInfo/UserInfoContainer'

export default function UserPage() {
    const params = useParams()
    const location = useLocation()
    const match = useRouteMatch()

    console.log({ params })
    console.log({ location })
    console.log({ match })

    return (
        <div>
            <UserInfoContainer id={params.id} />
        </div>
    )
}