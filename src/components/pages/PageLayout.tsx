import type { ReactNode } from 'react'
import styles from './Page.module.css'
import { Header } from '../header/Header'
import { Footer } from '../footer/Footer'
import { Body } from '../body/Body'
import { CONTACTS } from '../../utils/CONTACTS'
import { useAppSelector } from '../../store/hooks'

interface IPageLayoutProps {
    bodyClassName?: string
    children: ReactNode
}

export const PageLayout: React.FC<IPageLayoutProps> = ({ bodyClassName, children }) => {
    const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)
    const userName = useAppSelector((state) => state.auth.userName)

    return (
        <main className={styles.main}>
            <Header
                isAuthenticated={isAuthenticated}
                userName={userName ?? 'Guest'}
            />
            <Body className={bodyClassName}>{children}</Body>
            <Footer contacts={CONTACTS} />
        </main>
    )
}
