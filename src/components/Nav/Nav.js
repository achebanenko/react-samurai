import { NavLink, useRouteMatch } from 'react-router-dom'
import styles from './Nav.module.css'
import routes from '../../routes'

const NavItem = ({ exact, to, label }) => {
    const match = useRouteMatch({
        path: to,
        exact
    })

    return match
        ? <li className={styles.active}>{label}</li>
        : <li><NavLink exact={exact} to={to}>{label}</NavLink></li>
}

export default function Nav() {
    return (
        <nav className={styles.container}>
            <ul className={styles.menu}>
                <NavItem exact to={routes.home.path} label={routes.home.label} />
                <NavItem to={routes.feed.path} label={routes.feed.label} />
                <NavItem to={routes.messages.path} label={routes.messages.label} />
                <NavItem to={routes.users.path} label={routes.users.label} />
            </ul>

            <div className={styles.copyright}>
                React
            </div>
        </nav>
    )
}