"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Projects() {
  const [repos, setRepos] = useState<any[]>([])

  useEffect(() => {
    fetch("/api/github-projects")
      .then(res => res.json())
      .then(setRepos)
  }, [])

  return (
    <main className="min-h-screen w-full bg-black text-white pt-24 pb-20 px-4 overflow-x-hidden">
      
      {/* Profile Image with Glow */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex justify-center mb-10"
      >
        <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-yellow-400 shadow-[0_0_20px_#FFD700] overflow-hidden">
          <Image
            src="/prince.jpg"
            alt="Profile"
            width={144}
            height={144}
            className="object-cover w-full h-full"
          />
        </div>
      </motion.div>

      {/* Glowing Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-6xl font-extrabold text-white mb-14 text-center drop-shadow-[0_0_15px_#FFD700]"
      >
        Projects
      </motion.h1>

      {/* Project Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 md:px-10">
        {repos.slice(0, 6).map((repo, idx) => (
          <motion.div
            key={repo.id}
            initial={{ y: 30, opacity: 0, scale: 0.95 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2 + idx * 0.1,
              type: "spring",
              stiffness: 80,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255, 215, 0, 0.4)",
            }}
            className="bg-gradient-to-br from-zinc-900 via-black to-gray-900 border border-yellow-500/30 rounded-2xl p-5 transition-all duration-300 shadow-md hover:shadow-yellow-500/40"
          >
            <h3 className="text-lg font-semibold text-yellow-300 mb-2">
              {repo.name}
            </h3>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              {repo.description || "No description provided."}
            </p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 font-medium underline"
            >
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>

      {/* GitHub Link */}
      <div className="mt-16 text-center">
        <a
          href="https://github.com/PjAlgoMaster"
          className="text-lg font-semibold text-yellow-400 underline hover:text-yellow-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          See all projects on GitHub
        </a>
      </div>
    </main>
  )
}
