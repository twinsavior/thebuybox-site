import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Marketplaces from './components/Marketplaces'
import Features from './components/Features'
import FlipAlert from './components/FlipAlert'
import BrickDynasty from './components/BrickDynasty'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Coaching from './components/Coaching'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-void">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Marketplaces />
      <Features />
      <FlipAlert />
      <BrickDynasty />
      <Testimonials />
      <Pricing />
      <Coaching />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
