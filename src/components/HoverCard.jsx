import styles from "../styles/Components/HoverCard.module.css"
import rightArrow from "../assets/right-arrow.svg"
export default function HoverCard({ image, heading, description, mainStyles }) {
    return (
        <div className={styles.card} style={mainStyles}>
            <img
                src={image}
                alt=""
                className={styles.img}
            />
            <div className={styles.cardContent}>
                <h2 className={styles.heading}>{heading}</h2>
                <p className={styles.text}>
                    {description}
                </p>
                <a href="#" className={styles.button}>
                    Find out more
                    <span className="material-symbols-outlined">{">"}</span>
                </a>
            </div>
        </div>
    )
}