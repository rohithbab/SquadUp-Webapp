'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface EventCardProps {
  title: string
  date: string
  description: string
  image: string
  participants: number
  category: string
}

export default function EventCard({
  title,
  date,
  description,
  image,
  participants,
  category
}: EventCardProps) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-110"
        />
        <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-900">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-2 text-sm font-medium text-primary-600">{date}</div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-white bg-gray-200"
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {participants} participants
            </span>
          </div>
          <button className="rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-600 transition-colors hover:bg-primary-100">
            Join Event
          </button>
        </div>
      </div>
    </motion.div>
  )
} 