'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

const sponsors = [
  { id: 1, name: 'Sponsor 1', logo: '/sponsors/sponsor1.png' },
  { id: 2, name: 'Sponsor 2', logo: '/sponsors/sponsor2.png' },
  { id: 3,

 name: 'Sponsor 3', logo: '/sponsors/sponsor3.png' },
  { id: 4, name: 'Sponsor 4', logo: '/sponsors/sponsor4.png' },
  { id: 5, name: 'Sponsor 5', logo: '/sponsors/sponsor5.png' },
  { id: 6, name: 'Sponsor 6', logo: '/sponsors/sponsor6.png' },
]

export function SponsorShowcaseComponent() {
  const marqueeRef = useRef(null)

  useEffect(() => {
    const marquee = marqueeRef.current
    const marqueeInner = marquee.querySelector('.marquee-inner')
    const marqueeContent = marqueeInner.querySelector('.marquee-content')

    const clone = marqueeContent.cloneNode(true)
    marqueeInner.appendChild(clone)

    gsap.to(marqueeInner, {
      x: '-50%',
      repeat: -1,
      duration: 20,
      ease: 'linear',
    })
  }, [])

  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Our Sponsors</h2>
        <div ref={marqueeRef} className="overflow-hidden">
          <div className="marquee-inner whitespace-nowrap">
            <div className="marquee-content inline-block">
              {sponsors.map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="inline-block mx-8 transition-transform duration-300 hover:scale-110"
                >
                  <img src={sponsor.logo} alt={sponsor.name} className="h-16 w-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}