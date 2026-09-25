import styles from './ServiceCard.module.css'

export default function ServiceCard({ icon, title, description }) {
  return (
    <article className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.border} />
    </article>
  )
}
