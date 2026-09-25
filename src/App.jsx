import Nav from './components/Nav'
import ScrollProgress from './components/ScrollProgress'
import BackgroundFX from './components/BackgroundFX'
import Hero from './components/Hero/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Journey from './components/Journey'
import Certifications from './components/Certifications'
import GithubStats from './components/GithubStats'
import WhyHireMe from './components/WhyHireMe'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-canvas text-text">
      <div className="grain" />
      <BackgroundFX />
      <ScrollProgress />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Certifications />
        <GithubStats />
        <WhyHireMe />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
