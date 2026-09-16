import { useEffect, useState } from 'react'
import styles from './Page.module.css'
import { PageLayout } from './PageLayout'
import { CardsList } from '../cardsList/CardsList'
import { fetchCards } from '../../services/cardsApi'
import type { ICard } from '../../types/types'

export const CardsPage = () => {
    const [cards, setCards] = useState<ICard[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(function EF_loadCards() {
        const loadCards = async () => {
            setIsLoading(true)
            setError(null)

            try {
                const data = await fetchCards()
                setCards(data)
            } catch {
                setError('Something went wrong')
            } finally {
                setIsLoading(false)
            }
        }

        loadCards()

        return () => {
            // TODO: abort controller call here
        }
    }, [])

    return (
        <PageLayout bodyClassName={styles.content_cards}>
            {isLoading && <p>Loading...</p>}
            {error && <p className={styles.error}>{error}</p>}
            {!isLoading && !error && <CardsList cardsData={cards} />}
        </PageLayout>
    )
}
