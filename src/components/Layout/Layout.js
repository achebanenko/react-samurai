import styles from './Layout.module.css'
import Header from '../Header/Header'
import Nav from '../Nav/Nav'

export default function Layout({ children }) {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.inner}>
                <Nav />
                <main className={styles.container}>
                    {children}
                </main>
            </div>
        </div>
    );
}