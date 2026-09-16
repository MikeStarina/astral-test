import styles from './Field.module.css'
import type { IProfileField, ProfileValue } from '../../types/types'

interface IFieldProps {
    field: IProfileField
    value: ProfileValue
    disabled?: boolean
    onChange: (name: string, value: ProfileValue) => void
}

export const Field: React.FC<IFieldProps> = ({ field, value, disabled = false, onChange }) => {
    const { name, label, type, options = [] } = field

    if (type === 'text') {
        return (
            <label className={styles.field}>
                <span>{label}</span>
                <textarea
                    name={name}
                    value={String(value ?? '')}
                    disabled={disabled}
                    rows={4}
                    onChange={(event) => onChange(name, event.target.value)}
                />
            </label>
        )
    }

    if (type === 'select') {
        return (
            <label className={styles.field}>
                <span>{label}</span>
                <select
                    name={name}
                    value={String(value ?? '')}
                    disabled={disabled}
                    onChange={(event) => onChange(name, event.target.value)}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </label>
        )
    }

    if (type === 'radio-group') {
        return (
            <fieldset className={styles.field} disabled={disabled}>
                <legend>{label}</legend>
                <div className={styles.field__group}>
                    {options.map((option) => (
                        <label key={option.value} className={styles.field__option}>
                            <input
                                type="radio"
                                name={name}
                                value={option.value}
                                checked={value === option.value}
                                onChange={() => onChange(name, option.value)}
                            />
                            {option.label}
                        </label>
                    ))}
                </div>
            </fieldset>
        )
    }

    if (type === 'checkbox-group') {
        const selected = Array.isArray(value) ? value : []

        return (
            <fieldset className={styles.field} disabled={disabled}>
                <legend>{label}</legend>
                <div className={styles.field__group}>
                    {options.map((option) => {
                        const isChecked = selected.includes(option.value)

                        return (
                            <label key={option.value} className={styles.field__option}>
                                <input
                                    type="checkbox"
                                    name={name}
                                    value={option.value}
                                    checked={isChecked}
                                    onChange={() => {
                                        const nextValue = isChecked
                                            ? selected.filter((item) => item !== option.value)
                                            : [...selected, option.value]
                                        onChange(name, nextValue)
                                    }}
                                />
                                {option.label}
                            </label>
                        )
                    })}
                </div>
            </fieldset>
        )
    }

    return (
        <label className={styles.field}>
            <span>{label}</span>
            <input
                type={type === 'number' ? 'number' : type === 'date' ? 'date' : 'text'}
                name={name}
                value={String(value ?? '')}
                disabled={disabled}
                onChange={(event) => {
                    const nextValue = type === 'number'
                        ? event.target.value === '' ? '' : Number(event.target.value)
                        : event.target.value
                    onChange(name, nextValue)
                }}
            />
        </label>
    )
}
