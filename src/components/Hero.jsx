function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <h1 className="text-5xl font-bold text-white mb-4">
        Irma Rodriguez
      </h1>
      <p className="text-xl text-purple-400 font-medium mb-6">
        Full-Stack Engineer | AI & Security
      </p>
      <p className="text-gray-400 max-w-xl text-lg mb-8">
        Software Engineer with 13+ years in enterprise IT. Building at
        the intersection of full-stack development, AI, and cybersecurity.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <a href="https://github.com/yesi2023" target="_blank" rel="noreferrer" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition">
          GitHub
        </a>
        <a href="https://linkedin.com/in/irma-rodriguez" target="_blank" rel="noreferrer" className="border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg font-medium transition">
          LinkedIn
        </a>
        <a href="mailto:your@email.com" className="border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg font-medium transition">
          Contact Me
        </a>
      </div>
    </section>
  )
}

export default Hero
