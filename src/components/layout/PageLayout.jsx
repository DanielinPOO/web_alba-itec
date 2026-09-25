import Navbar from '../organisms/Navbar'
import Footer from '../organisms/Footer'
import WhatsAppButton from '../organisms/WhatsAppButton'

export default function PageLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
