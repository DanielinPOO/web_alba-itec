import styles from './Footer.module.css'

const LINKS = [
  { href: '#inicio', label: 'Inicio' }, { href: '#nosotros', label: 'Quiénes Somos' },
  { href: '#servicios', label: 'Servicios' }, { href: '#proyectos', label: 'Proyectos' },
  { href: '#faq', label: 'FAQ' }, { href: '#contacto', label: 'Contacto' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer} id="footer">
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#inicio" className={styles.logo}>Albañi<span className={styles.accent}>tec</span></a>
            <p className={styles.tagline}>Construimos con precisión, entregamos con orgullo.</p>
            <div className={styles.social}>
              {[
                { href: 'https://wa.me/50235207760', label: 'WhatsApp', icon: '💬', id: 'footer-whatsapp' },
                { href: 'https://facebook.com', label: 'Facebook', icon: '📘', id: 'footer-facebook' },
                { href: 'https://instagram.com', label: 'Instagram', icon: '📸', id: 'footer-instagram' },
              ].map(s => (
                <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label={s.label} id={s.id}>{s.icon}</a>
              ))}
            </div>
          </div>

          <nav className={styles.nav} aria-label="Footer navigation">
            <strong className={styles.navTitle}>Navegación</strong>
            {LINKS.map(l => <a key={l.href} href={l.href} className={styles.navLink}>{l.label}</a>)}
          </nav>

          <div className={styles.info}>
            <strong className={styles.navTitle}>Contacto</strong>
            <p>📍 Ciudad de Guatemala, GT</p>
            <a href="tel:+50235207760">📞 +502 3520 7760</a>
            <p>🕐 Lun – Sáb: 7am – 6pm</p>
            <a href="https://wa.me/50235207760?text=Hola%2C%20me%20interesa%20cotizar%20un%20servicio" target="_blank" rel="noopener noreferrer" className={styles.waLink} id="footer-wa-link">
              Cotizar por WhatsApp →
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {year} Albañitec. Todos los derechos reservados.</p>
          <p>Hecho con 🏗️ en Guatemala</p>
        </div>
      </div>
    </footer>
  )
}
