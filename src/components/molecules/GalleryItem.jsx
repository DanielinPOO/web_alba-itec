import styles from './GalleryItem.module.css'

export default function GalleryItem({ src, alt, category }) {
  return (
    <div className={styles.item}>
      <img src={src} alt={alt} loading="lazy" />
      <div className={styles.overlay}>
        <span className={styles.category}>{category}</span>
        <p className={styles.title}>{alt}</p>
      </div>
    </div>
  )
}
