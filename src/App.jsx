import PageLayout from './components/layout/PageLayout'
import Hero      from './components/organisms/Hero'
import About     from './components/organisms/About'
import Services  from './components/organisms/Services'
import Gallery   from './components/organisms/Gallery'
import FAQ       from './components/organisms/FAQ'
import Contact   from './components/organisms/Contact'

export default function App() {
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
