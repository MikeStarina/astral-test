import { Link } from 'react-router'
import styles from './Header.module.css'
import { getNavigation } from '../../utils/NAVIGATION_CONFIG'

interface IHeaderProps {
    userName: string
    isAuthenticated: boolean
}

export const Header: React.FC<IHeaderProps> = ({ userName, isAuthenticated }) => {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.header__logo}>
                Word of the day
            </Link>
            <nav>
                <ul className={styles.header__navList}>
                    {getNavigation(isAuthenticated).map((item) => (
                        <li key={item.to}>
                            <Link to={item.to} className={styles.header__navLink}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className={styles.header__profile}>
                <p>{userName}</p>
            </div>
        </header>
    )
}
