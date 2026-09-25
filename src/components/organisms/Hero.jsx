import Button from '../atoms/Button'
import heroImg from '../../assets/hero_masonry.jpg'
import styles from './Hero.module.css'

const STATS = [
  { number: '+10', label: 'Años de experiencia' },
  { number: '+300', label: 'Proyectos terminados' },
  { number: '100%', label: 'Clientes satisfechos' },
]

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.bg} style={{ backgroundImage: `url(${heroImg})` }} aria-hidden="true" />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>
          <span>🏗️</span>
          <span>+10 años de experiencia en Guatemala</span>
        </div>

        <h1 className={styles.title}>
          Construimos tu<span className={styles.accent}> visión </span>con precisión
        </h1>

        <p className={styles.subtitle}>
          Especialistas en albañilería, fundición de pisos, pérgolas e impermeabilización.
          Tu proyecto merece calidad que dura.
        </p>

        <div className={styles.actions}>
          <Button href="#contacto" variant="primary" size="lg" id="hero-cta-primary">Solicitar cotización</Button>
          <Button href="#proyectos" variant="outline" size="lg" id="hero-cta-secondary">Ver proyectos</Button>
        </div>

        <div className={styles.stats}>
          {STATS.map((s, i) => (
            <div key={i} className={styles.stat}>
              <span className={styles.statNumber}>{s.number}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <a href="#nosotros" className={styles.scrollIndicator} aria-label="Siguiente sección">
        <div className={styles.scrollDot} />
      </a>
    </section>
  )
}
