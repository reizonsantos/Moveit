import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGjw3M3L5nrLQ/profile-displayphoto-shrink_800_800/0/1599085663974?e=1619654400&v=beta&t=FdGg8bBLFlgirh3LMlANUJN-2pEUC27WTklyPOG_Ulc" alt="Reizon" />
            <div>
                <strong>Reizon Santos</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}