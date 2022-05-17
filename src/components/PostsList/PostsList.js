import styles from './PostsList.module.css'
import Post from '../Post/Post'

export default function PostsList({ posts }) {
    return (
        <div className={styles.container}>
            {posts.map(post =>
                <Post
                    key={post.id}
                    item={post}
                />
            )}
        </div>
    )
}