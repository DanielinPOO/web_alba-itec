import SectionTitle from '../atoms/SectionTitle'
import ServiceCard from '../molecules/ServiceCard'
import styles from './Services.module.css'

const SERVICES = [
  { icon: '🏗️', title: 'Fundición de Pisos y Patios', description: 'Losas de concreto de alta resistencia para interiores y exteriores. Técnica correcta de mezcla, vibrado y nivelado garantizado.' },
  { icon: '🌿', title: 'Construcción de Pérgolas', description: 'Estructuras de madera o metal para espacios al aire libre con estilo. Diseños personalizados según tu espacio.' },
  { icon: '💧', title: 'Impermeabilización', description: 'Membranas y productos impermeabilizantes para proteger techos, terrazas y muros de la humedad.' },
  { icon: '🔧', title: 'Reparaciones en Exteriores', description: 'Reparación de grietas, filtraciones, repello y acabados en fachadas y exteriores.' },
  { icon: '🧱', title: 'Levantamiento de Muros', description: 'Construcción de muros de block, ladrillo o tabicón. Trabajo preciso y nivelado para solidez estructural.' },
  { icon: '✨', title: 'Acabados Finos', description: 'Cernidos, repellos, emporados y pinturas en interiores y exteriores. El toque final que hace la diferencia.' },
]

export default function Services() {
  return (
    <section id="servicios" className={`section ${styles.services}`}>
      <div className="container">
        <SectionTitle label="Nuestros servicios" title="Lo que hacemos mejor" subtitle="Cada servicio respaldado por años de experiencia y compromiso de calidad." theme="dark" align="center" />
        <div className={styles.grid}>
          {SERVICES.map((s, i) => <ServiceCard key={i} {...s} />)}
        </div>
      </div>
    </section>
  )
}
