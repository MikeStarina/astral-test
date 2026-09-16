import styles from './CardsList.module.css'
import { Card } from '../card/Card'
import type { ICard } from '../../types/types'

interface ICardsListProps {
    cardsData: ICard[]
}

export const CardsList: React.FC<ICardsListProps> = ({ cardsData }) => {
    return (
       <ul className={styles.cardsList}>
        {cardsData.map((card) => (
            <li key={card.id} className={styles.cardsList__item}>
                <Card cardData={card} />
            </li>
        ))}
       </ul>
    )
}