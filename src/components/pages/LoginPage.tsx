import { useState } from 'react'
import type { FormEvent } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router'
import styles from './Page.module.css'
import { PageLayout } from './PageLayout'
import { loginRequest } from '../../services/authApi'
import { login as loginAction } from '../../store/authSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

export const LoginPage = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<string | null>(null)

    const from = location.state?.from ?? '/cards'

    if (isAuthenticated) {
        return <Navigate to={from} replace />
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const user = loginRequest(login, password)
            dispatch(loginAction(user.userName))
            navigate(from, { replace: true })
        } catch {
            setError('Incorrect login or password')
        }
    }

    return (
        <PageLayout bodyClassName={styles.content_login}>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <h1>Sign in</h1>
                <label className={styles.loginForm__field}>
                    Login
                    <input
                        type="text"
                        name="login"
                        value={login}
                        autoComplete="username"
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </label>
                <label className={styles.loginForm__field}>
                    Password
                    <input
                        type="password"
                        name="password"
                        value={password}
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                {error && <p className={styles.error}>{error}</p>}
                <button type="submit" className={styles.loginForm__submit}>
                    Sign in
                </button>
            </form>
        </PageLayout>
    )
}
