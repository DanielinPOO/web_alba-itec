import { Routes, Route } from 'react-router-dom'
import PageLayout from './components/layout/PageLayout'
import Hero      from './components/organisms/Hero'
import About     from './components/organisms/About'
import Services  from './components/organisms/Services'
import Gallery   from './components/organisms/Gallery'
import FAQ       from './components/organisms/FAQ'
import Contact   from './components/organisms/Contact'
import ProformasPage from './components/pages/ProformasPage'

function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <FAQ />
      <Contact />
    </PageLayout>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/proformas" element={<ProformasPage />} />
    </Routes>
  )
}
