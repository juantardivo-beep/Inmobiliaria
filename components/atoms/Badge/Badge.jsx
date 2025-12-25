import styles from "./badge.module.scss"

export default function Badge({ children, className = "" }) {
  return <span className={`${styles.badge__exclusive} ${className}`}>{children}</span>
}
