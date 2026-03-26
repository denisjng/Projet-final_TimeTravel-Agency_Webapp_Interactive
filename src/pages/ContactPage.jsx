import { useState } from 'react'
import { motion } from 'framer-motion'

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    destination: 'paris-1889',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const validate = () => {
    const nextErrors = {}

    if (formData.fullName.trim().length < 2) {
      nextErrors.fullName = 'Entrez un nom valide.'
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      nextErrors.email = 'Entrez un email valide.'
    }

    if (formData.message.trim().length < 12) {
      nextErrors.message = 'Votre message doit contenir au moins 12 caracteres.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const onFieldChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (!validate()) return

    setStatus('success')
    setFormData({
      fullName: '',
      email: '',
      destination: 'paris-1889',
      message: '',
    })
    setErrors({})
  }

  return (
    <section className="content-page">
      <motion.div
        className="content-page-header"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <h1>Contact & reservation</h1>
        <p>Partagez vos envies et recevez une proposition personnalisee.</p>
      </motion.div>

      <motion.form
        className="contact-form"
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <label>
          Nom complet
          <input
            type="text"
            name="fullName"
            placeholder="Votre nom"
            value={formData.fullName}
            onChange={onFieldChange}
          />
          {errors.fullName ? <span className="field-error">{errors.fullName}</span> : null}
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="vous@email.com"
            value={formData.email}
            onChange={onFieldChange}
          />
          {errors.email ? <span className="field-error">{errors.email}</span> : null}
        </label>

        <label>
          Destination souhaitee
          <select name="destination" value={formData.destination} onChange={onFieldChange}>
            <option value="paris-1889">Paris 1889</option>
            <option value="cretaceous">Cretace</option>
            <option value="florence-1504">Florence 1504</option>
          </select>
        </label>

        <label>
          Votre message
          <textarea
            rows="5"
            name="message"
            placeholder="Decrivez vos attentes, dates et budget."
            value={formData.message}
            onChange={onFieldChange}
          ></textarea>
          {errors.message ? <span className="field-error">{errors.message}</span> : null}
        </label>

        <button type="submit" className="primary-btn">Envoyer la demande</button>

        {status === 'success' ? (
          <p className="form-success">Demande envoyee. Notre equipe vous contacte sous 24h.</p>
        ) : null}
      </motion.form>
    </section>
  )
}

export default ContactPage
