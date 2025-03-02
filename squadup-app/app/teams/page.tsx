'use client'

import { motion } from 'framer-motion'
import TeamCard from '../components/TeamCard'
import Navbar from '../components/Navbar'

const teams = [
  {
    name: 'AI Innovators',
    description: 'Building next-gen AI solutions for healthcare. Looking for passionate developers and ML engineers.',
    members: [
      { name: 'Alex Chen', role: 'Team Lead', avatar: '/images/avatar-1.jpg' },
      { name: 'Sarah Kim', role: 'ML Engineer', avatar: '/images/avatar-2.jpg' },
      { name: 'Mike Ross', role: 'Backend Dev', avatar: '/images/avatar-3.jpg' }
    ],
    skills: ['Python', 'TensorFlow', 'PyTorch', 'FastAPI'],
    openPositions: ['Frontend Developer', 'ML Engineer', 'UI/UX Designer']
  },
  {
    name: 'Web3 Warriors',
    description: 'Developing decentralized applications for the future of finance. Join us in revolutionizing DeFi.',
    members: [
      { name: 'James Wilson', role: 'Blockchain Lead', avatar: '/images/avatar-4.jpg' },
      { name: 'Emma Davis', role: 'Smart Contract Dev', avatar: '/images/avatar-5.jpg' }
    ],
    skills: ['Solidity', 'React', 'Node.js', 'Web3.js'],
    openPositions: ['Full Stack Developer', 'Smart Contract Developer']
  },
  {
    name: 'Cloud Pioneers',
    description: 'Creating scalable cloud solutions for enterprise clients. Looking for cloud enthusiasts.',
    members: [
      { name: 'David Lee', role: 'Cloud Architect', avatar: '/images/avatar-6.jpg' },
      { name: 'Lisa Wang', role: 'DevOps Engineer', avatar: '/images/avatar-7.jpg' }
    ],
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    openPositions: ['Cloud Engineer', 'DevOps Engineer', 'Backend Developer']
  }
]

export default function TeamsPage() {
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
              Find Your Team
            </motion.h1>
            <motion.p
              className="mx-auto max-w-2xl text-lg text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Connect with talented teams looking for members like you.
              Filter by skills, roles, and project types to find your perfect match.
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
              placeholder="Search teams..."
              className="input flex-1 md:max-w-xs"
            />
            <select className="input md:w-40">
              <option value="">All Categories</option>
              <option value="ai-ml">AI/ML</option>
              <option value="web3">Web3</option>
              <option value="cloud">Cloud Computing</option>
              <option value="mobile">Mobile Development</option>
            </select>
            <select className="input md:w-40">
              <option value="">Required Skills</option>
              <option value="python">Python</option>
              <option value="javascript">JavaScript</option>
              <option value="solidity">Solidity</option>
              <option value="aws">AWS</option>
            </select>
            <button className="btn btn-primary rounded-lg px-6 py-2">
              Filter
            </button>
          </motion.div>

          {/* Create Team Button */}
          <motion.div
            className="mb-8 flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <button className="btn btn-primary rounded-full px-6 py-2">
              + Create New Team
            </button>
          </motion.div>

          {/* Teams Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teams.map((team, i) => (
              <TeamCard key={i} {...team} />
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <button className="btn rounded-full border-2 border-primary-600 px-8 py-3 font-semibold text-primary-600 hover:bg-primary-50">
              Load More Teams
            </button>
          </div>
        </div>
      </main>
    </>
  )
} 