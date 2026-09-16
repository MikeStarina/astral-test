import type { IProfileField } from '../types/types'

export const PROFILE_FIELDS: IProfileField[] = [
    { name: 'firstName', label: 'First name', type: 'string' },
    { name: 'lastName', label: 'Last name', type: 'string' },
    { name: 'age', label: 'Age', type: 'number' },
    { name: 'birthDate', label: 'Birth date', type: 'date' },
    { name: 'bio', label: 'Bio', type: 'text' },
    {
        name: 'country',
        label: 'Country',
        type: 'select',
        options: [
            { value: 'russia', label: 'Russia' },
            { value: 'usa', label: 'USA' },
            { value: 'germany', label: 'Germany' },
            { value: 'other', label: 'Other' },
        ],
    },
    {
        name: 'city',
        label: 'City',
        type: 'string',
        disabledWhen: { field: 'country', value: 'other' },
    },
    {
        name: 'nativeLanguage',
        label: 'Native language',
        type: 'select',
        options: [
            { value: 'ru', label: 'Russian' },
            { value: 'en', label: 'English' },
            { value: 'de', label: 'German' },
        ],
    },
    {
        name: 'learningGoal',
        label: 'Learning goal',
        type: 'select',
        options: [
            { value: 'vocabulary', label: 'Vocabulary' },
            { value: 'travel', label: 'Travel' },
            { value: 'work', label: 'Work' },
        ],
    },
    {
        name: 'dailyGoal',
        label: 'Words per day',
        type: 'number',
    },
    { name: 'startDate', label: 'Start date', type: 'date' },
    {
        name: 'notes',
        label: 'Notes',
        type: 'text',
    },
    {
        name: 'level',
        label: 'Level',
        type: 'radio-group',
        options: [
            { value: 'beginner', label: 'Beginner' },
            { value: 'intermediate', label: 'Intermediate' },
            { value: 'advanced', label: 'Advanced' },
        ],
    },
    {
        name: 'interests',
        label: 'Interests',
        type: 'checkbox-group',
        options: [
            { value: 'reading', label: 'Reading' },
            { value: 'speaking', label: 'Speaking' },
            { value: 'writing', label: 'Writing' },
            { value: 'listening', label: 'Listening' },
        ],
    },
]
