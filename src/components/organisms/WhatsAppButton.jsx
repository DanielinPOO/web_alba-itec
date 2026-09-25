import styles from './WhatsAppButton.module.css'

const WA_URL = 'https://wa.me/50235207760?text=Hola%2C%20me%20interesa%20cotizar%20un%20servicio%20de%20alba%C3%B1iler%C3%ADa'

export default function WhatsAppButton() {
  return (
    <a href={WA_URL} target="_blank" rel="noopener noreferrer" className={styles.btn} aria-label="Chatear por WhatsApp" id="whatsapp-floating-btn">
      <svg className={styles.icon} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M16 2C8.268 2 2 8.268 2 16c0 2.4.627 4.653 1.727 6.607L2 30l7.607-1.72A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z" fill="#25D366"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M22.003 19.337c-.296-.148-1.754-.866-2.027-.964-.272-.098-.47-.148-.668.148-.198.296-.768.964-.941 1.163-.174.198-.347.222-.643.074-1.754-.877-2.905-1.566-4.06-3.552-.306-.527.306-.49.875-1.63.098-.198.049-.37-.025-.518-.074-.148-.668-1.61-.914-2.203-.24-.578-.486-.499-.668-.508a12.04 12.04 0 00-.57-.01c-.198 0-.518.074-.79.37-.271.296-1.04 1.016-1.04 2.476 0 1.46 1.065 2.87 1.213 3.069.148.198 2.087 3.19 5.064 4.476.708.305 1.26.487 1.69.624.71.226 1.356.194 1.867.118.57-.085 1.754-.717 2.002-1.41.247-.692.247-1.285.173-1.41-.074-.122-.272-.197-.568-.345z" fill="#fff"/>
      </svg>
      <span className={styles.tooltip}>¡Escríbenos!</span>
      <span className={styles.pulse} aria-hidden="true" />
    </a>
  )
}
