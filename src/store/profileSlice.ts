import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IProfileValues } from '../types/types'

const PROFILE_STORAGE_KEY = 'astral-profile'

const getSavedProfile = () => {
    try {
        const saved = localStorage.getItem(PROFILE_STORAGE_KEY)
        return saved ? JSON.parse(saved) as IProfileValues : null
    } catch {
        return null
    }
}

interface IProfileState {
    values: IProfileValues
}

const initialState: IProfileState = {
    values: getSavedProfile() ?? {},
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        updateProfile: (state, action: PayloadAction<IProfileValues>) => {
            state.values = action.payload
            localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(state.values))
        },
    },
})

export const { updateProfile } = profileSlice.actions
export const profileReducer = profileSlice.reducer
