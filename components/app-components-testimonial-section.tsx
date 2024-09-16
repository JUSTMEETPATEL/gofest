'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

export function TestimonialSectionComponent() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Festival Highlights</h2>
        <div className="relative max-w-3xl mx-auto">
          <video
            ref={videoRef}
            className="w-full rounded-lg shadow-lg"
            src="/festival-highlights.mp4"
            poster="/festival-poster.jpg"
          />
          <motion.button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className={`w-20 h-20 text-white ${isPlaying ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              {isPlaying ? (
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              )}
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  )
}