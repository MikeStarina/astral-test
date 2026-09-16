import { useState } from 'react'
import type { CSSProperties } from 'react'
import styles from './Card.module.css'
import type { ICard } from '../../types/types'

interface ICardProps {
    cardData: ICard
    style?: CSSProperties
}

export const Card: React.FC<ICardProps> = ({ cardData, style }) => {
    const { word, definition, translation } = cardData
    const [isFlipped, setIsFlipped] = useState(false)

    return (
        <div className={styles.card} style={style}>
            <div className={`${styles.card__container} ${isFlipped ? styles.card__container_flipped : ''}`}>
                <div className={styles.card__front}>
                    <p>word of the day</p>
                    <h4 className={styles.card__word} title={word}>{word}</h4>
                    <p className={styles.card__definition} title={definition}>{definition}</p>
                    <button
                        type="button"
                        className={styles.card__actionButton}
                        onClick={() => setIsFlipped(true)}
                    >
                        Learn more
                    </button>
                </div>
                <div className={styles.card__back}>
                    <h4 className={styles.card__word} title={word}>{word}</h4>
                    <p className={styles.card__definition} title={translation}>{translation}</p>
                    <button
                        type="button"
                        className={styles.card__actionButton}
                        onClick={() => setIsFlipped(false)}
                    >
                        Show less
                    </button>
                </div>
            </div>
        </div>
    )
}
