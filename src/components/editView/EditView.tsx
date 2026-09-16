import type { FormEvent } from 'react'
import styles from './EditView.module.css'
import { Field } from '../field/Field'
import type { IProfileField, IProfileValues, ProfileValue } from '../../types/types'

interface IEditViewProps {
    fields: IProfileField[]
    values: IProfileValues
    onChange: (name: string, value: ProfileValue) => void
    onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

const isFieldDisabled = (field: IProfileField, values: IProfileValues) => {
    return Boolean(field.disabledWhen && values[field.disabledWhen.field] === field.disabledWhen.value)
}

export const EditView: React.FC<IEditViewProps> = ({ fields, values, onChange, onSubmit }) => {
    return (
        <form className={styles.editView} onSubmit={onSubmit}>
            {fields.map((field) => (
                <Field
                    key={field.name}
                    field={field}
                    value={values[field.name]}
                    disabled={isFieldDisabled(field, values)}
                    onChange={onChange}
                />
            ))}
            <button type="submit" className={styles.editView__submit}>
                Save profile
            </button>
        </form>
    )
}
