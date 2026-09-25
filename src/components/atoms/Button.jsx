import styles from './Button.module.css'

export default function Button({ children, variant = 'primary', size = 'md', href, onClick, type = 'button', id, disabled, style }) {
  const cls = `${styles.btn} ${styles[variant]} ${styles[size]}`
  if (href) return <a href={href} className={cls} id={id} style={style}>{children}</a>
  return <button type={type} className={cls} onClick={onClick} id={id} disabled={disabled} style={style}>{children}</button>
}
