import { useCallback, useState } from 'react'
import type { FormEvent } from 'react'
import styles from './Page.module.css'
import { PageLayout } from './PageLayout'
import { EditView } from '../editView/EditView'
import { PROFILE_FIELDS } from '../../utils/PROFILE_FIELDS'
import { updateProfile } from '../../store/profileSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import type { IProfileValues, ProfileValue } from '../../types/types'

export const ProfilePage = () => {
    const dispatch = useAppDispatch()
    const savedValues = useAppSelector((state) => state.profile.values)
    const [values, setValues] = useState<IProfileValues>(savedValues)
    const [isSaved, setIsSaved] = useState(false)

    const handleChange = useCallback((name: string, value: ProfileValue) => {
        setIsSaved(false)
        setValues((prev) => ({
            ...prev,
            [name]: value,
        }))
    }, [])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(updateProfile(values))
        setIsSaved(true)
    }

    return (
        <PageLayout bodyClassName={styles.content_profile}>
            <h1>Profile</h1>
            <EditView
                fields={PROFILE_FIELDS}
                values={values}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            {isSaved && <p className={styles.success}>Profile saved</p>}
        </PageLayout>
    )
}
