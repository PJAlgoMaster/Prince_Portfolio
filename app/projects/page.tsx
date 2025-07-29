"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/github-projects")
      .then((res) => res.json())
      .then(setRepos);
  }, []);

  return (
    <main className="min-h-screen w-full bg-black text-white pt-24 pb-16 px-2 xs:px-3 sm:px-4">
      {/* Profile Image with Glow */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex justify-center mb-8"
      >
        <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-yellow-400 shadow-[0_0_20px_#FFD700] overflow-hidden">
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
        className="text-3xl sm:text-5xl font-extrabold text-white mb-8 text-center drop-shadow-[0_0_15px_#FFD700]"
      >
        Projects
      </motion.h1>

      {/* Project Cards */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-0">
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
              scale: 1.04,
              boxShadow: "0 0 14px 2px rgba(255, 215, 0, 0.32)",
            }}
            className="bg-gradient-to-br from-zinc-900 via-black to-gray-900 border border-yellow-500/30 rounded-2xl p-4 xs:p-5 transition-all duration-300 shadow-md hover:shadow-yellow-500/40
              flex flex-col justify-between h-full max-w-full"
          >
            <h3 className="text-base sm:text-lg font-semibold text-yellow-300 mb-2 break-words">
              {repo.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed line-clamp-4">
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
      <div className="mt-12 text-center">
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
  );
}
