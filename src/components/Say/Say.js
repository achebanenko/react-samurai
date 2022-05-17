import { useState } from 'react'
import styles from './Say.module.css'

export default function Say({ addPost }) {
    const [value, setValue] = useState('')

    function handleChange(e) {
        setValue(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setValue('')
        addPost({ text: value })
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <textarea placeholder="Say something" value={value} onChange={handleChange}></textarea>
                <br />
                <button type="submit">Say</button>
            </form>
        </div>
    )
}