'use client'

import { motion } from 'framer-motion'
import EventCard from '../components/EventCard'
import Navbar from '../components/Navbar'

const events = [
  {
    title: 'Global Hackathon 2024',
    date: 'March 15-17, 2024',
    description: 'Join the biggest hackathon of the year. Build innovative solutions for real-world problems.',
    image: '/images/hackathon-1.jpg',
    participants: 250,
    category: 'Hackathon'
  },
  {
    title: 'AI Innovation Challenge',
    date: 'April 1-30, 2024',
    description: 'Create cutting-edge AI solutions. Compete with teams worldwide.',
    image: '/images/hackathon-2.jpg',
    participants: 180,
    category: 'AI/ML'
  },
  {
    title: 'Web3 Development Contest',
    date: 'May 5-7, 2024',
    description: 'Build the future of decentralized applications. Amazing prizes to be won!',
    image: '/images/hackathon-3.jpg',
    participants: 150,
    category: 'Blockchain'
  },
  // Add more events as needed
]

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-20">
        <div className="container py-12">
          {/* Header */}
          <div className="mb-12 text-center">
            <motion.h1
              className="mb-4 text-4xl font-bold md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Upcoming Events
            </motion.h1>
            <motion.p
              className="mx-auto max-w-2xl text-lg text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Discover hackathons, competitions, and collaborative opportunities.
              Join events that match your interests and skills.
            </motion.p>
          </div>

          {/* Filters */}
          <motion.div
            className="mb-8 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <input
              type="text"
              placeholder="Search events..."
              className="input flex-1 md:max-w-xs"
            />
            <select className="input md:w-40">
              <option value="">All Categories</option>
              <option value="hackathon">Hackathons</option>
              <option value="ai-ml">AI/ML</option>
              <option value="blockchain">Blockchain</option>
              <option value="web-dev">Web Development</option>
            </select>
            <select className="input md:w-40">
              <option value="">All Dates</option>
              <option value="this-week">This Week</option>
              <option value="this-month">This Month</option>
              <option value="next-month">Next Month</option>
            </select>
            <button className="btn btn-primary rounded-lg px-6 py-2">
              Filter
            </button>
          </motion.div>

          {/* Events Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, i) => (
              <EventCard key={i} {...event} />
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <button className="btn rounded-full border-2 border-primary-600 px-8 py-3 font-semibold text-primary-600 hover:bg-primary-50">
              Load More Events
            </button>
          </div>
        </div>
      </main>
    </>
  )
} 