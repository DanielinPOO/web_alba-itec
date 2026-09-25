import SectionTitle from '../atoms/SectionTitle'
import styles from './About.module.css'

const VALUES = [
  { icon: '🏆', title: 'Excelencia', desc: 'Los mejores materiales y técnicas de la industria.' },
  { icon: '🤝', title: 'Compromiso', desc: 'Cumplimos plazos y presupuestos acordados, siempre.' },
  { icon: '🔒', title: 'Garantía', desc: 'Todos nuestros trabajos tienen respaldo post-obra.' },
]

export default function About() {
  return (
    <section id="nosotros" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.textCol}>
            <SectionTitle
              label="Quiénes somos"
              title="Más de una década construyendo confianza"
              subtitle="Somos albañiles profesionales con sede en Guatemala. Combinamos experiencia artesanal con técnicas modernas para superar expectativas."
              theme="dark" align="left"
            />
            <p className={styles.body}>
              Desde fundaciones hasta acabados, cada proyecto es tratado con la misma dedicación.
              Trabajamos con propietarios, contratistas y empresas que exigen calidad sin concesiones.
            </p>
            <div className={styles.values}>
              {VALUES.map((v, i) => (
                <div key={i} className={styles.value}>
                  <span className={styles.valueIcon}>{v.icon}</span>
                  <div>
                    <strong className={styles.valueTitle}>{v.title}</strong>
                    <p className={styles.valueDesc}>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.highlightCol}>
            <div className={styles.highlightBox}>
              <div className={styles.highlightTop}>
                <span className={styles.bigNum}>10+</span>
                <span className={styles.bigLabel}>Años de<br />experiencia</span>
              </div>
              <div className={styles.divider} />
              <ul className={styles.list}>
                {['Proyectos residenciales y comerciales','Equipo de albañiles certificados','Materiales de primera calidad','Presupuesto sin costo adicional','Garantía en todos los trabajos','Servicio en todo Guatemala'].map((item, i) => (
                  <li key={i}>✓ {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
