// Card.js
import styles from '../styles/Components/Card.module.css';
import Button from './Button';

const cardsData = [
    {
        image: 'https://images.unsplash.com/photo-1626908013351-800ddd734b8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM4fHx0ZWNofGVufDB8fDB8fHww',
        thumb: 'https://i.imgur.com/7D7I6dI.png',
        title: 'Gain Visiblity',
        status: '1 hour ago',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?',
    },
    {
        image: 'https://images.unsplash.com/photo-1535303311164-664fc9ec6532?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjU0fHx0ZWNofGVufDB8fDB8fHww',
        thumb: 'https://i.imgur.com/sjLMNDM.png',
        title: 'Starting Project',
        status: '3 hours ago',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?',
    },
    {
        image: 'https://images.unsplash.com/photo-1497215641119-bbe6d71ebaae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUzfHx0ZWNofGVufDB8fDB8fHww',
        thumb: 'https://i.imgur.com/7D7I6dI.png',
        title: 'Developing Buisnesses',
        status: '1 hour ago',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?',
    },
    {
        image: 'https://images.unsplash.com/photo-1504812445817-cb3d4f235a14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjYxfHx0ZWNofGVufDB8fDB8fHww',
        thumb: 'https://i.imgur.com/sjLMNDM.png',
        title: 'Further',
        status: '3 hours ago',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?',
    },
];

export default function Card() {
    return (
        <div className={styles.container}>
            <h2 className={styles.CardContainerTitle}>What We Can Do For You</h2>
            <div className={styles.cards}>
                {cardsData.map((card, index) => (
                    <div key={index}>
                        <a href="#" className={styles.card}>
                            <img src={card.image} className={styles.cardImage} alt={card.title} />
                            <div className={styles.cardOverlay}>
                                <div className={styles.cardHeader}>
                                    <svg className={styles.cardArc} xmlns="http://www.w3.org/2000/svg">
                                        <path />
                                    </svg>
                                    <div className={styles.cardHeaderText}>
                                        <h3 className={styles.cardTitle}>{card.title}</h3>
                                    </div>
                                </div>
                                <div className={styles.descriptionContainer}>
                                    <p className={styles.cardDescription}>{card.description}</p>
                                    <Button data={"Read More"} />
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
