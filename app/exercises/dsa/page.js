"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function DsaExercisesPage() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/api/dsa")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Get difficulty color
  const getDifficultyColor = (rating) => {
    if (!rating) return "bg-gray-500/20 text-gray-300 border-gray-400/30";
    const numRating = typeof rating === 'string' ? parseInt(rating) : rating;
    if (numRating <= 3) return "bg-green-500/20 text-green-300 border-green-400/30";
    if (numRating <= 6) return "bg-yellow-500/20 text-yellow-300 border-yellow-400/30";
    return "bg-red-500/20 text-red-300 border-red-400/30";
  };

  const getDifficultyText = (rating) => {
    if (!rating) return "Not Rated";
    const numRating = typeof rating === 'string' ? parseInt(rating) : rating;
    if (numRating <= 3) return "Easy";
    if (numRating <= 6) return "Medium";
    return "Hard";
  };

  // Filter questions
  const filteredQuestions = questions.filter((q) => {
    const matchesSearch = q.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         q.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (filter === "all") return matchesSearch;
    
    const difficulty = getDifficultyText(q.rating).toLowerCase();
    return matchesSearch && difficulty === filter;
  });

  // Get unique difficulty levels
  const difficultyLevels = ["all", "easy", "medium", "hard"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#064e3b] to-[#0ea5e9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            DSA Practice Questions
          </h1>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
            Sharpen your algorithmic thinking with curated data structures and algorithms problems
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search questions or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2">
              {difficultyLevels.map((level) => (
                <button
                  key={level}
                  onClick={() => setFilter(level)}
                  className={`px-4 py-2 rounded-lg font-medium capitalize transition-all ${
                    filter === level
                      ? "bg-cyan-500 text-white shadow-lg"
                      : "bg-white/10 text-cyan-300 hover:bg-white/20"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-4 text-center">
            <div className="text-2xl font-bold text-white">{questions.length}</div>
            <div className="text-cyan-300 text-sm">Total Questions</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-4 text-center">
            <div className="text-2xl font-bold text-white">{filteredQuestions.length}</div>
            <div className="text-cyan-300 text-sm">Filtered Results</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-4 text-center">
            <div className="text-2xl font-bold text-white">
              {new Set(questions.flatMap(q => q.tags)).size}
            </div>
            <div className="text-cyan-300 text-sm">Unique Tags</div>
          </div>
        </div>

        {/* Questions Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredQuestions.map((q) => (
              <Link key={q.id} href={`/exercises/dsa/${q.id}`}>
                <div className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 hover:bg-white/15 hover:scale-105 transition-all duration-300 hover:shadow-2xl cursor-pointer h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="font-bold text-xl text-white group-hover:text-cyan-300 transition-colors leading-tight flex-1 mr-3">
                      {q.name}
                    </h2>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(q.rating)} whitespace-nowrap`}>
                      {getDifficultyText(q.rating)}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {q.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-400/30"
                      >
                        {tag}
                      </span>
                    ))}
                    {q.tags.length > 3 && (
                      <span className="px-3 py-1 bg-white/10 text-cyan-300 rounded-full text-sm border border-white/20">
                        +{q.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-cyan-200">
                      ID: {q.id}
                    </div>
                    <div className="flex items-center text-cyan-300 group-hover:text-white transition-colors">
                      <span className="mr-1">Solve</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* No Results */}
        {!loading && filteredQuestions.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.034 0-3.9.785-5.291 2.072M6.343 6.343A8 8 0 1021.657 21.657 8 8 0 006.343 6.343z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No questions found</h3>
            <p className="text-cyan-300">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Back Link */}
        <div className="text-center mt-12">
          <Link 
            href="/exercises"
            className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-cyan-300 hover:bg-white/20 hover:text-white transition-all"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Categories
          </Link>
        </div>
      </div>
    </div>
  );
}