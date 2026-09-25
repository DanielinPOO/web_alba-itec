import SectionTitle from '../atoms/SectionTitle'
import FAQItem from '../molecules/FAQItem'
import styles from './FAQ.module.css'

const FAQS = [
  { question: '¿Cómo solicito una cotización?', answer: 'A través del formulario de contacto o directamente por WhatsApp. Respondemos en menos de 24 horas con un presupuesto detallado sin costo.', defaultOpen: true },
  { question: '¿Cuánto tarda un proyecto típico?', answer: 'Un piso de 50m² se completa en 2-3 días. Una pérgola estándar toma 3-5 días. Al cotizar siempre damos un cronograma estimado.' },
  { question: '¿Trabajan en toda Guatemala?', answer: 'De momento solo trabajamos en San José Pinula y Fraijanes, no contamos con albañiles en áreas diferentes.' },
  { question: '¿Qué garantía tienen los trabajos?', answer: 'Todos los proyectos tienen garantía de mano de obra. Si hay algún problema relacionado con nuestra ejecución dentro del período, lo resolvemos sin costo.' },
  { question: '¿Los materiales están incluidos en el precio?', answer: 'Ofrecemos dos modalidades: solo mano de obra o precio todo incluido. Lo especificamos claramente en cada cotización.' },
  { question: '¿Puedo ver trabajos anteriores antes de contratar?', answer: 'Por supuesto. Revisa nuestra galería o solicita referencias de clientes anteriores. La transparencia es uno de nuestros valores.' },
]

export default function FAQ() {
  return (
    <section id="faq" className={`section ${styles.faq}`}>
      <div className="container">
        <SectionTitle label="Preguntas frecuentes" title="Resolvemos tus dudas" subtitle="Todo lo que necesitas saber antes de empezar tu proyecto." theme="dark" align="center" />
        <div className={styles.list}>
          {FAQS.map((faq, i) => <FAQItem key={i} {...faq} />)}
        </div>
      </div>
    </section>
  )
}
