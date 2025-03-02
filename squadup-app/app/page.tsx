'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Navbar from './components/Navbar'
import AuthModal from './components/AuthModal'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  const handleSignInClick = () => {
    setIsAuthModalOpen(true)
  }

  return (
    <>
      <Navbar />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      
      <main className="relative min-h-screen overflow-hidden">
        {/* Background Elements */}
        <div className="fixed inset-0 bg-gradient-to-b from-background via-background to-background/80">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `
              linear-gradient(to right, rgba(16, 185, 129, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(16, 185, 129, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Floating Orbs */}
        <div className="pointer-events-none fixed inset-0 flex items-center justify-center">
          <div className="relative h-[800px] w-[800px]">
            <motion.div
              className="absolute left-20 top-32 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,theme(colors.emerald.500/0.3)_0%,transparent_70%)] blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute right-40 top-40 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,theme(colors.cyan.500/0.3)_0%,transparent_70%)] blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,theme(colors.emerald.500/0.3)_0%,transparent_70%)] blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-20 text-center">
          <motion.div
            className="container relative z-10"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div 
              className="diamond-card mb-8 inline-block"
              variants={fadeInUp}
            >
              <div className="glass-button diamond-shine">
                <span className="text-sm font-medium text-emerald-400">
                  💎 Welcome to SquadUp - Where Teams Shine
                </span>
              </div>
            </motion.div>
            
            <motion.h1 
              className="mb-6 text-4xl font-bold tracking-tight md:text-7xl"
              variants={fadeInUp}
            >
              Build Your
              <br />
              <span className="gradient-text">
                Dream Team Today
              </span>
            </motion.h1>
            
            <motion.p 
              className="mx-auto mb-8 max-w-2xl text-lg text-emerald-300/80"
              variants={fadeInUp}
            >
              Join forces with brilliant minds, create extraordinary projects, and achieve greatness together.
            </motion.p>

            <motion.div
              className="flex flex-col items-center gap-4 md:flex-row md:justify-center"
              variants={fadeInUp}
            >
              <button 
                onClick={handleSignInClick}
                className="glass-button diamond-shine bg-emerald-500/20 text-emerald-400 w-full md:w-auto"
              >
                Start Your Journey
              </button>
              <button className="glass-button diamond-shine bg-cyan-500/20 text-cyan-400 w-full md:w-auto">
                Explore Teams
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="relative py-20">
          <div className="container">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-8 text-3xl font-bold md:text-5xl gradient-text">Why Choose SquadUp?</h2>
              <p className="mx-auto mb-16 max-w-2xl text-lg text-emerald-300/80">
                Your gateway to exceptional team building and project success
              </p>
              
              <div className="grid gap-8 md:grid-cols-3">
                {[
                  { 
                    icon: '💎', 
                    title: 'Premium Talent Matching', 
                    desc: 'Connect with elite team members who share your vision',
                    color: 'bg-emerald-500/20' 
                  },
                  { 
                    icon: '✨', 
                    title: 'Seamless Collaboration', 
                    desc: 'State-of-the-art tools for effortless teamwork',
                    color: 'bg-cyan-500/20' 
                  },
                  { 
                    icon: '🏆', 
                    title: 'Track Record of Success', 
                    desc: 'Join teams with proven competition victories',
                    color: 'bg-teal-500/20' 
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="diamond-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                  >
                    <div className="glass-card diamond-shine h-full">
                      <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-lg ${item.color} text-2xl`}>
                        {item.icon}
                      </div>
                      <h3 className="mb-4 text-2xl font-semibold gradient-text">{item.title}</h3>
                      <p className="text-emerald-300/80">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="relative py-20 diamond-bg">
          <div className="container">
            <motion.h2 
              className="mb-16 text-center text-3xl font-bold md:text-5xl gradient-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Your Path to Success
            </motion.h2>
            
            <div className="relative">
              <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 bg-gradient-to-r from-emerald-500/30 via-cyan-500/30 to-teal-500/30 md:block hidden" />
              
              <div className="grid md:grid-cols-3 gap-12">
                {[
                  { step: '1', title: 'Create Your Profile', desc: 'Showcase your unique talents', icon: '💫' },
                  { step: '2', title: 'Join Elite Teams', desc: 'Connect with top performers', icon: '🌟' },
                  { step: '3', title: 'Achieve Excellence', desc: 'Win competitions together', icon: '✨' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="relative flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                  >
                    <div className="glass diamond-shine mb-6 flex h-16 w-16 items-center justify-center rounded-lg text-2xl bg-emerald-500/20">
                      {item.icon}
                    </div>
                    <div className="diamond-card w-full">
                      <div className="glass-card relative z-10">
                        <h3 className="mb-4 text-2xl font-semibold gradient-text">Step {item.step}</h3>
                        <h4 className="mb-2 text-xl text-emerald-400">{item.title}</h4>
                        <p className="text-emerald-300/80">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trending Hackathons */}
        <section className="relative py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 gradient-text">Elite Competitions</h2>
              <p className="text-emerald-300/80">Showcase your skills in prestigious events</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Diamond Challenge AI",
                  date: "Mar 15-17, 2024",
                  participants: 250,
                  prize: "$25,000"
                },
                {
                  title: "Emerald Web3 Summit",
                  date: "Apr 1-3, 2024",
                  participants: 200,
                  prize: "$30,000"
                },
                {
                  title: "Crystal Tech Innovation",
                  date: "Apr 15-17, 2024",
                  participants: 180,
                  prize: "$20,000"
                }
              ].map((hackathon, i) => (
                <motion.div
                  key={i}
                  className="diamond-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="glass-card diamond-shine">
                    <h3 className="text-xl font-semibold mb-2 gradient-text">{hackathon.title}</h3>
                    <p className="text-emerald-400 mb-4">{hackathon.date}</p>
                    <div className="flex justify-between text-sm text-emerald-300/80">
                      <span>{hackathon.participants} participants</span>
                      <span>Prize: {hackathon.prize}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="relative py-20 diamond-bg">
          <div className="container">
            <motion.h2 
              className="mb-16 text-center text-3xl font-bold md:text-5xl gradient-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Success Stories
            </motion.h2>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  text: "SquadUp connected me with an incredible team that led to our startup's success!",
                  name: "Sarah Chen",
                  role: "Tech Innovator"
                },
                {
                  text: "Found my dream team and won multiple hackathons together!",
                  name: "James Wilson",
                  role: "Full Stack Developer"
                },
                {
                  text: "The platform's matching algorithm is simply brilliant.",
                  name: "Maria Garcia",
                  role: "AI Researcher"
                }
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  className="diamond-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  <div className="glass-card diamond-shine">
                    <div className="mb-6 text-4xl text-emerald-400">❝</div>
                    <p className="mb-6 text-lg text-emerald-300/80">"{testimonial.text}"</p>
                    <div className="flex items-center gap-4">
                      <div className="glass h-12 w-12 rounded-lg bg-emerald-500/20" />
                      <div>
                        <div className="font-semibold gradient-text">{testimonial.name}</div>
                        <div className="text-sm text-emerald-300/60">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden py-20">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-teal-500/20 opacity-30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            viewport={{ once: true }}
          />
          <div className="container relative">
            <motion.div
              className="diamond-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass-card diamond-shine text-center">
                <h2 className="mb-8 text-4xl font-bold md:text-6xl gradient-text">Ready to Shine?</h2>
                <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                  <button 
                    onClick={handleSignInClick}
                    className="glass-button diamond-shine bg-emerald-500/20 text-emerald-400 w-full md:w-auto"
                  >
                    Join SquadUp Elite
                  </button>
                  <div className="flex gap-4 w-full md:w-auto">
                    <button className="glass-button diamond-shine bg-cyan-500/20 text-cyan-400 flex-1 md:flex-none">
                      <span className="flex items-center justify-center gap-2">
                        <span>Google</span>
                      </span>
                    </button>
                    <button className="glass-button diamond-shine bg-teal-500/20 text-teal-400 flex-1 md:flex-none">
                      <span className="flex items-center justify-center gap-2">
                        <span>GitHub</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
} 