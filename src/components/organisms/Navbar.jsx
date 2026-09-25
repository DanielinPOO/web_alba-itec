import { useState } from 'react'
import { useScrolled } from '../../hooks/useScrolled'
import Button from '../atoms/Button'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { href: '#inicio',    label: 'Inicio' },
  { href: '#nosotros',  label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#faq',       label: 'FAQ' },
  { href: '#contacto',  label: 'Contacto' },
]

export default function Navbar() {
  const scrolled = useScrolled()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} id="navbar">
      <div className={`container ${styles.inner}`}>
        <a href="#inicio" className={styles.logo} id="nav-logo">
          <span className={styles.logoMark}>A</span>
          <span className={styles.logoText}>Albañi<span className={styles.accent}>tec</span></span>
        </a>

        <nav className={styles.nav} aria-label="Navegación principal">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} className={styles.navLink} id={`nav-${l.label.toLowerCase()}`}>{l.label}</a>
          ))}
        </nav>

        <div className={styles.cta}>
          <Button href="#contacto" variant="primary" size="sm" id="nav-cta-btn">Cotizar</Button>
        </div>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          id="nav-hamburger"
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        {NAV_LINKS.map(l => (
          <a key={l.href} href={l.href} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
        <Button href="#contacto" variant="primary" size="md" id="nav-mobile-cta">Cotizar ahora</Button>
      </div>
    </header>
  )
}
