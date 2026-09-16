import type { ReactNode } from 'react'
import styles from './Body.module.css'

interface IBodyProps {
    children?: ReactNode
    className?: string
}

export const Body: React.FC<IBodyProps> = ({ children, className }) => {
    return (
        <div className={`${styles.body} ${className ?? ''}`}>
            {children}
        </div>
    )
}
