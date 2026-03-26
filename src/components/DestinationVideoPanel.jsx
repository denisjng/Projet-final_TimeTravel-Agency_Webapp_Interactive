import { useState } from 'react'
import { motion } from 'framer-motion'

function DestinationVideoPanel({ title, subtitle, videoUrl }) {
  const [muted, setMuted] = useState(true)

  return (
    <motion.section
      className="video-panel"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <div className="video-panel-header">
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <button type="button" className="ghost-btn" onClick={() => setMuted((prev) => !prev)}>
          {muted ? 'Activer le son' : 'Couper le son'}
        </button>
      </div>

      {videoUrl ? (
        <video
          key={videoUrl}
          className="destination-video"
          src={videoUrl}
          controls
          muted={muted}
          playsInline
          loop
          preload="metadata"
        />
      ) : (
        <p className="video-empty">Aucune video disponible pour cette destination.</p>
      )}
    </motion.section>
  )
}

export default DestinationVideoPanel
