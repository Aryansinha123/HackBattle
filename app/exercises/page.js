import Link from 'next/link';

export default function ExercisesCategoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#064e3b] to-[#0ea5e9] flex flex-col">
      {/* Main Content */}
      <main className="flex-1 mx-auto max-w-6xl px-4 sm:px-6 py-16 flex flex-col justify-center">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Choose Your Path
          </h1>
          <p className="text-lg sm:text-xl text-cyan-100 max-w-2xl mx-auto">
            Master programming through structured practice. Select a category to begin your journey.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
          {/* DSA Card */}
          <Link 
            href="/exercises/dsa" 
            className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-teal-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                Data Structures & Algorithms
              </h3>
              <p className="text-cyan-100 mb-6 leading-relaxed">
                Master the fundamentals of computer science. Practice arrays, linked lists, trees, graphs, dynamic programming, and advanced algorithms.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-400/30">
                  Arrays
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30">
                  Graphs
                </span>
                <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm border border-teal-400/30">
                  Dynamic Programming
                </span>
              </div>

              {/* Arrow */}
              <div className="flex items-center text-cyan-300 group-hover:text-white transition-colors">
                <span className="mr-2 font-medium">Start Learning</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Web Development Card */}
          <Link 
            href="/exercises/webdev" 
            className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-teal-500/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-teal-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                Web Development
              </h3>
              <p className="text-cyan-100 mb-6 leading-relaxed">
                Build modern web applications from scratch. Learn HTML5, CSS3, JavaScript ES6+, and popular frameworks through hands-on projects.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30">
                  HTML5
                </span>
                <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm border border-teal-400/30">
                  CSS3
                </span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-400/30">
                  JavaScript
                </span>
              </div>

              {/* Arrow */}
              <div className="flex items-center text-cyan-300 group-hover:text-white transition-colors">
                <span className="mr-2 font-medium">Start Building</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <p className="text-cyan-200 text-sm">
            More categories coming soon • Practice makes perfect
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center text-cyan-100 text-sm">
            <p>&copy; 2024 Exercise Platform. Built for developers, by developers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}