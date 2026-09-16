export interface ICard {
    id: string
    word: string
    definition: string
    translation: string
}

export type ProfileFieldType =
    | 'string'
    | 'number'
    | 'text'
    | 'date'
    | 'select'
    | 'checkbox-group'
    | 'radio-group'

export type ProfileValue = string | number | string[]

export interface IFieldOption {
    value: string
    label: string
}

export interface IFieldCondition {
    field: string
    value: string
}

export interface IProfileField {
    name: string
    label: string
    type: ProfileFieldType
    options?: IFieldOption[]
    disabledWhen?: IFieldCondition
}

export interface IProfileValues {
    [key: string]: ProfileValue
}

export interface IContacts {
    email: string
    phone: string
    city: string
}
