'use client'

import { motion } from 'framer-motion'
import { Player } from '@lottiefiles/react-lottie-player'

const features = [
  { id: 1, title: 'Online Registration', icon: '/lottie/registration.json' },
  { id: 2, title: 'Merchandise Store', icon: '/lottie/store.json' },
  { id: 3, title: 'Secure Payments', icon: '/lottie/payment.json' },
]

export function KeyFeaturesComponent() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Player
                autoplay
                loop
                src={feature.icon}
                style={{ height: '150px', width: '150px' }}
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-white">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}