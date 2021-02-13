import styles from '@/styles/Button.module.css'

export default function Button ({ children, disabled, onClick }) {
  return (
    <button className={styles.button} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
