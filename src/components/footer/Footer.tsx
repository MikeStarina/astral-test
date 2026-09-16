import styles from './Footer.module.css'
import type { IContacts } from '../../types/types'

interface IFooterProps {
    contacts: IContacts
}

export const Footer: React.FC<IFooterProps> = ({ contacts }) => {
    return (
        <footer className={styles.footer}>
            <p>Word of the day — test app by Mike Starina for Astral Group</p>
            <p>{contacts.email}</p>
            <p>{contacts.phone}</p>
            <p>{contacts.city}</p>
        </footer>
    )
}
