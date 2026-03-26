import { Suspense, lazy, useCallback, useEffect, useMemo, useState } from 'react'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import ChatbotWidget from './components/ChatbotWidget'
import './styles/app.css'

const HomePage = lazy(() => import('./pages/HomePage'))
const DestinationsPage = lazy(() => import('./pages/DestinationsPage'))
const ExperiencePage = lazy(() => import('./pages/ExperiencePage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

const PAGE_IDS = ['home', 'destinations', 'experience', 'contact']

const getPageFromHash = () => {
  if (typeof window === 'undefined') return 'home'
  const raw = window.location.hash.replace('#', '').trim()
  return PAGE_IDS.includes(raw) ? raw : 'home'
}

function App() {
  const [activePage, setActivePage] = useState(getPageFromHash)
  const [selectedDestinationId, setSelectedDestinationId] = useState('paris-1889')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onHashChange = () => setActivePage(getPageFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const handleNavigate = useCallback((pageId) => {
    if (!PAGE_IDS.includes(pageId)) return
    window.location.hash = pageId
    setActivePage(pageId)
    setMenuOpen(false)
  }, [])

  const pageContent = useMemo(() => {
    if (activePage === 'destinations') {
      return (
        <DestinationsPage
          selectedDestinationId={selectedDestinationId}
          setSelectedDestinationId={setSelectedDestinationId}
        />
      )
    }

    if (activePage === 'experience') {
      return <ExperiencePage />
    }

    if (activePage === 'contact') {
      return <ContactPage />
    }

    return <HomePage onNavigate={handleNavigate} />
  }, [activePage, handleNavigate, selectedDestinationId])

  return (
    <div className="app-shell">
      <SiteHeader
        activePage={activePage}
        onNavigate={handleNavigate}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((prev) => !prev)}
        onCloseMenu={() => setMenuOpen(false)}
      />

      <main className="main-content">
        <Suspense fallback={<div className="page-loader">Chargement...</div>}>
          {pageContent}
        </Suspense>
      </main>

      <ChatbotWidget
        onApplyRecommendation={(destinationId) => {
          setSelectedDestinationId(destinationId)
          handleNavigate('destinations')
        }}
      />

      <SiteFooter />
    </div>
  )
}

export default App
