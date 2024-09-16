'use client'

import { HeroSectionComponent } from './app-components-hero-section'
import { EventShowcaseComponent } from './app-components-event-showcase'
import { KeyFeaturesComponent } from './app-components-key-features'
import { MerchandiseSectionComponent } from './app-components-merchandise-section'
import { TestimonialSectionComponent } from './app-components-testimonial-section'
import { SponsorShowcaseComponent } from './app-components-sponsor-showcase'
import { FooterComponent } from './app-components-footer'

export function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 transition-colors duration-500">
      <HeroSectionComponent />
      <EventShowcaseComponent />
      <KeyFeaturesComponent />
      <MerchandiseSectionComponent />
      <TestimonialSectionComponent />
      <SponsorShowcaseComponent />
      <FooterComponent />
    </main>
  )
}