import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import DestinationGallery from '../components/DestinationGallery'
import DestinationVideoPanel from '../components/DestinationVideoPanel'
import { DESTINATIONS } from '../data/destinations'
import { getVideoUrl } from '../constants/assets'

function DestinationsPage({ selectedDestinationId, setSelectedDestinationId }) {
  const [activeTag, setActiveTag] = useState('Tous')
  const [sortMode, setSortMode] = useState('featured')

  const allTags = useMemo(() => {
    const tags = new Set()
    DESTINATIONS.forEach((destination) => destination.tags.forEach((tag) => tags.add(tag)))
    return ['Tous', ...Array.from(tags)]
  }, [])

  const filteredDestinations = useMemo(() => {
    const byTag =
      activeTag === 'Tous'
        ? DESTINATIONS
        : DESTINATIONS.filter((destination) => destination.tags.includes(activeTag))

    const sorted = [...byTag]

    if (sortMode === 'price-asc') {
      sorted.sort((a, b) => a.price.min - b.price.min)
    }

    if (sortMode === 'price-desc') {
      sorted.sort((a, b) => b.price.min - a.price.min)
    }

    if (sortMode === 'duration') {
      sorted.sort((a, b) => a.recommendedDays[0] - b.recommendedDays[0])
    }

    return sorted
  }, [activeTag, sortMode])

  const selectedDestination = useMemo(
    () => DESTINATIONS.find((d) => d.id === selectedDestinationId),
    [selectedDestinationId]
  )

  const selectedVideoUrl = useMemo(
    () => getVideoUrl(selectedDestinationId),
    [selectedDestinationId]
  )

  return (
    <>
      <motion.section
        className="content-page destinations-toolbar"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="content-page-header">
          <h1>Destinations</h1>
          <p>Affinez votre selection selon vos envies et votre style de voyage.</p>
        </div>

        <div className="toolbar-controls">
          <div className="chip-group">
            {allTags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`filter-chip ${activeTag === tag ? 'active' : ''}`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          <label className="sort-control">
            Trier par
            <select value={sortMode} onChange={(event) => setSortMode(event.target.value)}>
              <option value="featured">Selection</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix decroissant</option>
              <option value="duration">Duree la plus courte</option>
            </select>
          </label>
        </div>
      </motion.section>

      <DestinationGallery
        destinations={filteredDestinations}
        onDestinationSelect={setSelectedDestinationId}
        selectedDestinationId={selectedDestinationId}
      />

      <DestinationVideoPanel
        title="Apercu video de destination"
        subtitle={
          selectedDestination
            ? `Video de ${selectedDestination.name}`
            : 'Selectionnez une destination pour voir sa video'
        }
        videoUrl={selectedVideoUrl}
      />

      <motion.section
        className="selection-panel"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <h2>Destination selectionnee</h2>
        <p>
          {selectedDestination
            ? `${selectedDestination.name} (${selectedDestination.year}) a partir de ${selectedDestination.price.min} EUR. ${selectedDestination.spotlight}`
            : 'Selectionnez une destination.'}
        </p>
      </motion.section>
    </>
  )
}

export default DestinationsPage
