'use client'

import { HeroSectionComponent } from './app-components-hero-section'
import { KeyFeaturesComponent } from './app-components-key-features'
import { MerchandiseSectionComponent } from './app-components-merchandise-section'
import { FooterComponent } from './app-components-footer'
import { EventShowcaseComponent } from './app-components-event-showcase'

export function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 transition-colors duration-500">
      <HeroSectionComponent />
      <EventShowcaseComponent />
      <KeyFeaturesComponent />
      <MerchandiseSectionComponent />
      <FooterComponent />
    </main>
  )
}