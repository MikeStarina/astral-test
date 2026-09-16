import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router'
import { useAppSelector } from '../../store/hooks'

interface IProtectedRouteProps {
    children: ReactNode
}

export const ProtectedRoute: React.FC<IProtectedRouteProps> = ({ children }) => {
    const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)
    const location = useLocation()

    if (!isAuthenticated) {
        return <Navigate to="/login" replace state={{ from: location.pathname }} />
    }

    return children
}
