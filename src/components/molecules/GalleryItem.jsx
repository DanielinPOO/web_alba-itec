import { useState, useEffect } from 'react'
import styles from './GalleryItem.module.css'

export default function GalleryItem({ images, alt, category }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!images || images.length <= 1) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images])

  return (
    <div className={styles.item}>
      {images && images.map((src, idx) => (
        <img 
          key={idx}
          src={src} 
          alt={`${alt} - ${idx + 1}`} 
          loading="lazy" 
          className={idx === currentIndex ? styles.active : styles.inactive}
        />
      ))}
      <div className={styles.overlay}>
        <span className={styles.category}>{category}</span>
        <p className={styles.title}>{alt}</p>
      </div>
    </div>
  )
}
