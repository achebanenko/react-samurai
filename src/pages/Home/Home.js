import Profile from "../../components/Profile/Profile"
import SayContainer from "../../components/Say/SayContainer"
import PostsListContainer from "../../components/PostsList/PostsListContainer"
import styles from './Home.module.css'

export default function HomePage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Profile />
                <SayContainer />
                <PostsListContainer />
            </div>
            <div className={styles.side}>
                Ad
            </div>
        </div>
    )
}