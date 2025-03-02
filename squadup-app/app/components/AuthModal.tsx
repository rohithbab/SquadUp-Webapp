'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isSignUp, setIsSignUp] = useState(false)

  const modalVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-background/90 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="w-full max-w-md pointer-events-auto">
              <div className="bg-card rounded-xl border border-cyan-500/20 shadow-[0_0_25px_rgba(0,255,255,0.1)]">
                <div className="p-8">
                  {/* Close Button */}
                  <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-cyan-500/60 hover:text-cyan-400 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {/* Header */}
                  <div className="text-center mb-8">
                    <h2 className="neon-text text-3xl font-bold mb-3">
                      {isSignUp ? 'Create Account' : 'Welcome Back'}
                    </h2>
                    <p className="text-cyan-500/60">
                      {isSignUp 
                        ? 'Join our community of innovators'
                        : 'Sign in to continue your journey'
                      }
                    </p>
                  </div>

                  {/* Google Sign In Button */}
                  <button className="btn w-full mb-8 bg-white/5 border border-cyan-500/20 hover:bg-white/10 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(0,255,255,0.15)] flex items-center justify-center gap-3 h-12">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Continue with Google
                  </button>

                  <div className="relative mb-8">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-cyan-500/20"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-card text-cyan-500/60">or continue with email</span>
                    </div>
                  </div>

                  {/* Email Form */}
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-cyan-500/80 mb-1.5">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="input w-full bg-white/5"
                        placeholder="name@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-cyan-500/80 mb-1.5">
                        Password
                      </label>
                      <input
                        type="password"
                        className="input w-full bg-white/5"
                        placeholder="••••••••"
                      />
                    </div>
                    {isSignUp && (
                      <div>
                        <label className="block text-sm font-medium text-cyan-500/80 mb-1.5">
                          Confirm password
                        </label>
                        <input
                          type="password"
                          className="input w-full bg-white/5"
                          placeholder="••••••••"
                        />
                      </div>
                    )}
                    <button
                      type="submit"
                      className="btn-primary w-full h-12 mt-6"
                    >
                      {isSignUp ? 'Create Account' : 'Sign In'}
                    </button>
                  </form>

                  {/* Footer */}
                  <div className="mt-8 text-center">
                    <p className="text-cyan-500/60">
                      {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                      <button
                        className="ml-2 neon-highlight text-cyan-400"
                        onClick={() => setIsSignUp(!isSignUp)}
                      >
                        {isSignUp ? 'Sign In' : 'Sign Up'}
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 