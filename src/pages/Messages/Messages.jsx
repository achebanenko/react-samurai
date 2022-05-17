import styles from './Messages.module.css'
import DialogsList from '../../components/DialogsList/DialogsList'
import Dialog from '../../components/Dialog/Dialog'

export default function MessagesPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Dialog />
            </div>
            <div className={styles.side}>
                <DialogsList />
            </div>
        </div>
    )
}