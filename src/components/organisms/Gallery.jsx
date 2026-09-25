import SectionTitle from '../atoms/SectionTitle'
import GalleryItem from '../molecules/GalleryItem'
import styles from './Gallery.module.css'

// ── Imágenes disponibles ─────────────────────────────────────────────────────
// Para agregar imágenes reales: copia los .jpg a src/assets/ con estos nombres:
//   gallery_wall.jpg   → Levantamiento de muros
//   gallery_repair.jpg → Reparaciones exteriores
// ────────────────────────────────────────────────────────────────────────────
import imgFloor      from '../../assets/gallery_floor.jpg'
import imgPergola    from '../../assets/gallery_pergola.jpg'
import imgWaterproof from '../../assets/gallery_waterproof.jpg'

const PROJECTS = [
  {
    src: imgFloor,
    alt: 'Fundición de patio exterior residencial',
    category: 'Fundición',
    placeholder: false,
  },
  {
    src: imgPergola,
    alt: 'Construcción de pérgola de madera',
    category: 'Pérgolas',
    placeholder: false,
  },
  {
    src: imgWaterproof,
    alt: 'Impermeabilización de terraza plana',
    category: 'Impermeabilización',
    placeholder: false,
  },
  {
    src: null,
    alt: 'Levantamiento de muro de ladrillo',
    category: 'Muros',
    placeholder: true,
    gradient: 'linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 60%, #111 100%)',
  },
  {
    src: null,
    alt: 'Reparación y acabados de fachada exterior',
    category: 'Reparaciones',
    placeholder: true,
    gradient: 'linear-gradient(135deg, #151515 0%, #242424 60%, #0d0d0d 100%)',
  },
]

export default function Gallery() {
  return (
    <section id="proyectos" className={`section ${styles.gallery}`}>
      <div className="container">
        <SectionTitle
          label="Portafolio"
          title="Proyectos que hablan por sí solos"
          subtitle="Una muestra de nuestro trabajo. Cada proyecto refleja el estándar de calidad que nos distingue."
          theme="dark"
          align="center"
        />

        <div className={styles.grid}>
          {PROJECTS.map((project, i) =>
            project.placeholder ? (
              <div
                key={i}
                className={styles.placeholderItem}
                style={{ background: project.gradient }}
              >
                <div className={styles.placeholderOverlay}>
                  <span className={styles.placeholderCategory}>{project.category}</span>
                  <p className={styles.placeholderAlt}>{project.alt}</p>
                  <span className={styles.placeholderHint}>📷 Próximamente</span>
                </div>
              </div>
            ) : (
              <GalleryItem
                key={i}
                src={project.src}
                alt={project.alt}
                category={project.category}
              />
            )
          )}
        </div>
      </div>
    </section>
  )
}
