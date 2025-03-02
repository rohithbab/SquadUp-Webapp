'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import AuthModal from './AuthModal'

export default function Navbar() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  return (
    <>
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 border-b border-cyan-500/10 bg-background/80 backdrop-blur-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold">
              <span className="neon-text">SquadUp</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/teams" className="neon-highlight text-sm">Teams</Link>
              <Link href="/events" className="neon-highlight text-sm">Events</Link>
              <Link href="/about" className="neon-highlight text-sm">About</Link>
            </nav>
          </div>
          
          <button
            onClick={() => setIsAuthModalOpen(true)}
            className="btn-primary rounded-full p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </motion.nav>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  )
} 