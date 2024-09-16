'use client'

import { motion } from 'framer-motion'
import { Player } from '@lottiefiles/react-lottie-player'

export function FooterComponent() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">FestiFun 2023</h3>
            <p className="mb-4">Join us for the most exciting college festival of the year!</p>
            <div className="flex space-x-4">
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-white hover:text-purple-400">
                <i className="fab fa-facebook-f"></i>
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-white hover:text-purple-400">
                <i className="fab fa-twitter"></i>
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-white hover:text-purple-400">
                <i className="fab fa-instagram"></i>
              </motion.a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Events</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Merchandise</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Player
            autoplay
            loop
            src="/lottie/festival-footer.json"
            style={{ height: '100px', width: '100px', margin: '0 auto' }}
          />
          <p className="mt-4">&copy; 2023 FestiFun. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}