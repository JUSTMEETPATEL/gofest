'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const events = [
  { id: 1, title: 'Music Concert', description: 'Live performances by top artists', date: '2023-08-15', venue: 'Main Stage' },
  { id: 2, title: 'Dance Competition', description: 'Show off your moves', date: '2023-08-16', venue: 'Dance Arena' },
  { id: 3, title: 'Tech Workshop', description: 'Learn the latest technologies', date: '2023-08-17', venue: 'Tech Hub' },
  { id: 4, title: 'Art Exhibition', description: 'Showcase your creativity', date: '2023-08-18', venue: 'Art Gallery' },
]

export function EventShowcaseComponent() {
  const [hoveredEvent, setHoveredEvent] = useState(null)

  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Event Showcase</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event) => (
            <motion.div
              key={event.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:-translate-y-2"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredEvent(event.id)}
              onHoverEnd={() => setHoveredEvent(null)}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {event.date} | {event.venue}
                </p>
                {hoveredEvent === event.id && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                  >
                    Register Now
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}