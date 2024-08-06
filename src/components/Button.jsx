import styles from '../styles/Components/Button.module.css';

export default function Button({ data }) {
    return (
        <button className={styles.angledGradientButton}>{data}</button>
    );
}
