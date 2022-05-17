import styles from './Post.module.css'

export default function Post({ item }) {
    return (
        <div className={styles.container}>
            {item.text}
        </div>
    )
}