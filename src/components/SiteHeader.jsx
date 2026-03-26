import { memo } from 'react'
import { motion } from 'framer-motion'

const MENU_ITEMS = [
  { id: 'home', label: 'Accueil' },
  { id: 'destinations', label: 'Destinations' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

function SiteHeader({ activePage, onNavigate, menuOpen, onToggleMenu, onCloseMenu }) {
  return (
    <motion.header
      className="site-header"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <button className="brand" type="button" onClick={() => onNavigate('home')}>
        TimeTravel Agency
      </button>

      <p className="brand-credit">Made by Denis POPESCU</p>

      <button
        type="button"
        className="menu-toggle"
        onClick={onToggleMenu}
        aria-expanded={menuOpen}
        aria-label="Ouvrir le menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Navigation principale">
        {MENU_ITEMS.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`nav-link ${activePage === item.id ? 'active' : ''} ${menuOpen ? 'menu-open' : ''}`}
            onClick={() => {
              onNavigate(item.id)
              onCloseMenu?.()
            }}
            aria-current={activePage === item.id ? 'page' : undefined}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </motion.header>
  )
}

export default memo(SiteHeader)
