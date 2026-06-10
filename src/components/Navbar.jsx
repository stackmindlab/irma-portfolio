function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-950/80 border-b border-purple-900/30"
      style={{boxShadow: '0 1px 20px rgba(139, 92, 246, 0.08)'}}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-white font-bold text-lg hover:text-purple-400 transition">
          Irma Rodriguez
        </a>
        <div className="hidden md:flex gap-8">
          <a href="#about" className="text-gray-400 hover:text-purple-400 transition text-sm font-medium">About</a>
          <a href="#skills" className="text-gray-400 hover:text-purple-400 transition text-sm font-medium">Skills</a>
          <a href="#experience" className="text-gray-400 hover:text-purple-400 transition text-sm font-medium">Experience</a>
          <a href="#projects" className="text-gray-400 hover:text-purple-400 transition text-sm font-medium">Projects</a>
          <a href="#contact" className="text-gray-400 hover:text-purple-400 transition text-sm font-medium">Contact</a>
        </div>
        <a href="mailto:irod261@wgu.edu"
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          style={{boxShadow: '0 0 15px rgba(139, 92, 246, 0.3)'}}>
          Hire Me
        </a>
      </div>
    </nav>
  )
}

export default Navbar
