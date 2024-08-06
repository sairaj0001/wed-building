import styles from "../styles/Components/ServiceCard.module.css"


export default function ServiecCard(){
    return (
        <div className={styles.container}>
            <div className={`${styles.box} ${styles['box-1']}`}>
                <div className={styles.cover}>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/945546/3433202-893bc9989a52eba0.png" alt="Sensebot" />
                </div>
                <button><div></div></button>
            </div>
            <div className={`${styles.box} ${styles['box-2']}`}>
                <div className={styles.cover}>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/945546/3433202-964edcf0f07211b0.png" alt="OnePass" />
                </div>
                <button><div></div></button>
            </div>
            <div className={`${styles.box} ${styles['box-3']}`}>
                <div className={styles.cover}>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/945546/3433202-2ebb2b6f93add843.png" alt="DeepKnow" />
                </div>
                <button><div></div></button>
            </div>
            <div className={`${styles.box} ${styles['box-4']}`}>
                <div className={styles.cover}>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/945546/3433202-f79c4cc8de2f84ae.png" alt="Scanner" />
                </div>
                <button><div></div></button>
            </div>

            <a href="https://dribbble.com/YancyMin" className={styles['dr-url']} target="_blank" rel="noopener noreferrer">
                <img className={styles.dr} src="https://cdn.dribbble.com/assets/logo-footer-hd-a05db77841b4b27c0bf23ec1378e97c988190dfe7d26e32e1faea7269f9e001b.png" alt="Dribbble" />
            </a>
        </div>
    )
}