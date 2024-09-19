'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function SimpleNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-#0a0a0a00 text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Go Fest
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/events" className="hover:bg-black-foreground hover:text-secondary px-3 py-2 rounded-md text-sm font-medium">
                Events
              </Link>
              <Link href="/profile" className="hover:bg-black-foreground hover:text-secondary px-3 py-2 rounded-md text-sm font-medium">
                Profile
              </Link>
              <Link href="/merchandise" className="hover:bg-black-foreground hover:text-secondary px-3 py-2 rounded-md text-sm font-medium">
                Merchandise
              </Link>
              <Link href="/cart" className="hover:bg-black-foreground hover:text-secondary px-3 py-2 rounded-md text-sm font-medium">
                Cart
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-black-foreground hover:text-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/event-register" className="hover:bg-black-foreground hover:text-secondary block px-3 py-2 rounded-md text-base font-medium">
              Event Register
            </Link>
            <Link href="/user-profile" className="hover:bg-black-foreground hover:text-secondary block px-3 py-2 rounded-md text-base font-medium">
              User Profile
            </Link>
          </div>
          {/* {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />} */}
        </div>
      )}
    </nav>
  )
}