import { motion } from 'framer-motion'

const SIGNATURE_OFFERS = [
  {
    title: 'Soiree Belle Epoque',
    text: 'Ambiance salons parisiens, experiences culturelles et elegance intemporelle.',
  },
  {
    title: 'Safari prehistorique',
    text: 'Observation guidee et immersion terrain avec protocole securise.',
  },
  {
    title: 'Renaissance privee',
    text: 'Acces exclusif a des ateliers, concerts et parcours artistiques selectifs.',
  },
]

function HomePage({ onNavigate }) {
  return (
    <section className="hero-page">
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="hero-kicker">Voyage temporel sur mesure</p>
        <h1 className="hero-title">Vivez une aventure historique inoubliable</h1>
        <p className="hero-subtitle">
          Explorez Paris en 1889, le Cretace sauvage ou la Florence de la Renaissance
          avec des itineraires exclusifs et une equipe d experts.
        </p>

        <div className="hero-stats">
          <span>3 epoques iconiques</span>
          <span>Encadrement premium</span>
          <span>Experiences personnalisees</span>
        </div>

        <div className="hero-actions">
          <button type="button" className="primary-btn" onClick={() => onNavigate('destinations')}>
            Voir les destinations
          </button>
          <button type="button" className="ghost-btn" onClick={() => onNavigate('contact')}>
            Planifier mon voyage
          </button>
        </div>
      </motion.div>

      <motion.section
        className="home-signature"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <div className="content-page-header">
          <h2>Selection Signature</h2>
          <p>Trois formats concus pour une immersion complete et elegante.</p>
        </div>

        <div className="feature-grid">
          {SIGNATURE_OFFERS.map((offer, index) => (
            <motion.article
              key={offer.title}
              className="feature-card"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <h3>{offer.title}</h3>
              <p>{offer.text}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>
    </section>
  )
}

export default HomePage
