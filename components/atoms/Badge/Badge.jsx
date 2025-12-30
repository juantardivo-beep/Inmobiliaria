import styles from "./badge.module.scss"

export default function Badge({ children, type }) {
  return <span className={`${styles.badge__exclusive} ${type === 'primary' ? styles.primary : styles.secondary}`}>{children}</span>
}
