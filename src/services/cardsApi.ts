import type { ICard } from '../types/types'

const CARDS_API_URL = 'https://6aa9b41f2d442cb69d49f7fb.mockapi.io/api/cards'

export const fetchCards = async (): Promise<ICard[]> => {
    const response = await fetch(CARDS_API_URL)

    if (!response.ok) {
        throw new Error('Failed to load cards')
    }

    return response.json()
}
export const fetchCard = async ({ id }: { id: string }): Promise<ICard> => {
    const response = await fetch(`${CARDS_API_URL}/${id}`)

    if (!response.ok) {
        throw new Error('Failed to load cards')
    }

    return response.json()
}
