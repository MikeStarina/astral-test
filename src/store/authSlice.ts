import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const AUTH_STORAGE_KEY = 'astral-auth'

const checkAuth = () => {
    try {
        const saved = localStorage.getItem(AUTH_STORAGE_KEY)
        return saved ? JSON.parse(saved) as { isAuthenticated: boolean; userName: string } : null
    } catch {
        return null
    }
}

const persistedAuth = checkAuth()

interface IAuthState {
    isAuthenticated: boolean
    userName: string
}

const initialState: IAuthState = {
    isAuthenticated: persistedAuth?.isAuthenticated ?? false,
    userName: persistedAuth?.userName ?? '',
}

const saveAuth = (state: IAuthState) => {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(state))
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            state.isAuthenticated = true
            state.userName = action.payload
            saveAuth(state)
        },
    },
})

export const { login } = authSlice.actions
export const authReducer = authSlice.reducer
