'use client'

import { motion } from 'framer-motion'

interface TeamMember {
  name: string
  role: string
  avatar: string
}

interface TeamCardProps {
  name: string
  description: string
  members: TeamMember[]
  skills: string[]
  openPositions: string[]
}

export default function TeamCard({
  name,
  description,
  members,
  skills,
  openPositions
}: TeamCardProps) {
  return (
    <motion.div
      className="rounded-xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <div className="mb-6">
        <h3 className="mb-2 text-xl font-bold">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>

      {/* Members */}
      <div className="mb-6">
        <h4 className="mb-3 text-sm font-semibold text-gray-500">Team Members</h4>
        <div className="space-y-3">
          {members.map((member, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gray-200" />
              <div>
                <div className="font-medium">{member.name}</div>
                <div className="text-sm text-gray-500">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h4 className="mb-3 text-sm font-semibold text-gray-500">Required Skills</h4>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-600"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Open Positions */}
      <div className="mb-6">
        <h4 className="mb-3 text-sm font-semibold text-gray-500">Open Positions</h4>
        <div className="space-y-2">
          {openPositions.map((position, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-lg border border-gray-200 p-3"
            >
              <span className="font-medium">{position}</span>
              <button className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-600 transition-colors hover:bg-primary-100">
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3">
        <button className="btn rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-50">
          Message Team
        </button>
        <button className="btn btn-primary rounded-lg px-4 py-2 text-sm font-medium">
          Join Team
        </button>
      </div>
    </motion.div>
  )
} 