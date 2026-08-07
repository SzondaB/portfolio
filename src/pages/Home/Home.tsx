import styles from './Home.module.css'

import AboutSection from './AboutSection'
import ProjectsPreviewSection from './ProjectsPreviewSection'
import CertificatesPreviewSection from './CertificatesPreviewSection'
import ContactSection from './ContactSection'

function Home() {
  return (
    <main className={styles.home}>
      <AboutSection />
      <ProjectsPreviewSection />
      <CertificatesPreviewSection />
      <ContactSection />
    </main>
  )
}

export default Home