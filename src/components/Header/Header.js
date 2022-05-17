import styles from './Header.module.css'
import ProfileContext from '../../profile-context'

export default function Header() {
    return (
        <ProfileContext.Consumer>
            {value => (
                <header className={styles.container}>
                    <div>
                        Logo
                    </div>
                    <div>
                        {value.name}
                    </div>
                </header>
            )}
        </ProfileContext.Consumer>
    )
}