import { useRef, useState } from 'react'
import SectionTitle from '../atoms/SectionTitle'
import Button from '../atoms/Button'
import styles from './Contact.module.css'

const SERVICE_OPTIONS = [
  { value: '', label: 'Selecciona un servicio' },
  { value: 'fundicion', label: 'Fundición de Pisos y Patios' },
  { value: 'pergolas', label: 'Construcción de Pérgolas' },
  { value: 'impermeabilizacion', label: 'Impermeabilización' },
  { value: 'reparaciones', label: 'Reparaciones en Exteriores' },
  { value: 'muros', label: 'Levantamiento de Muros' },
  { value: 'acabados', label: 'Acabados Finos' },
  { value: 'otro', label: 'Otro servicio' },
]

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ nombre: '', correo: '', telefono: '', servicio: '', mensaje: '' })

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const response = await fetch("https://formsubmit.co/ajax/danielminchez@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(form)
      })
      if (!response.ok) throw new Error('Network response failed')
      setStatus('success')
      setForm({ nombre: '', correo: '', telefono: '', servicio: '', mensaje: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className={`section ${styles.contact}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.infoCol}>
            <SectionTitle label="Contacto" title="Hablemos de tu proyecto" subtitle="Completa el formulario o escríbenos por WhatsApp. Respondemos en menos de 24 horas." theme="dark" align="left" />
            <div className={styles.items}>
              {[
                { icon: '📍', label: 'Ubicación', val: 'Ciudad de Guatemala, Guatemala' },
                { icon: '📞', label: 'Teléfono / WhatsApp', val: '+502 3520 7760' },
                { icon: '🕐', label: 'Horario de atención', val: 'Lunes a Sábado · 7:00am – 6:00pm' },
              ].map((item, i) => (
                <div key={i} className={styles.item}>
                  <span className={styles.itemIcon}>{item.icon}</span>
                  <div><strong>{item.label}</strong><p>{item.val}</p></div>
                </div>
              ))}
            </div>
            <a href="https://wa.me/50235207760?text=Hola%2C%20me%20interesa%20cotizar%20un%20servicio" target="_blank" rel="noopener noreferrer" className={styles.waBtn} id="contact-whatsapp-link">
              <span>💬</span> Escribir por WhatsApp ahora
            </a>
          </div>

          <div className={styles.formCol}>
            <form ref={formRef} onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="nombre" className={styles.label}>Nombre completo *</label>
                  <input id="nombre" name="nombre" type="text" className={styles.input} placeholder="Tu nombre" value={form.nombre} onChange={handleChange} required />
                </div>
                <div className={styles.field}>
                  <label htmlFor="correo" className={styles.label}>Correo electrónico *</label>
                  <input id="correo" name="correo" type="email" className={styles.input} placeholder="tu@correo.com" value={form.correo} onChange={handleChange} required />
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="telefono" className={styles.label}>Teléfono</label>
                  <input id="telefono" name="telefono" type="tel" className={styles.input} placeholder="+502 0000 0000" value={form.telefono} onChange={handleChange} />
                </div>
                <div className={styles.field}>
                  <label htmlFor="servicio" className={styles.label}>Tipo de servicio *</label>
                  <select id="servicio" name="servicio" className={`${styles.input} ${styles.select}`} value={form.servicio} onChange={handleChange} required>
                    {SERVICE_OPTIONS.map(o => <option key={o.value} value={o.value} disabled={o.value === ''}>{o.label}</option>)}
                  </select>
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="mensaje" className={styles.label}>Mensaje</label>
                <textarea id="mensaje" name="mensaje" className={`${styles.input} ${styles.textarea}`} placeholder="Describe tu proyecto…" rows={4} value={form.mensaje} onChange={handleChange} />
              </div>
              <Button type="submit" variant="primary" size="lg" id="contact-submit-btn" disabled={status === 'sending'} style={{ width: '100%', justifyContent: 'center' }}>
                {status === 'sending' ? 'Enviando…' : 'Enviar solicitud'}
              </Button>
              {status === 'success' && <p className={styles.success}>✅ ¡Mensaje enviado! Te contactaremos pronto.</p>}
              {status === 'error' && <p className={styles.error}>❌ Error al enviar. Intenta por WhatsApp.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
