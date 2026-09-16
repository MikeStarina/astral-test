import { useEffect, useState } from 'react'
import styles from './Page.module.css'
import { PageLayout } from './PageLayout'
import { Card } from '../card/Card'
import { fetchCard } from '../../services/cardsApi'
import type { ICard } from '../../types/types'

export const MainPage = () => {
    const [card, setCard] = useState<ICard | null>(null)

    useEffect(function EF_loadRandomCard() {
        const loadRandomCard = async () => {
            try {
                // fixed amount of cards (50)
                const randomId = Math.floor(Math.random() * 50) + 1
                const card = await fetchCard({ id: randomId.toString() })
                setCard(card)
            } catch {
                setCard(null)
            }
        }
        loadRandomCard()

        return () => {
            // TODO: abort controller call here
        }
    }, [])

    return (
        <PageLayout bodyClassName={styles.content_main}>
            <h1>Word of the day</h1>
            {card && (
                <Card cardData={card} style={{ maxWidth: '350px' }} />
            )}
        </PageLayout>
    )
}
