import SectionTitle from '../atoms/SectionTitle'
import GalleryItem from '../molecules/GalleryItem'
import styles from './Gallery.module.css'

// Cargar todas las imágenes webp dinámicamente
const imagesGlob = import.meta.glob('../../assets/webp/*/*/*.webp', { eager: true })

const projectsMap = {}
for (const path in imagesGlob) {
  const parts = path.split('/')
  // ../../assets/webp/[mason]/[projectFolder]/[imageName].webp
  const projectFolderName = parts[parts.length - 2]
  const src = imagesGlob[path].default || imagesGlob[path]
  
  if (!projectsMap[projectFolderName]) {
    projectsMap[projectFolderName] = {
      id: projectFolderName,
      images: [],
      // Títulos y categorías por defecto
      category: projectFolderName.charAt(0).toUpperCase() + projectFolderName.slice(1).replace(/([A-Z])/g, ' $1').trim(),
      alt: `Proyecto de ${projectFolderName}`,
      placeholder: false,
    }
  }
  projectsMap[projectFolderName].images.push(src)
}

// Metadatos personalizados para las carpetas conocidas
const PROJECT_METADATA = {
  piso: { alt: 'Fundición y colocación de piso residencial', category: 'Fundición' },
  pergola: { alt: 'Construcción de pérgola de madera o metal y fundición de piso exterior', category: 'Pérgolas' },
  acabadoPared: { alt: 'Acabados y levantamiento de pared', category: 'Acabados' }
}

const dynamicProjects = Object.values(projectsMap).map(proj => {
  if (PROJECT_METADATA[proj.id]) {
    proj.alt = PROJECT_METADATA[proj.id].alt
    proj.category = PROJECT_METADATA[proj.id].category
  }
  return proj
})

const placeholders = [
  {
    images: [],
    alt: 'Próximos proyectos de construcción',
    category: 'Próximamente',
    placeholder: true,
    gradient: 'linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 60%, #111 100%)',
  },
  {
    images: [],
    alt: 'Nuevos acabados y remodelaciones',
    category: 'Próximamente',
    placeholder: true,
    gradient: 'linear-gradient(135deg, #151515 0%, #242424 60%, #0d0d0d 100%)',
  }
]

const PROJECTS = [...dynamicProjects, ...placeholders]

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
                images={project.images}
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
