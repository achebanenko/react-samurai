import styles from './Pagination.module.css'

export default function Pagination({ page, number, change }) {
    return (
        <div className={styles.container}>
            {[...Array(number)].map((_, i) =>
                <a
                    key={i + 1}
                    href="#"
                    onClick={() => change(i + 1)}
                    className={page === i + 1 ? styles.active : undefined}
                >
                    {i + 1}
                </a>
            )}
        </div>
    )
}