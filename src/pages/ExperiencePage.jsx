import { useState } from 'react'
import { motion } from 'framer-motion'

const EXPERIENCES = [
  {
    title: 'Immersion Belle Epoque',
    text: 'Diner prive, soiree mondaine et acces privilegie aux lieux emblematiques de Paris 1889.',
  },
  {
    title: 'Expedition Cretace',
    text: 'Parcours d observation securise en milieu prehistorique, encadre par des guides specialistes.',
  },
  {
    title: 'Atelier Renaissance',
    text: 'Rencontres artistiques et parcours culturels exclusifs au coeur de Florence 1504.',
  },
]

const FAQ_ITEMS = [
  {
    id: 'security',
    question: 'Comment la securite est-elle assuree ?',
    answer: 'Chaque experience est accompagnee par une cellule operationnelle dediee et des protocoles de supervision.',
  },
  {
    id: 'custom',
    question: 'Puis-je personnaliser mon itineraire ?',
    answer: 'Oui, votre conseiller ajuste activites, rythme et niveau de confort selon votre profil.',
  },
  {
    id: 'group',
    question: 'Proposez-vous des voyages en groupe prive ?',
    answer: 'Nous proposons des formats prive, duo et petit groupe premium selon disponibilites.',
  },
]

function ExperiencePage() {
  const [openFaqId, setOpenFaqId] = useState('security')

  return (
    <section className="content-page">
      <motion.div
        className="content-page-header"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <h1>Nos experiences</h1>
        <p>Des voyages concus pour allier spectacle, histoire et confort haut de gamme.</p>
      </motion.div>

      <div className="feature-grid">
        {EXPERIENCES.map((item, index) => (
          <motion.article
            key={item.title}
            className="feature-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
          >
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.article>
        ))}
      </div>

      <motion.section
        className="faq-block"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
      >
        <h2>Questions frequentes</h2>
        <div className="faq-list">
          {FAQ_ITEMS.map((item) => {
            const isOpen = item.id === openFaqId
            return (
              <article key={item.id} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpenFaqId(isOpen ? '' : item.id)}
                >
                  <span>{item.question}</span>
                  <span>{isOpen ? '-' : '+'}</span>
                </button>
                {isOpen ? <p className="faq-answer">{item.answer}</p> : null}
              </article>
            )
          })}
        </div>
      </motion.section>
    </section>
  )
}

export default ExperiencePage
