import styles from './Home.module.css'

import NeuralBackground
  from '../../components/background/NeuralBackground'

import AboutSection
  from './AboutSection'

import ProjectsPreviewSection
  from './ProjectsPreviewSection'

import CertificatesPreviewSection
  from './CertificatesPreviewSection'

import ContactSection
  from './ContactSection'

import useActiveSection
  from '../../hooks/useActiveSection'

function Home() {
  const activeSection =
    useActiveSection()

  return (
    <main className={styles.home}>
      <NeuralBackground
        section={activeSection}
      />

      <div className={styles.content}>
        <AboutSection />

        <ProjectsPreviewSection />

        <CertificatesPreviewSection />

        <ContactSection />
      </div>
    </main>
  )
}

export default Home